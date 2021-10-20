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

// returns the following format: "{x: X, y: Y, direction: 'DIRECTION'}"

function my_spaceship(direction){
    var x = 0;
    var y = 0;
    var orientation = 0;
    let finalOrientation = "'up'";
    //position 0 = up
    // poistion 1 = right
    // position 2 = down
    // position 3 = left

    for (i = 0; i < direction.length; i ++){
        if (direction[i] === "R"){
            orientation = orientation + 1;
            if(orientation === -1){
                orientation = 0;
            }
        }else if (direction[i] === "L"){
            if(orientation === 4 ){
                orientation = 0;
            }
            orientation = orientation - 1;
        }else{
            if (orientation === 0 || orientation === 4){
                //if up, then add 1 to y
                y--;
            } else if (orientation == 2){
                 // if down sub 1 from y
                 y++;
            } else if (orientation == 1){
                // if face right add 1 to x
                x++;
            }else if (orientation == 3){
                // if face left sub 1 from x
                x--;
            }  
        }
        // console.log(orientation);
        
        if (orientation == 0 || orientation === 4){
            finalOrientation = "'up'";
        } else if (orientation == 2 || orientation == -2){
            finalOrientation = "'down'";
        }else if (orientation == 1 || orientation == -3 ){
            finalOrientation = "'right'";
        } else if (orientation == 3 || orientation == -1){
            finalOrientation = "'left'";
        } else {
            finalOrientation = "'up'"
        }

    }

    var test = "{x: " + x + ", y: " + y + ", direction: " + finalOrientation + "}";

    return test;
};

