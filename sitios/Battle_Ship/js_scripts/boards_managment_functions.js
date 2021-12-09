//====================================================================================================================

//================================== FUNCTIONS FOR THE GAME BOARDS MANAGMENT =========================================

//====================================================================================================================

// * It evaluate the place availability on a board for a Ship object, returning true or false.
// * Parameters: Ship type (5, 4, 3, 2, 1), initial position (0-99), orientation (1=horizontal; 0=vertical) and board (own_ or enemy_board)
function ship_validation(ty, ini, di, board){
    
    let pos_init_x = Math.trunc(ini / 10);
    let pos_init_y = ini % 10;
    
    if(di == 0){ //Evaluation for vertical orientation.
        
        if(pos_init_x > 10 - ty) //Exceeds the limits of the board?
            return false;
        
        else if(pos_init_x == 0){ //If initial row is 0, I don't control the previous row (it exists not)
            
            switch(pos_init_y){ //Evaluation according to column
                    
                case 0:
                    
                    for(let i = 0; i <= ty; i++)
                        if(board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y + 1] != 'w')
                            return false;
                        
                    break;
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    
                    for(let i = 0; i <= ty; i++)
                        if (board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y - 1] != 'w' || board[pos_init_x + i][pos_init_y + 1] != 'w')
                            return false;
                        
                    break;
                    
                case 9:
                    
                    for (let i = 0; i <= ty; i++)
                        if (board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y - 1] != 'w')
                            return false;
            }  
        }else if(pos_init_x == 10 - ty){ //If final row is 9, I don't control the next row (it exists not)
            
            switch (pos_init_y){ //Evaluation according to column
                    
                case 0:
                    
                    for (let i = -1; i <= ty - 1; i++)
                        if (board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y + 1] != 'w')
                            return false;
                        
                    break;
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    
                    for (let i = -1; i <= ty - 1; i++)
                        if (board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y - 1] != 'w' || board[pos_init_x + i][pos_init_y + 1] != 'w')
                            return false;
                        
                    break;
                    
                case 9:
                    
                    for(let i = -1; i <= ty - 1; i++)
                        if (board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y - 1] != 'w')
                            return false;   
            }
        }else{ //I control previous row and next row
            
            switch(pos_init_y){ //Evaluation according to column
                    
                case 0:
                    
                    for(let i = -1; i <= ty; i++)
                        if (board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y + 1] != 'w')
                            return false;
                        
                    break;
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    
                    for(let i = -1; i <= ty; i++)
                        if (board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y - 1] != 'w' || board[pos_init_x + i][pos_init_y + 1] != 'w')
                            return false;
                        
                    break;
                    
                case 9:
                    
                    for(let i = -1; i <= ty; i++)
                        if(board[pos_init_x + i][pos_init_y] != 'w' || board[pos_init_x + i][pos_init_y - 1] != 'w')
                            return false;
            }
        }
    }else if(pos_init_y > 10 - ty) //The same procedure for the case of horizontal orientation
        return false;
    
    else if(pos_init_y == 0){
        
        switch (pos_init_x){
                
            case 0:
                
                for(let i = 0; i <= ty; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x + 1][pos_init_y + i] != 'w')
                            return false;
                    
                break;
                
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                
                for(let i = 0; i <= ty; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x - 1][pos_init_y + i] != 'w' || board[pos_init_x + 1][pos_init_y + i] != 'w')
                        return false;
                    
                break;
                
            case 9:
                
                for(let i = 0; i <= ty; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x - 1][pos_init_y + i] != 'w')
                        return false;
                    
        }
    }else if(pos_init_y == 10 - ty){
        
        switch(pos_init_x){
                
            case 0:
                
                for(let i = -1; i <= ty - 1; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x + 1][pos_init_y + i] != 'w')
                        return false;
                    
                break;
                
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                
                for(let i = -1; i <= ty - 1; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x - 1][pos_init_y + i] != 'w' || board[pos_init_x + 1][pos_init_y + i] != 'w')
                        return false;
                    
                break;
                
            case 9:
                
                for(let i = -1; i <= ty - 1; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x - 1][pos_init_y + i] != 'w')
                        return false;
        }
    }else{
        
        switch(pos_init_x){
                
            case 0:

                for(let i = -1; i <= ty; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x + 1][pos_init_y + i] != 'w')
                        return false;
                    
                break;
                
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:

                for(let i = -1; i <= ty; i++)
                    if (board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x - 1][pos_init_y + i] != 'w' || board[pos_init_x + 1][pos_init_y + i] != 'w')
                        return false;
                    
                break;
                
            case 9:

                for(let i = -1; i <= ty; i++)
                    if(board[pos_init_x][pos_init_y + i] != 'w' || board[pos_init_x - 1][pos_init_y + i] != 'w')
                        return false;
        }
    }
    return true;
}

// * It prints the ship number passed as argument in its corresponding positions of boards.
// * Parameters: fleet to which the ship belongs (own_ or enemy_fleet), ship number (=index of fleet array)
function board_overwrite(fleet, num_boat){
    
    //It decomposes starting position
    let ini_x = Math.trunc(fleet[num_boat].occupied_places[0] / 10);
    let ini_y = fleet[num_boat].occupied_places[0] % 10;
    
    if(fleet == own_fleet) // It searchs the board corresponding to the ship
        var board = own_board;
    else
        var board = enemy_board;

    if(fleet[num_boat].direction == 0) // It prints the number
        for(let i = 0; i < fleet[num_boat].type; i++)
            board[ini_x + i][ini_y] = num_boat;

    else
        for(let i = 0; i < fleet[num_boat].type; i++)
            board[ini_x][ini_y + i] = num_boat;   
}

// * It overwrites the positions adjacent to a sunken ship on the user board. Its purpose is that the machine does not fire on known forbidden positions.
// * Parameter: a Ship object
function overwrite_adjacent_places(ship){
    
    let i, condition;
    
    if(ship.direction == 0){ // It detects the ship orientation to set up the counter initialization and the exit condition for the loop "for"
        
        if(ship.occupied_places[0] / 10 < 1){
            
            i = 0;
            condition = ship.type * 10 + 10;
            
        }else if(ship.occupied_places[ship.type - 1] / 10 >= 9){
            
            i = -10; 
            condition = ship.type * 10;
                
        }else{
            
            i = -10; 
            condition = ship.type * 10 + 10;
        }
        
        for(; i < condition; i+=10){ //It prints a prohibitive "t" in the corresponding positions.
                
            let num = ship.occupied_places[0] + i;
            let x = Math.trunc(num / 10);
            let y = num % 10;

            if(y == 0){
                own_board[x][y] = "t";
                own_board[x][y + 1] = "t";
            }else if(y == 9){
                own_board[x][y] = "t";
                own_board[x][y - 1] = "t";
            }else{
                own_board[x][y] = "t";
                own_board[x][y - 1] = "t";
                own_board[x][y + 1] = "t";
            }
        }
    }else{ //Idem
        
        if(ship.occupied_places[0] % 10 < 1){
            
            i = 0; 
            condition = ship.type + 1;
                
        }else if(ship.occupied_places[ship.type - 1] % 10 >= 9){
            
            i = -1; 
            condition = ship.type;
                
        }else{
            
            i = -1;
            condition = ship.type + 1;
                
        } 
        
        for(; i < condition; i++){
            
            let num = ship.occupied_places[0] + i;
            let x = Math.trunc(num / 10);
            let y = num % 10;

            if(x==0){
                own_board[x][y] = "t";
                own_board[x + 1][y] = "t";
            }else if(x==9){
                own_board[x][y] = "t";
                own_board[x - 1][y] = "t";
            }else{
                own_board[x][y] = "t";
                own_board[x - 1][y] = "t";
                own_board[x + 1][y] = "t";
            }
        }
    }
}

// * It cleans the positions of user board occupied by a certain ship image at distribution fleet stage. This is useful when moving a boat from one position to another, and the abandoned place must remain available for future emplacements. 
// * Parameters: ship image object, initial position of emplacement (0-99)
function clean_position_ship_draw(ship_draw, ini_pos){
    
    let x = Math.trunc(ini_pos / 10); //It decomposes initial position number
    let y = ini_pos % 10;
                
    if(ship_draw.className == "horizontal") //It capture the orientation
        dir = 1;
    else
        dir = 0;
    
    switch(ship_draw.id){ //According to orientation and ship type, it prints "w" in corresponding positions.

        case "ca":
            
            if(dir == 0)
                for(let i = 0; i < 5; i++)
                    own_board[x+i][y] = "w";
                
            else
                for(let i = 0; i < 5; i++)
                    own_board[x][y+i] = "w";
                
            break;

        case "v1":
        case "v2":
            
            if(dir == 0)
                for(let i = 0; i < 4; i++)
                    own_board[x+i][y] = "w";
                
            else
                for(let i = 0; i < 4; i++)
                    own_board[x][y+i] = "w";
                
            break;

        case "s1":
        case "s2":
        case "s3":
            
            if(dir == 0)
                for(let i = 0; i < 3; i++)
                    own_board[x+i][y] = "w";
                
            else
                for(let i = 0; i < 3; i++)
                    own_board[x][y+i] = "w";
                
            break;

        case "c1":
        case "c2":
        case "c3":
        case "c4":
            
            if(dir == 0)
                for(let i = 0; i < 2; i++)
                    own_board[x+i][y] = "w";
                
            else
                for(let i = 0; i < 2; i++)
                    own_board[x][y+i] = "w";
                
            break;

        case "b1":
        case "b2":
        case "b3":
        case "b4":
        case "b5":
            
            own_board[x][y] = "w";
            break;
    }
}
       
       