"use strict";

function onStart() {
    var button = document.createElement("button");
    button.id = "btn";
    button.innerText = "Click me!";
    button.style.display = "block";
    button.style.margin = "15px";
    document.body.appendChild(button);

    button.onclick = click;
    button.onmouseover = mouseOver;
    button.onmouseout = mouseOut;

    var image = document.createElement("img");
    image.id = "image1";
    image.src = "../Pics/Pic1.jpg";
    image.style.maxWidth = "300px";
    image.style.display = "block";
    image.style.margin = "15px";
    image.onmouseover = mouseOver;
    image.onmouseout = mouseOut;
    document.body.appendChild(image);
}

function click() {
    var image = document.getElementById("image1");
    if (image.style.display === "block") {
        image.style.display = "none";
    } else {
        image.style.display = "block";
    }
}

function mouseOver() {
    var button = document.getElementById("btn");
    button.style.color = "blue";
}

function mouseOut() {
    var button = document.getElementById("btn");
    button.style.color = "red";
}