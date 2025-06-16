var numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){

        var letter = this.innerHTML;
        makeSound(letter);
        buttonAnimation(letter);
    });
        
    
    
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
switch (key){
            case "w":
                var audio = new Audio('./tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('./tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('./tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('./tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('./crash.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('./kick-bass.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('./snare.mp3');
                audio.play();
            break;
            default:
                console.log(letter);
        }
}

function buttonAnimation(currentLatter){
    var activeButton = document.querySelector("." + currentLatter);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}

// var audio = new Audio('./sounds/tom-1.mp3');
//         audio.play();
