// let canvas = document.querySelector("canvas");

// let ctx = canvas.getContext("2d");
// let width = canvas.width = window.innerWidth;
// let height = canvas.height = window.innerHeight;
// let str = "A+jk js:2 @dfs 17 tr YY ufds M5r P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: :";
// let matrix = str.split("");
// let font = 12;
// let col = width / font;
// let arr = [];

// for(let i = 0; i < col; i++) {
//     arr[i] = 1;
// }

// const draw = () => {
//     ctx.fillStyle = "rgba(0,0,0,0.05)";
//     ctx.fillRect(0, 0, width, height);
//     ctx.fillStyle = "#00ff00";
//     ctx.font = `${font}px system-ui`;

//     for(let i = 0; i < arr.length; i++) {
//         let txt = matrix[Math.floor(Math.random() * matrix.length)];
//         ctx.fillText(txt, i * font, arr[i] * font);

//         if(arr[i] * font > height && Math.random() > 0.975) {
//             arr[i] = 0;
//         }
//     }
// }

// setInterval(draw, 20);
// window.addEventListener("resize", () => location.reload());
import { Column } from "./column.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const FONT_SIZE = 26;
let columns = [];
let columnsCount = 0;

initCanvasSize();
initColumns();

animate();

function initCanvasSize() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function initColumns() {
  columnsCount = canvas.width / FONT_SIZE;
  columns = [];
  for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
  }
}

function animate() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // set symbols color
  context.fillStyle = "green";
  context.font = `bold ${FONT_SIZE}px monospace`;
  columns.forEach((column) => column.drawSymbol());

  setTimeout(() => requestAnimationFrame(animate), 200);
}

window.addEventListener("resize", () => {
  initCanvasSize();
  initColumns();
  context.clearRect(0, 0, canvas.width, canvas.height);
});

