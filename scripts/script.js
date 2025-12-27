var Sound = document.getElementById("Sound");
//var iShowSpeed = document.getElementById("iShowSpeed");

//let bool = true;

iShowSpeed.style.visibility = 'hidden';

function PlaySound() {
    console.log("Played");
    Sound.play();
}

function PauseSound() {
    console.log("Paused");
    Sound.pause();
}

/*function TryNotToLaugh() {
    console.log("No, dont!");

    if (bool == true) {
       iShowSpeed.style.visibility = 'visible';
    } else {
        iShowSpeed.style.visibility = 'hidden';
    }

    bool = !bool;
    console.log(bool);
}*/
