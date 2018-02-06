//Determines which shape will be drawn
var mode = 0;

//retrieve node in DOM via ID                                                   
var c = document.getElementById("slate");
var clr = document.getElementById("clear");
var b = document.getElementById("toggle");

                                                                                
//instantiate a CanvasRenderingCOntext2D object                                 
var ctx = c.getContext("2d");                                                   

var x;
var y;
var isCleared = true; 

//Records the current position which will be used as the last position for the next circle/path to be drawn
var recordLast = function(x1, y1) {
    x = x1;
    y = y1;
}

//Draws a circle
var addCircle = function(e) {
    //Sets up the circle with x and y cor of mouse and a radius of 20
    ctx.arc(e.offsetX, e.offsetY, 20, 0, 2*Math.PI);

    //Fill the circle with black
    ctx.fillStyle = "black";   
    return ctx.fill();
};

//Draws a rectangle;
var addRect = function(e) {
    //Draws a blue rectangle
    ctx.fillStyle = "blue";

    //Fills in a rectangle using the mouse's coordinates as the middle point 
    return ctx.fillRect(e.offsetX-25, e.offsetY-25, 50, 50);
};

//Draws
var draw = function(e) {

    //Beginning path 
    ctx.beginPath();

    //Checks for which shape to draw
    if (mode == 1) {
	addCircle(e);
    }

    else {
	addRect(e);
    }

    //If canvas is clean, first path will be drawn starting at the new location of the mouse (not old from recordLast)
    if (isCleared) {
	ctx.moveTo(e.offsetX, e.offsetY);
    }

    //Else, moves path to last recorded position of the mouse
    else {
	ctx.moveTo(x, y);
    }
    
    //Moves path to the new position of the mouse 
    ctx.lineTo(e.offsetX, e.offsetY);
    
    //Results in a line from current position to the last position 
    ctx.closePath(e.offsetX, e.offsetY);

    //Sets the line color red
    ctx.strokeStyle = "red";
    
    //Draws the line
    ctx.stroke();

    //Records the current mouse position (will be used as the last mouse position for the next path/circle) 
    recordLast(e.offsetX, e.offsetY);

    //Canvas is not cleared:
    isCleared = false;
    
};

 
//Clears the canvas
var clear = function() {
    ctx.closePath();
    ctx.clearRect(0, 0, 600, 600);
    isCleared = true;
    console.log("Cleared!")
    console.log(isCleared);
   
};

//Switches mode if toggle is clicked
var switchMode = function() {
    if (mode == 0) {
	mode = 1;
    }

    else {
	mode = 0;
    }
};

b.addEventListener("click", switchMode); 
console.log(mode);
 
c.addEventListener("click", draw);
clr.addEventListener("click", clear); 



    
