//let username = "";

//while(username === "" || username === null){
//    username = window.prompt(`What do you want to be called?`);
//}

//console.log(`Hello ${username}`);
//const health=100
//let up
//let down
//let left
//let right
document.addEventListener('DOMContentLoaded',function() {
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let upRectangle = false
let downRectangle = false
let leftRectangle = false
let rightRectangle = false


// White Game Boarder
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "White";
ctx.rect(129, 70, 40, 40);
ctx.stroke();

function up(){
// up
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "blue";
ctx.rect(136.5, 74, 25, 1);
ctx.stroke();
}

function down(){
// down
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "blue";
ctx.rect(136.5, 106, 25, 1);
ctx.stroke();
}
function left(){
//left
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "blue";
ctx.rect(133, 78, 1, 25);
ctx.stroke();
}
function right(){
//right
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "blue";
ctx.rect(164, 78, 1, 25);
ctx.stroke();
}

// Health Bar
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(30, 130, 65, 10);
ctx.stroke();

// Player
ctx.beginPath();
ctx.fillStyle = "green";
ctx.rect(144, 85, 10, 10);
ctx.fill();

// Arrow1
let arrow1X = 147
let arrow1Y = 0

function update(){
arrow1Y+=1.67
if (arrow1Y>69.5 && upRectangle === true){

} else {
 if(arrow1Y>82) {
    
 }
 else{
    ctx.clearRect(arrow1X, arrow1Y-4, 4, 4)
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.rect(arrow1X, arrow1Y, 4, 4);
ctx.fill();
requestAnimationFrame(update);
 }

}
}
update();



function clearBoxes(box){
ctx.clearRect(135.5, 73.5, 28, 4)
ctx.clearRect(135.5, 105, 28, 4)
ctx.clearRect(132, 77, 4, 28)
ctx.clearRect(163, 77, 4, 28)


if(box === 1){
upRectangle = true
downRectangle = false
leftRectangle = false
rightRectangle = false
}

if(box === 2){
upRectangle = false
downRectangle = true
leftRectangle = false
rightRectangle = false
}

if(box === 3){
upRectangle = false
downRectangle = false
leftRectangle = true
rightRectangle = false
}

if(box === 4){
upRectangle = false
downRectangle = false
leftRectangle = false
rightRectangle = true
}
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        clearBoxes(1)
        up()
    }
    else if(event.keyCode == 83) {
        clearBoxes(2)
        down()
    }
    else if(event.keyCode == 65) {
        clearBoxes(3)
        left()
    }
    else if(event.keyCode == 68) {
        clearBoxes(4)
        right()
    }
});
});







