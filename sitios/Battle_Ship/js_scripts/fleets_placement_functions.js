//====================================================================================================================

//===================================== FUNCTIONS FOR THE FLEETS DEPLOYMENT ==========================================

//====================================================================================================================


//****************************** Functions for Manual Deployment of User Fleet **************************************

//Global variables to pass the type and the orientation of the dragged image to the functions that do not have it as their event target and do not have access to dataTransfer.setData() ("drag_over", "drag_leave"; these variables are also used by "drop").
    var type; 
    var dir;
        
// * Its prepares the ships images and its data to be dragged to user game board
// * Parameter: the event which calls the function.
function drag_start(e){
    
    e.preventDefault
    
//It prepares the image dragged to fit the right size.
    dragged_ship.src = e.target.getAttribute("src");
    
    dragged_ship.className = e.target.className;
    
    e.dataTransfer.setDragImage(dragged_ship, 15, 15);
    
//It stores the dragged ship orientation for the next "Drag and Drop" functions.
    if(e.target.className == "vertical")
        dir = 0;
    else
        dir = 1;
    
//It stores the dragged ship type for the next "Drag and Drop" functions.
    if(e.target.id.startsWith("ca"))    
        type = 5;

    else if(e.target.id.startsWith("v"))
        type = 4;

    else if(e.target.id.startsWith("s"))
        type = 3;

    else if(e.target.id.startsWith("c"))
        type = 2;
    else
        type = 1;
    
//It set up the Id of event Target as data to be transferred.
    e.dataTransfer.setData("text/plain", e.target.id);
    
//It cleans the board if the dragged ship still was on it.
    if(e.target.parentElement.className == "square")
        clean_position_ship_draw(e.target, e.target.parentElement.id.slice(4, 6));
}   

// * It changes the color of lockers over which the ship image is dragged.
// * Parameter: the event which calls the function.
function drag_over(e){
        
    e.preventDefault();
        
    if(e.target.className != "horizontal" && e.target.className != "vertical") //It controls that the image were not dragged over another image (or over itself).
        background_squares_paint(e.target.id.slice(4, 6), type, dir, "#faa");
}

// * It restores the original color of lockers that are leaved by the dragged image.
// * Parameter: the event which calls the function.
function drag_leave(e){
        
        background_squares_paint(e.target.id.slice(4, 6), type, dir, "#7e7e08");
}      
    
// * It puts the dropped ship on the user board and the user fleet array.
// * Parameter: the event which calls the function.
function drop(e){
    
    e.preventDefault();
        
    background_squares_paint(e.target.id.slice(4, 6), type, dir, "#7e7e08"); //It restores the original color of the lockers where the ship was dropped.

    if(ship_validation(type, Number(e.target.id.slice(4,6)), dir, own_board)){ //If the new position is validated...

        click_sound.play();
        
        var id = e.dataTransfer.getData("text/plain");
        
        e.target.appendChild(document.getElementById(id)); //...the ship image is put on the board...

        switch(id){ //...and the Ship object is added to the user fleet array. Also the corresponding board positions are overwritten with the ship number.
                
            case "ca":
                own_fleet[0] = new Ship(5, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 0);
                break;
                
            case "v1":
                own_fleet[1] = new Ship(4, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 1);
                break;
                
            case "v2":
                own_fleet[2] = new Ship(4, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 2);
                break;
                
            case "s1":
                own_fleet[3] = new Ship(3, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 3);
                break;
                
            case "s2":
                own_fleet[4] = new Ship(3, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 4);
                break;
                
            case "s3":
                own_fleet[5] = new Ship(3, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 5);
                break;
                
            case "c1":
                own_fleet[6] = new Ship(2, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 6);
                break;
                
            case "c2":
                own_fleet[7] = new Ship(2, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 7);
                break;
                
            case "c3":
                own_fleet[8] = new Ship(2, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 8);
                break;
                
            case "c4":
                own_fleet[9] = new Ship(2, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 9);
                break;
                
            case "b1":
                own_fleet[10] = new Ship(1, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 10);
                break;
                
            case "b2":
                own_fleet[11] = new Ship(1, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 11);
                break;
                
            case "b3":
                own_fleet[12] = new Ship(1, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 12);
                break;
                
            case "b4":
                own_fleet[13] = new Ship(1, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 13);
                break;
                
            case "b5":
                own_fleet[14] = new Ship(1, Number(e.target.id.slice(4,6)), dir);
                board_overwrite(own_fleet, 14);
                break;
        } 
    }else{ //If the position was not validated, it reports the rejection to the user.

        sign("Forbidden place! \n Please, try again.");
    }
}  

// * It rotates a ship image.
// * Parameter: the event which calls the function.
function ship_draw_rotation(e){
    
    if(e.target.parentElement.className == "square"){ //If the image is on the game board, to validate the new position is needed.
    
        clean_position_ship_draw(e.target, e.target.parentElement.id.slice(4, 6)) //It cleans the previous positions to validate the                                                                             new one (they necessarily overlap).
        
        if(e.target.className == "vertical"){ //It sets the new orientation from the old one.
            var di=1;
        }else{
            var di=0;
        }
        
        switch(e.target.id){ // It sets the fleet array index where will store the new ship, and its length.
            case "ca":
                var num_boat = 0;
                var ty = 5;
                break;
            case "v1":
                var num_boat = 1;
                var ty = 4;
                break;
            case "v2":
                var num_boat = 2;
                var ty = 4;
                break;
            case "s1":
                var num_boat = 3;
                var ty = 3;
                break;
            case "s2":
                var num_boat = 4;
                var ty = 3;
                break;
            case "s3":
                var num_boat = 5;
                var ty = 3;
                break;
            case "c1":
                var num_boat = 6;
                var ty = 2;
                break;
            case "c2":
                var num_boat = 7;
                var ty = 2;
                break;
            case "c3":
                var num_boat = 8;
                var ty = 2;
                break;
            case "c4":
                var num_boat = 9;
                var ty = 2;
                break;
        }       
        
        if(ship_validation(ty, e.target.parentElement.id.slice(4, 6), di, own_board)){ // If the new orientation is validated...
            
            click_sound.play();
            
            own_fleet[num_boat] = new Ship(ty, Number(e.target.parentElement.id.slice(4,6)), di); //... it store the new Ship,
            board_overwrite(own_fleet, num_boat); // puts it on the board...
            horiz_vertic_alternate(e.target); //...and change the orientation of the ship image;...
            
            
        }else{ //...else it rewrite the previous ship on the board and report the forbidden change to the user.

            board_overwrite(own_fleet, num_boat);
            sign("Forbidden place!");
        }
    }else{ // If the image is not on the board, it can carry out the orientation change without validation.
        click_sound.play();
        horiz_vertic_alternate(e.target);
    }
}


//****************************** Functions for Automatic Random Deployment of Fleets **************************************

// * It manages the random placement of user fleet.
// * Parameters: none.
function own_board_random_deployment(){
    
    click_sound.play();
    
    random_fleet_deployment(own_board, own_fleet); //It calls the random fleet distribution function.

    for(let i = 0; i < 15; i++){ //Loop that puts all distributed ships in place.

        if(i < 10){ //For all ships that occupy more than one position, it sets the drawing that corresponds to their orientation.
            if(own_fleet[i].direction == 0){

                ships_draw[i].setAttribute("class", "vertical");
                
                let src = ships_draw[i].getAttribute("src");
                src = src.split("_");
                ships_draw[i].setAttribute("src", "images/vertic_" + src[1]);

            }else{
                
                ships_draw[i].setAttribute("class","horizontal");
                
                let src = ships_draw[i].getAttribute("src");
                src = src.split("_");
                ships_draw[i].setAttribute("src", "images/horiz_" + src[1]);
                
            }
        }

        own_squares[own_fleet[i].occupied_places[0]].appendChild(ships_draw[i]); //It appends the ship images to the lockers corresponding to their first position.
    }

    sign("Complete fleet. Press 'ready' to continue.");
}

// * It randomly deploys a fleet on a board.
// * Parameters: a 10x10 board (own_ or enemy_board) and a Ship object array (own_ or enemy_fleet).
function random_fleet_deployment(board, fleet){
    
    var flag = false; //Flag to report the successful deployment of each ship and the entire fleet.
    
    do{ //General loop to repeat the fleet build, when there's no more room left on the board.

        for(let i = 0; i < 10; i++) //In each loop a reboot of the board is required, for the ships validation to work.
            for(let j = 0; j < 10; j++)
                board[i][j] = "w";

    //Carrier
        do{ //Loop to validate a random Carrier position.
            let pos_init = Math.trunc(Math.random() * 100); //Random position of carrier.
            let direc = Math.trunc(Math.random() * 2);

            if(ship_validation(5, pos_init, direc, board)){ //If position is validated, the new ship is stored in fleet array.

                fleet[0] = new Ship(5, pos_init, direc);

                flag = true; //Carrier loop exit.

                board_overwrite(fleet, 0); //It prints the ship number in the corresponding positions.
            }  
        }while(flag == false);

    // Vessels
        for(let i = 1; i <= 2; i++){ //Loop to validate two random Vessels position.
            
            flag = false;
            
            do{
                let pos_init = Math.trunc(Math.random() * 100); //Random position of vessels.
                let direc = Math.trunc(Math.random() * 2);
                
                if(ship_validation(4, pos_init, direc, board)){ //If position is validated, the new ship is stored in fleet array.
                    
                    fleet[i] = new Ship(4, pos_init, direc);
                    
                    flag = true;
                    
                    board_overwrite(fleet, i); //It prints the ships number in the corresponding positions.
                }  
            }while(flag == false);
        }
        
    // Submarines
        for(let i = 3; i <= 5; i++){ //Loop to validate three random Submarines position.
            
            flag = false;
            
            do{
                let pos_init = Math.trunc(Math.random() * 100);
                let direc = Math.trunc(Math.random() * 2);
                
                if(ship_validation(3, pos_init, direc, board)){
                    
                    fleet[i] = new Ship(3, pos_init, direc);
                    
                    flag = true;
                    
                    board_overwrite(fleet, i);
                }  
            }while(flag == false);
        }
        
    // Cruises
        var attempts = 0; //Counter of attempts to complete the fleet.
        
        for(let i = 6; i <= 9; i++){ //Loop to validate four random Cruises position.
            
            flag = false;
            
            do{
                let pos_init = Math.trunc(Math.random() * 100);
                let direc = Math.trunc(Math.random() * 2);
                
                if(ship_validation(2, pos_init, direc, board)){
                    
                    fleet[i] = new Ship(2, pos_init, direc);
                    
                    flag = true;
                    
                    board_overwrite(fleet, i);
                }else{
                    
                    attempts++;
                    
                    if(attempts > 40) //If a ship makes 40 unsuccessful attempts, the entire fleet building process is restarted.
                        flag = true;
                }
            }while(flag == false);
            
            if(attempts > 40) //If unsuccessful attempts get over 40, it skips the loop.
               i = 10;
        }
        
    // boats
        if(attempts <= 40){ //If previous attempts do not get over 40, It starts the boats emplacement.
            
            attempts = 0;
            
            for(let i = 10; i <= 14; i++){ //Loop to validate five random Boats position.
                
                flag = false;
                
                do{
                    let pos_init = Math.trunc(Math.random() * 100);
                    let direc = Math.trunc(Math.random() * 2);
                    
                    if(ship_validation(1, pos_init, direc, board)){
                        
                        fleet[i] = new Ship(1, pos_init, direc);
                        
                        flag = true;
                        
                        board_overwrite(fleet, i);
                    }else{
                        
                        attempts++;
                        
                        if(attempts > 40) //Attempts control.
                            flag = true;
                    }
                    
                }while(flag == false);
                
                if(attempts > 40){ //If unsuccessful attempts get over 40, it restarts the general loop.
                    i = 15;
                    flag = false;
                }
            }
        }else{
            flag = false;
        }
    }while(flag == false);
}


//*************************************************************************************************************************

// * It controls whether all ships are located on the game board, and if so, removes the distribution panel, and replace the original ship drawings with the corresponding locker background images.
// * Parameters: none.
function fleet_ready(){
    
    click_sound.play();
    
    var contador = 0;
    
    for(let i = 0; i < 15; i++) //It counts the emplaced ships.
        if(own_fleet[i])
            contador++;
        
    if(contador == 15){ //If all ships era emplaced...
        
        document.getElementById("gameboard_container").removeChild(document.getElementById("own_fleet_distrib")); //...it removes the distribution panel...
        
        for(let i = 0; i < 15; i++){

            ships_draw[i].remove(); //...remove de original drawings...
            
            if(own_fleet[i].type != 1){ //...and puts the background images according to ships orientation.
                if(own_fleet[i].direction == 0){

                    own_squares[own_fleet[i].occupied_places[0]].style.backgroundImage="url(images/vt.png)";

                    for(let j = 1; j < own_fleet[i].type - 1; j++)
                        own_squares[own_fleet[i].occupied_places[j]].style.backgroundImage="url(images/vc.png)";

                    //let sum = own_fleet[i].occupied_places[0]+own_fleet[i].type*10-10;
                    own_squares[own_fleet[i].occupied_places[own_fleet[i].type - 1]].style.backgroundImage="url(images/vb.png)";
                }else{
                    own_squares[own_fleet[i].occupied_places[0]].style.backgroundImage="url(images/hl.png)";

                    for(let j = 1; j < own_fleet[i].type - 1; j++)
                        own_squares[own_fleet[i].occupied_places[j]].style.backgroundImage="url(images/hc.png)";

                    //let sum = own_fleet[i].occupied_places[0]+own_fleet[i].type-1;
                    own_squares[own_fleet[i].occupied_places[own_fleet[i].type - 1]].style.backgroundImage="url(images/hr.png)";
                }
            }else{

                //let sum = own_fleet[i].occupied_places[0];
                own_squares[own_fleet[i].occupied_places[0]].style.backgroundImage="url(images/single.png)";
            }
            
            sign("Press any enemy position to attack!"); //It invites user to start the game.
        }  
    }else{
        sign("Incomplete fleet."); //If any ship are not emplaced, it reports to user.
    }
}


//*************************************** Auxiliary Functions *************************************************************

// * It toggles between horizontal and vertical orientation of a ship image.
// * Parameters: a ship image element of DOM (#ca, #v1, #v2, #s1, #s2, #s3, #c1, #c2, #c3, #c4, #b1, #b2, #b3, #b4, #b5).
function horiz_vertic_alternate(ship_img_obj){
    
    ship_img_obj.classList.toggle("vertical");
    ship_img_obj.classList.toggle("horizontal");
    
    if(ship_img_obj.getAttribute("src").startsWith("images/horiz")){
        
        var src = ship_img_obj.getAttribute("src");
        src = src.split("_");
        ship_img_obj.setAttribute("src", "images/vertic_" + src[1]);
    }else{
        
        var src = ship_img_obj.getAttribute("src");
        src = src.split("_");
        ship_img_obj.setAttribute("src", "images/horiz_" + src[1]);
    }
}

// * It paints the lockers on which a ship image is dragged.
// * Parameters: Initial position (0-99), a Ship type (1-5), orientation (0-1), color (rgba).
function background_squares_paint(init_pos, type_ship, dir, color){
    if(dir == 1){
        
        for(let i = 0; i < type_ship; i++)
            if(Math.trunc((Number(init_pos) + i) / 10) == Math.trunc((Number(init_pos)) / 10))
                own_squares[Number(init_pos) + i].style.backgroundColor = color;   
    }else{
        
        for(let i = 0; i < type_ship * 10; i += 10)
            if(Number(init_pos) + i < 100)
                own_squares[Number(init_pos) + i].style.backgroundColor = color;
    } 
}