// * Template for Ships object. Fifteen are created for each fleet array (own_ and enemy_fleet).
// * Parameters for construction: Ship type (1-5), initial position on board (0-99), orientation (0-1)
class Ship{
    
    constructor(type, init_position, direction){ //Parameters: Ship type, initial position (0-99), orientation
        
        this.type = type; // 5=Carrier; 4=Vessel; 3=Submarine; 2=Cruise; 1=Boat
        this.direction = direction; // 0=Vertical; 1=Horizontal
        this.occupied_places = []; //0-99 board lockers for each ship position
        this.touched_places = 0; //Amount of shooted positions
        this.state = "saved"; //saved, touched or sunken
        
        if(this.direction == 0){ //Initialization of "occupied_places"
            
            for(let i = init_position; i < init_position + this.type * 10; i+=10){
                this.occupied_places.push(i);
            }
        }else{
            
            for(let i = init_position; i < init_position + this.type; i++){
                this.occupied_places.push(i);
            }
        }
    }
    
    state_manager(){ //Method for variation of states
        
        this.touched_places++;
        
        if(this.touched_places == this.type)
            this.state="sunken";
        
        else
            this.state="touched";
    }
}