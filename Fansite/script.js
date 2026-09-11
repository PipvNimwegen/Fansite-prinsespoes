let grootPlaatje = document.getElementById("debestefotoever2");
let afbeelding1 = document.getElementById("kleineFoto1");
let afbeelding2 = document.getElementById("kleineFoto2");
let afbeelding3 = document.getElementById("kleineFoto3");
let afbeelding4 = document.getElementById("kleineFoto4");
let afbeelding5 = document.getElementById("kleineFoto5");

function selectAfbeelding1() {
    grootPlaatje.src = afbeelding1.src
}

function selectAfbeelding2() {
    grootPlaatje.src = afbeelding2.src
}

function selectAfbeelding3() {
    grootPlaatje.src = afbeelding3.src
}

function selectAfbeelding4() {
    grootPlaatje.src = afbeelding4.src
}

function selectAfbeelding5() {
    grootPlaatje.src = afbeelding5.src
}

//geluidjes

let miauw = new Audio("audio/miauw.mp3");

function miauwGeluid() {
    miauw.play()
}

let maxwell = new Audio("audio/maxwell.mp3");
let isPlaying = false;
let maxwellButton = document.getElementById("maxwellButton");

function maxwellGeluid() {
    if(!isPlaying){
        maxwell.play();
        maxwell.loop = true;
        isPlaying = true;
        maxwellButton.innerHTML = "STOP!"
        maxwellButton.style.color = "red"
    } 
    else {
        maxwell.pause();
        maxwell.currentTime = 0;
        isPlaying = false;
        maxwellButton.innerHTML = "Een leuk muziekje"
        maxwellButton.style.color = "#8f0b65"
    }
}