//track the current interval
var intervalid = 0;

/*
function fires when the user clicks the start button
image will move randomly around the screen every second
*/
function start(){
    //pointer to the img on the index page
    var image = document.getElementById("memeImage");

    /*
    this code will move the image around by changing the top and left coordinates
    this code will run every 1 second 
    */
    intervalid = setInterval(function(){
            var changeX = getRandomNumber();
            var changeY = getRandomNumber();

            image.style.left = changeX + "px";
            image.style.top = changeY + "px";

            console.log("x=" + changeX);
            console.log("y=" + changeY);
    }, 1000);
}

//get a random number
function getRandomNumber(){
    return Math.floor(Math.random() * 1000);
}

/*
function fires when the user clicks the stop button
image will stop moving randomly around the screen every second
*/

function stop(){
    clearInterval(intervalid);

}