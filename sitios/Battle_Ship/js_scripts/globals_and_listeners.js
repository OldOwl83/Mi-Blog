//====================================================================================================================

//=============================== GLOBAL VARIABLES AND EVENT LISTENERS DEFINITIONS ===================================

//====================================================================================================================


//********************************************* Global Variables ***************************************************
    
//User Board: Array of 10x10 dimension. In each board position, it will store its status ("w"=empty; "f"=failed shot; "t"=ocuppied by touched ship or adjacent to sunken ship; 0-14=number of "saved" Ship object placed there).
    var own_board = new Array(10);
    for(let i = 0; i < 10; i++)
        own_board[i] = new Array(10);

//Initialization of user board, only needed to manual distribution of his fleet, because for the automatic random distribution this initialization must be made by the function "random_fleet_deployment".
    for(let i = 0; i < 10; i++)
        for(let j = 0; j < 10; j++)
            own_board[i][j] = "w";

//Enemy Board: Array of 10x10 dimension. In each board position, it will store its status ("w"=empty; 0-14=number of Ship object placed there).
    var enemy_board = new Array(10);
    for(let i = 0; i < 10; i++)
        enemy_board[i] = new Array(10);

//Arrays of Ship objects representing the user and machine fleets.
    var own_fleet = new Array(15);
    var enemy_fleet = new Array(15);
    

//******************************* Storage of Interactive Elements of DOM *****************************************

    //Draggable images of user ships
    var ships_draw = document.querySelectorAll("#ships_display img");
    var dragged_ship = document.getElementById("dragged_ship");

    //Buttons
    var reset_button = document.getElementById("reset");
    var random_button = document.getElementById("random_own_board");
    var ok_button = document.getElementById("ok");
    var final_button = document.querySelector("#final_sign button");

    //Boards lockers
    var own_squares = document.querySelectorAll("#own_board .square");
    var shots = document.querySelectorAll("#enemy_board .square");

    //Signs and Counters
    var ban = document.getElementById("sign");

    var final_sign = document.getElementById("final_sign_bg");
    var final_sign_text = document.querySelector("#final_sign p");

    var own_counter = document.querySelector("#own_board_container .counter");
    var enemy_counter = document.querySelector("#enemy_board_container .counter");
    
    //Sounds
    var click_sound = document.getElementsByTagName("audio")[0];
    var water_sound = document.getElementsByTagName("audio")[1];
    var bang_sound = document.getElementsByTagName("audio")[2];
    

//***************************** Event Listeners related to Manual Distribution of User Fleet **************************

//Preparation of the drag and the orientation of user ships images.
    for(let i = 0; i < 15; i++){
        
        if(i < 10)
            ships_draw[i].addEventListener("click", ship_draw_rotation, false);
        
        ships_draw[i].addEventListener("dragstart", drag_start, false);
    }
    
//Preparation of drop room of user ships images.
    for(let i = 0; i < 100; i++){
        
        own_squares[i].addEventListener("dragover", drag_over, false);
        
        own_squares[i].addEventListener("dragleave", drag_leave,false);
        
        own_squares[i].addEventListener("drop", drop, false);
    }
    
//Button for the reboot of the user fleet distribution
    reset_button.addEventListener("click", page_reload, false);
    
//Button for the automatic random distribution of user fleet
    random_button.addEventListener("click", own_board_random_deployment, false);
    
//Button for the confirmation of currently distribution of user fleet 
    ok_button.addEventListener("click", fleet_ready, false);

//Final sign button
    final_button.addEventListener("click", page_reload, false);
        
//Machine board lockers receiving the user attacks
    for(let i = 0; i < 100; i++)
        shots[i].addEventListener("click", attacks_exchange, false);

//Call to the machine fleet distribution
    random_fleet_deployment(enemy_board, enemy_fleet);