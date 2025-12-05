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

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        alert('W was pressed');
    }
    else if(event.keyCode == 83) {
        alert('S was pressed');
    }
    else if(event.keyCode == 65) {
        alert('A was pressed');
    }
    else if(event.keyCode == 68) {
        alert('D was pressed');
    }
});
});







