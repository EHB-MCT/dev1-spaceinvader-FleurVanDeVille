"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawnInvador();

function drawnInvador(){
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.stroke();
    context.fill();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(75, 75, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(125, 125, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(175, 125, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(225, 125, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(75, 175, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(125, 175, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(225, 175, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(275, 175, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(125, 225, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(175, 225, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(225, 225, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(175, 275, 50, 50);
    context.fill();
    context.stroke();

    context.strokeStyle = "#00FF00";
    context.fillStyle = "#00FF00";
    context.beginPath();
    context.rect(275, 275, 50, 50);
    context.fill();
    context.stroke();
}