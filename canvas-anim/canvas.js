const canvas = document.querySelector("canvas");

const winHeight = window.innerHeight;
const winWidth = window.innerWidth;

canvas.height = winHeight;
canvas.width = winWidth;

// c = context
const c = canvas.getContext("2d");