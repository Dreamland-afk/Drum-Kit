var noOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var innerhtml = this.innerHTML;

        play(innerhtml);
        addEffect(innerhtml);
    });

    // document.querySelectorAll(".drum")[i].addEventListener("keydown", function (event) {

    //     var name = event.key;
    //     var code = event.code;

    //     play(name);
    // });
}

document.addEventListener("keydown", function (event) {

    var name = event.key;
    play(name);
    addEffect(name);
});

function play(input) {
    switch (input) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            alert("Key has not assigned yet");
            break;
    }
}

function addEffect(key)
{
    var  effectClass = "."+key;
    console.log(effectClass);
    document.querySelector(effectClass).classList.add("pressed");

    setTimeout(function() {
        document.querySelector(effectClass).classList.remove("pressed");
    }, 100);
}