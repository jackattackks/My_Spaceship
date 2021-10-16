// You must create a function that takes in a flight path of a rocket ship as a string of letters and 
// returns the following format: "{x: X, y: Y, direction: 'DIRECTION'}"
// X,Y represent the ending coordinates of your ship and direction represents its final direction.

// Your ship simulator must take in a string of letters that represent a planned flight path for a given rocket ship.
// In a ship’s flight path there are only 3 valid options for movement: 
// R for turning right, L for turning left and A for advancing.

// Orientation is represented as left, right, up or down.
// Space is infinite, so the x,y coordinates you return could be placed on a seemingly infinite 
// grid and can be negative or positive values.

// right = +1
// left = -1
// advance = =1 OR -1

function spaceship(direction){
    var x = 0;
    var y = 0;


    // iterate throug hthe string given
    for (i = 0; i < direction.length; i ++){
        if (direction[i] = "R"){
            x++;
        }else if (direction i = "L"){
            x--;
        }else{
            
        }
    }

        // if the char is r +1 to x


        // else if char is l -1 to x 


        // else move forward




};