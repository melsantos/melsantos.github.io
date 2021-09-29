var i = 0;
var blurb = document.getElementById('typer');
var blurbs = [    
    "Hello World!",
    "UC Riverside Alumni",
    "Error: Object not found",
    "Just kidding!",
]
var blurb_text = blurbs[0];
var j = 0;
var speed = 80;

function startInterval() {
    setInterval(changeText, 6000);
}

function typeOut() {
    if(j < blurb_text.length) {
        blurb.innerHTML += blurb_text.charAt(j);
        j = j + 1;
        setTimeout(typeOut, speed);
    }
}

function changeText() {
    j = 0;
    i = (i < blurbs.length - 1) ? i + 1 : 0;
    blurb_text = blurbs[i];
    blurb.innerHTML = '';
    typeOut();
}

function getValue(radio) {
    var mv = document.getElementById("mv")
    mv.src=`media/glf/${radio.value}`
}

startInterval();
setTimeout(typeOut, 1500);
