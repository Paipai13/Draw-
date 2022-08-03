const canvas = document.getElementById('canvas');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let x = undefined;
let y = undefined;


canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = color;
}


function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.lineWidth = size * 2;
}

increaseButton.addEventListener('click', () => {
  size++;

  if (size >= 50) {
    size = 50;
  }
  updateSize();
});
decreaseButton.addEventListener('click', () => {
  size--;

  if (size <= 1) {
    size = 1
  }
  updateSize();
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSize() {
  sizeEl.innerText = size;
}

// mobile functionality

//var heightRatio = 1.5;
//canvas.height = canvas.width * heightRatio;
//var mousePos = { x: 0, y: 0 };
//ar lastPos = mousePos;

//canvas.addEventListener('touchstart', function(e) {
  //e.preventDefault();
 // mousePos = getTouchPos(canvas, e);
 // var touch = e.touches[0];
 // var mouseEvent = new MouseEvent("mousedown", {
 //   clientX: touch.clientX,
 //   clientY: touch.clientY
 // });
 // canvas.dispatchEvent(mouseEvent);
//}, false);

//canvas.addEventListener('touchend', function(e) {
 // e.preventDefault();
 // var mouseEvent = new MouseEvent("mouseup", {});
 // canvas.dispatchEvent(mouseEvent);
//}, false);

//canvas.addEventListener('touchmove', function(e) {
 // e.preventDefault();
 // var touch = e.touches[0];
 // var mouseEvent = new MouseEvent("mousemove", {
 //   clientX: touch.clientX,
 //   clientY: touch.clientY
 // });
 // canvas.dispatchEvent(mouseEvent);
//}, false);

//function getTouchPos(canvasDom, touchEvent) {
 // var rect = canvasDom.getBoundingClientRect();
 // return {
 //   x: touchEvent.touches[0].clientX - rect.left,
 //   y: touchEvent.touches[0].clientY - rect.top
 // };
//}