//retrieve node in DOM via ID                                                   
var c = document.getElementById("slate");                                       
                                                                                
//instantiate a CanvasRenderingCOntext2D object                                 
var ctx = c.getContext("2d");                                                   
//invoke interface methods                                                      
                                                                                
                                                                                
var i = 0;                                                                      
for (i =0; i < 100; i++) {                                                      
    if (i % 2) {                                                                
        ctx.fillRect(i, i, 50, 50);                                             
    }                                                                           
}    
