//====================================================================================================================

//================================== FUNCTIONS FOR THE GAME DEVELOPMENT =========================================

//====================================================================================================================

// * It manages the shots exchange, evaluates the game end conditions (victory) and controls the sunken ships counters.
// * Parameter: the event that calls this function.
function attacks_exchange(e){
    
//********************* Static variables for the preservation of game conditions ************************************
    
    if(typeof attacks_exchange.own_shots == 'undefined') //User shots counter. This variable and the following one avoid giving the victory to the user who has shot without paying attention to the rhythm of the machine.
        attacks_exchange.own_shots = 0;
    
    if(typeof attacks_exchange.enemy_shots == 'undefined') //Machine shots counter.
        attacks_exchange.enemy_shots = 0;
    
    if(typeof attacks_exchange.own_sunken_counter == 'undefined') //User sunken ships counter.
        attacks_exchange.own_sunken_counter = 0;
    
    if(typeof attacks_exchange.enemy_sunken_counter == 'undefined') //Machine sunken ships counter.
        attacks_exchange.enemy_sunken_counter = 0;
    
    if(typeof attacks_exchange.wait_for_enemy == 'undefined') //It avoid giving the victory to user when it is true.
        attacks_exchange.wait_for_enemy = false;
    
    if(typeof attacks_exchange.enemy_victory == 'undefined') //It alerts the "enemy_attack" function that the machine has already won, so that it does not go into an infinite loop (because there would be no more place to shoot).
        attacks_exchange.enemy_victory = false;
    
//********************************************************************************************************************
    
    if(shot(Number(e.target.id.slice(1)))) //It calls to user shot function, and when this return "true", it adds a sunken ship to counter.
        attacks_exchange.enemy_sunken_counter++;
    
    attacks_exchange.own_shots++; //It adds always a shot to user counter.
    
    e.target.removeEventListener('click', attacks_exchange); //It prevents the locker used for calling this functions, from being able to call it again.
    
    if((enemy_counter.textContent = attacks_exchange.enemy_sunken_counter) != 15){ //If last user shot do not reach 15 sunken ships, it enables the enemy attack.
        
        setTimeout(function(){ //Delay.

            sign("The enemy prepare his shot!");

            setTimeout(function(){ //Delay.

                if(enemy_attack(attacks_exchange.enemy_victory)) //It adds a sunken ship to user fleet counter, when the "enemy_attack" function return "true".
                    attacks_exchange.own_sunken_counter++;
                
                attacks_exchange.enemy_shots++; //It adds always a shot to enemy counter.

                if((own_counter.textContent = attacks_exchange.own_sunken_counter) == 15){ //If the machine reaches 15 sunken ships, it announces its victory.
                    
                    final_sign_text.textContent = "You lose!";
                    attacks_exchange.enemy_victory = true;
                    final_sign.style.display = "block";
                }else if(attacks_exchange.wait_for_enemy && attacks_exchange.enemy_shots == attacks_exchange.own_shots - 1){ //Else if user is waiting for enemy and the enemy has finished its shots, it announces the user victory.
                    
                    if(attacks_exchange.enemy_shots == attacks_exchange.own_shots - 1){
                        final_sign_text.textContent = "You win!";
                        final_sign.style.display = "block"; 
                    }
                }
            }, 1000);
        }, 1500);
    }else if(attacks_exchange.enemy_shots < attacks_exchange.own_shots - 1){ //If user has reached 15 sunken ships but the enemy has not finished its shots, it puts the game result on hold.
            
        final_sign_text.textContent = "Wait...";
        attacks_exchange.wait_for_enemy = true;
        final_sign.style.display = "block";
    }else{ //But if the enemy has finished its shots, it announces the user victory.
        
        final_sign_text.textContent = "You win!";
        final_sign.style.display = "block"; 
    }
}

// * It manages the user attacks. It returns "true" when the user sink a ship, or "false" in any other case.
// * Parameter: Id of attacked position locker.
function shot(id_target){
    
    let x = Math.trunc(id_target / 10); //It decomposes the position number.
    let y = id_target % 10;
    
   if(enemy_board[x][y] == "w"){ //When user fails, it only changes the locker appearance.
       
       audio_pause();
       water_sound.play();
       
       sign("Water!");
       
       shots[id_target].style.opacity="0%";
       
       return false;
    }else{ //When user hits, it changes the touched Ship object state.
        
        enemy_fleet[enemy_board[x][y]].state_manager();
        
        audio_pause();
        bang_sound.play();
        
        if(enemy_fleet[enemy_board[x][y]].state == "touched"){ //If the new state is "touched", it puts the corresponding locker appearance.
            
            sign("Touched!");
            
            shots[id_target].style.backgroundColor = "rgba(0,0,0,0)";
            shots[id_target].style.backgroundImage = "url(images/touched.png)";
            
            return false;
        }else{ //If the new state is "sunken", it replaces all affected lockers by the images of corresponding ship.
        
            sign("Sunken!");
            
            if(enemy_fleet[enemy_board[x][y]].type != 1){
                
                if(enemy_fleet[enemy_board[x][y]].direction == 0){
                    
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[0]].style.backgroundImage="url(images/vt.png)";
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[0]].style.backgroundColor="rgba(0, 0, 0, 0)";
                    
                    for(let i = 1; i < enemy_fleet[enemy_board[x][y]].type - 1; i++){
                            shots[enemy_fleet[enemy_board[x][y]].occupied_places[i]].style.backgroundImage="url(images/vc.png)";
                            shots[enemy_fleet[enemy_board[x][y]].occupied_places[i]].style.backgroundColor="rgba(0, 0, 0, 0)";
                    }
                    
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[enemy_fleet[enemy_board[x][y]].type - 1]].style.backgroundImage="url(images/vb.png)";
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[enemy_fleet[enemy_board[x][y]].type - 1]].style.backgroundColor="rgba(0, 0, 0, 0)";
                    
                }else{
                    
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[0]].style.backgroundImage="url(images/hl.png)";
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[0]].style.backgroundColor="rgba(0, 0, 0, 0)";
                    
                    for(let i = 1; i < enemy_fleet[enemy_board[x][y]].type - 1; i++){
                        shots[enemy_fleet[enemy_board[x][y]].occupied_places[i]].style.backgroundImage="url(images/hc.png)";
                        shots[enemy_fleet[enemy_board[x][y]].occupied_places[i]].style.backgroundColor="rgba(0, 0, 0, 0)";
                    }
                    
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[enemy_fleet[enemy_board[x][y]].type - 1]].style.backgroundImage="url(images/hr.png)";
                    shots[enemy_fleet[enemy_board[x][y]].occupied_places[enemy_fleet[enemy_board[x][y]].type - 1]].style.backgroundColor="rgba(0, 0, 0, 0)";
                }
            }else{
            
                shots[enemy_fleet[enemy_board[x][y]].occupied_places[0]].style.backgroundImage="url(images/single.png)";
                shots[enemy_fleet[enemy_board[x][y]].occupied_places[0]].style.backgroundColor="rgba(0, 0, 0, 0)";
            }
            
            return true;
        }
    }   
}


//*************************************** Enemy Attack Functions *****************************************************

// * It manages the machine attacks. It returns "true" when the machine sink a ship, or "false" in any other case.
// * Parameter: a boolean value that indicates whether the machine has already won (it avoids an infinite loop).
function enemy_attack(enemy_victory){
    
//********************* Static variables for the preservation of attack conditions ************************************
    if(typeof enemy_attack.sink_seek == 'undefined') //It indicates whether machine is attempting to shoot down a particular ship.
        enemy_attack.sink_seek = false;
    if(typeof enemy_attack.last_shot_x == 'undefined') //It stores the first position where the currently attacked ship was found ('x' axis).
        enemy_attack.last_shot_x = 0;
    if(typeof enemy_attack.last_shot_y == 'undefined') //Idem for 'y' axis.
        enemy_attack.last_shot_y = 0;
    
    var valid; //Flag to control the mainly loop exit.
    
    if(enemy_victory) //If the machine has already won, it returns.
        return false;
    
    if(!enemy_attack.sink_seek){ //It begins the random attack when there is no found ship to be sunken.
        
        valid = false;
        
        do{
            var shot = Math.trunc(Math.random() * 100); //Random position to attack.
            var shot_x = Math.trunc(shot / 10);
            var shot_y = shot % 10;
            
            if(own_board[shot_x][shot_y] == "w"){ //It records the missed shots.
                
                own_board[shot_x][shot_y] = "f";
                
                own_squares[shot].classList.toggle("water");
                
                audio_pause();
                water_sound.play();
                
                sign("Water!");
                
                valid = true;
                
            }else if(own_board[shot_x][shot_y] == "f" || own_board[shot_x][shot_y] == "t") //If the random shot was previously attempted, the general loop must restart.
                valid = false;
            
            else{ //It manages the hits.
                    
                audio_pause();
                bang_sound.play();
                
                own_squares[shot].style.backgroundImage="url(images/touched.png)"; //It changes the shooted locker appearance.
                own_squares[shot].classList.toggle("touched");
                
                own_fleet[own_board[shot_x][shot_y]].state_manager(); //It controls the state of shooted Ship object.
                
                if(own_fleet[own_board[shot_x][shot_y]].state == "touched"){ //It manages the user board changes.
                    
                    sign("Touched!");
                    
                    own_board[shot_x][shot_y] = "t";
                    
                    enemy_attack.sink_seek = true; //It establishes that the touched ship must still be sunk.
                    
                    last_shot_x = shot_x; //It stores the first position where the currently attacked ship was found.
                    last_shot_y = shot_y;
                    
                    valid = true;
                }else{ //If ship was sunken (only for boats), it overwrites the user board and returns "true".
           
                    sign("Sunken!");
                    
                    overwrite_adjacent_places(own_fleet[own_board[shot_x][shot_y]]);
                    
                    valid = true;
                    
                    return true;
                }
            }
        }while(valid == false);
        
        return false;
    }else{ //If the machine is attempting to sink a particular ship, it calls the special function. 
        
        if(to_sink(last_shot_x, last_shot_y)){ //If the ship was sunken, it enables the random shots and return "true" for the father function to increment the user sunken counter.
            
            enemy_attack.sink_seek = false;
            return true;
        }else
            return false;
    }
}

// * It manages the sinking process of a particular ship.
// * Parameters: the coordinates 'x' and 'y' of the first position where the currently attacked ship was found.
function to_sink(x, y){
    
//********************* Static variables for the preservation of sinking process conditions ************************************
    if(typeof to_sink.shot_right_step == 'undefined') //It stores the displacement with respect to the first position where the currently attacked ship was found.
        to_sink.shot_right_step = 1;
    if(typeof to_sink.direc == 'undefined') //It saves the direction of shots displacement (1=up; 2=right; 3=down; 4=left).
        to_sink.direc = 0;
    if(typeof to_sink.corrected_step == 'undefined') //It indicates whether the currently direction was corrected. In this case, the direction must not be randomly overwritten. 
        to_sink.corrected_step = false;
    
    var valid; //Flag to control the mainly loop exit.
    
    do{
        valid = false;

        if(to_sink.shot_right_step == 1 && to_sink.corrected_step == false){ //Conditions to establish randomly the direction of displacement.

            to_sink.direc = Math.trunc(Math.random()*4)+1;
        }

        switch(to_sink.direc){ //Depending on the direction indicated...

            case 1:

                if(x - to_sink.shot_right_step >= 0){ //If displacement do not exceed the board limit, it manages the displaced shot.

                    if(!isNaN(own_board[x - to_sink.shot_right_step][y])){ //If it finds a number in the board, the shot was right.

                        audio_pause();
                        bang_sound.play();

                        own_squares[(x - to_sink.shot_right_step) * 10 + y].style.backgroundImage="url(images/touched.png)"; //It changes the shooted position locker appearance.
                        own_squares[(x - to_sink.shot_right_step) * 10 + y].classList.toggle("touched");

                        own_fleet[own_board[x - to_sink.shot_right_step][y]].state_manager(); //It manages the state of touched Ship object.

                        if(own_fleet[own_board[x - to_sink.shot_right_step][y]].state == "sunken"){ //If ship was sunken...

                            sign("Sunken!");

                            overwrite_adjacent_places(own_fleet[own_board[x - to_sink.shot_right_step][y]]); //...it modifies the user board,...
                            own_board[x - to_sink.shot_right_step][y] = "t";

                            to_sink.shot_right_step = 1; //...and reboot the static variables for the next ship.
                            to_sink.corrected_step = false;
                            
                            return true; //It return "true" for the father function to increment the user sunken ships counter.
                        }else{ //If the ship was not sunken, it overwrites the touched position and increments the shots displacement.

                            sign("Touched!");

                            own_board[x - to_sink.shot_right_step][y] = "t";
                            to_sink.shot_right_step++;

                            valid = true;
                            
                            return false;
                        }
                    }else if(own_board[x - to_sink.shot_right_step][y] == "w"){ //If the shot failed, it changes the position locker appearance and modifies the user board.

                        own_squares[(x - to_sink.shot_right_step) * 10 + y].classList.toggle("water");

                        audio_pause();
                        water_sound.play();

                        sign("Water!");

                        own_board[x - to_sink.shot_right_step][y] = "f";
                        valid = true;
                        
                    }else //If the shot falls over a already shooted position, the general loop must restart.
                        valid = false;
                    
                }else //If displacement exceeds the board limit, the general loop must restart to get another direction.
                    valid = false;
                    
                if(to_sink.shot_right_step != 1){ //If the shot was not successful and the displacement was advanced, it must corrected the displacement direction (the machine reached one end of the ship).
                            
                    to_sink.shot_right_step = 1;
                    to_sink.direc = 3;
                    to_sink.corrected_step = true;
                }
                
                break;

            case 2: //******************************** Idem case 1 ************************************************

                if(y + to_sink.shot_right_step <= 9){

                    if(!isNaN(own_board[x][y + to_sink.shot_right_step])){

                        audio_pause();
                        bang_sound.play();

                        own_squares[x * 10 + y + to_sink.shot_right_step].style.backgroundImage="url(images/touched.png)";
                        own_squares[x * 10 + y + to_sink.shot_right_step].classList.toggle("touched");


                        own_fleet[own_board[x][y + to_sink.shot_right_step]].state_manager();

                        if(own_fleet[own_board[x][y + to_sink.shot_right_step]].state == "sunken"){

                            sign("Sunken!");

                            overwrite_adjacent_places(own_fleet[own_board[x][y + to_sink.shot_right_step]]);
                            own_board[x][y + to_sink.shot_right_step] = "t";

                            to_sink.shot_right_step = 1;
                            to_sink.corrected_step = false;
                            
                            return true;
                        }else{

                            sign("Touched!");

                            own_board[x][y + to_sink.shot_right_step] = "t";
                            to_sink.shot_right_step++;

                            valid = true;
                            
                            return false;
                        }
                    }else if(own_board[x][y + to_sink.shot_right_step] == "w"){

                        own_squares[x * 10 + y + to_sink.shot_right_step].classList.toggle("water");

                        audio_pause();
                        water_sound.play();

                        sign("Water!");

                        own_board[x][y + to_sink.shot_right_step] = "f";
                        valid = true;
                        
                    }else
                        valid = false;
                    
                }else
                    valid = false;
                    
                if(to_sink.shot_right_step != 1){
                            
                    to_sink.shot_right_step = 1;
                    to_sink.direc = 4;
                    to_sink.corrected_step = true;
                }
                
                break;

            case 3: //******************************** Idem case 1 ************************************************

                if(x + to_sink.shot_right_step <= 9){

                    if(!isNaN(own_board[x + to_sink.shot_right_step][y])){

                        audio_pause();
                        bang_sound.play();

                        own_squares[(x + to_sink.shot_right_step) * 10 + y].style.backgroundImage="url(images/touched.png)";
                        own_squares[(x + to_sink.shot_right_step) * 10 + y].classList.toggle("touched");

                        own_fleet[own_board[x + to_sink.shot_right_step][y]].state_manager();

                        if(own_fleet[own_board[x + to_sink.shot_right_step][y]].state == "sunken"){

                            sign("Sunken!");

                            overwrite_adjacent_places(own_fleet[own_board[x + to_sink.shot_right_step][y]]);
                            own_board[x + to_sink.shot_right_step][y] = "t";

                            to_sink.shot_right_step = 1;
                            to_sink.corrected_step = false;
                            
                            return true;
                        }else{

                            sign("Touched!");

                            own_board[x + to_sink.shot_right_step][y] = "t";
                            to_sink.shot_right_step++;

                            valid = true;
                            
                            return false;
                        }
                    }else if(own_board[x + to_sink.shot_right_step][y] == "w"){

                        own_squares[(x + to_sink.shot_right_step) * 10 + y].classList.toggle("water");

                        audio_pause();
                        water_sound.play();

                        sign("Water!");

                        own_board[x + to_sink.shot_right_step][y] = "f";
                        valid = true;
                        
                    }else
                        valid = false;
                    
                }else
                    valid = false;
                
                if(to_sink.shot_right_step != 1){
                            
                    to_sink.shot_right_step = 1;
                    to_sink.direc = 1;
                    to_sink.corrected_step = true;
                }
                
                break;

            case 4: //******************************** Idem case 1 ************************************************

                if(y - to_sink.shot_right_step >= 0){

                    if(!isNaN(own_board[x][y - to_sink.shot_right_step])){

                        audio_pause();
                        bang_sound.play();

                        own_squares[x * 10 + y - to_sink.shot_right_step].style.backgroundImage="url(images/touched.png)";
                        own_squares[x * 10 + y - to_sink.shot_right_step].classList.toggle("touched");


                        own_fleet[own_board[x][y - to_sink.shot_right_step]].state_manager();

                        if(own_fleet[own_board[x][y - to_sink.shot_right_step]].state == "sunken"){

                            sign("Sunken!");

                            overwrite_adjacent_places(own_fleet[own_board[x][y - to_sink.shot_right_step]]);
                            own_board[x][y - to_sink.shot_right_step] = "t";

                            to_sink.shot_right_step = 1;
                            to_sink.corrected_step = false;
                            
                            return true;
                        }else{

                            sign("Touched!");

                            own_board[x][y - to_sink.shot_right_step] = "t";
                            to_sink.shot_right_step++;

                            valid = true;
                            
                            return false;
                        }
                    }else if(own_board[x][y - to_sink.shot_right_step] == "w"){

                        own_squares[x * 10 + y - to_sink.shot_right_step].classList.toggle("water");

                        audio_pause();
                        water_sound.play();

                        sign("Water!");

                        own_board[x][y - to_sink.shot_right_step] = "f";
                        
                        valid = true;
                        
                    }else
                        valid = false;
                        
                }else
                    valid = false;
                   
                if(to_sink.shot_right_step != 1){
                            
                    to_sink.shot_right_step = 1;
                    to_sink.direc = 2;
                    to_sink.corrected_step = true;
                }
                
                break;
        }
    }while(valid == false);
    
    return false;
}