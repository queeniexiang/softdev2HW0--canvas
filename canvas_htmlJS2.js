var mode = 0;

//retrieve node in DOM via ID                                                   
var c = document.getElementById("slate");
var b = document.getElementById("toggle");
var clr = document.getElementById("clear");

                                                                                
//instantiate a CanvasRenderingCOntext2D object                                 
var ctx = c.getContext("2d");                                                   
//invoke interface methods                                                      

var switchMode = function() {
    if (mode == 0) {
	mode = 1;
    }

    else {
	mode = 0;
    }
};

var addRect = function(e) {
    ctx.fillStyle = "blue";
    return ctx.fillRect(e.offsetX, e.offsetY, 50, 50);
};


var addCircle = function(e) {
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 100, 0, 2*Math.PI);
    ctx.strokeStyle= "yellow"; 
    return ctx.stroke();  
};

var clear = function() {
    return ctx.clearRect(0, 0, 600, 600);
};

b.addEventListener("click", switchMode); 
console.log(mode);

var checkMode = function(e) {
    if (mode == 1) {
	console.log("Circle!");
	addCircle(e); 
	
    }

    else {
	addRect(e);
    }
};

c.addEventListener("click", checkMode);
clr.addEventListener("click", clear); 



    
