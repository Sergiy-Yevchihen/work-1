var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");

//*************** */
const targetBtn = document.querySelector(".button");
targetBtn.addEventListener('click', () => {
    console.log("klik");
})
const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".span"),
  btn: document.querySelector(".button"),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}

// круг
var pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.fillStyle = "yellow";
ctx.arc(150, 100, 75, 0, 2 * pi, false);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.fillStyle = "pink";
ctx.arc(270, 100, 75, 0, 2 * pi, false);
ctx.stroke();
ctx.fill();

ctx.clearRect(0, 0, 400, 200);
canvas.onmousemove = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.clearRect(0, 0, 400, 200);
    ctx.beginPath();
    var radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);

    ctx.arc(200, 100, radius, 0, 2*pi, false);
    ctx.stroke();
    ctx.fill();
}
// ***************************************
// var x = 200;
// var y = 100;
// var stepCount = 0; //кількість кроків в одному напрямку
// var direction; // напрям руху
// var timer;
// var myX;
// var myY;
// function drawDot() {
//     ctx.clearRect(0,0, 400, 200);
//     if (stepCount == 0) {
//         stepCount = Math.floor(15 * Math.random());
//         direction = Math.floor(8 * Math.random());

//     }
//     else {
//         stepCount--;
//     }
//     switch (direction) {
//       case 0:
//         y = y - 1;
//         break;
//       case 1:
//         x = x + 1;
//         break;
//       case 2:
//         y = y + 1;
//         break;
//       case 3:
//         x = x - 1;
//         break;
//       case 4:
//         x = x + 1;
//         y = y - 1;
//         break;
//       case 5:
//         x = x + 1;
//         y = y + 1;
//         break;
//       case 6:
//         x = x - 1;
//         y = y + 1;
//         break;
//       case 7:
//         x = x - 1;
//         y = y - 1;
//         break;

//     }
//     if (x < 0 || x > 400 || y < 0 || y > 200) step = 0;
//     ctx.fillRect(x - 3, y - 3, 6, 6);
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(myX, myY);
//     ctx.stroke();
//     timer = setTimeout(drawDot, 100);
// }
// drawDot();

// canvas.onmousemove = function (event) {
//     myX = event.offsetX;
//     myY = event.offsetY;
// }

// ************
