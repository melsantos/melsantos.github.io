var i = -1;
var blurb = document.getElementById('typer');
var blurb_text = "Hello World!";
var j = 0;
var speed = 80;

if(blurb != null) {
    console.log("Blurb exists");
} else {
    console.log("Blurb doesn't exist");
    throw new Error();
}

var blurbs = [
    "Hello World!",
    "Error: Object not found.",
    "Just kidding we found it.",
    "Wait a minute..."
]

function startInterval() {
    setInterval(changeText, 4500);
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

startInterval();
