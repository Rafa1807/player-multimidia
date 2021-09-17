

let video = document.getElementById("video1");

function retroceder(){
    video.currentTime -= 15;
}
function avancar(){
    video.currentTime += 15;
}
function play(){
 video.play();
}
function pause(){
    video.pause()
}

function onOver(elemento) {
    elemento.style.opacity = "1"
}
function onOut(elemento) {
    elemento.style.opacity = "0"
}