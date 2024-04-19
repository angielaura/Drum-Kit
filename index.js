var btnClick = document.querySelectorAll(".drum").length;

for (let i = 0; i < btnClick; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ //this will select all drum classes, since there are 7 drums, then we use array to select them one by one, then attach an event listener for click to each of them so that they respond when got clicked.

        var button = this.innerHTML;        //the "this" whill select whatever querySelectorAll select, deep into its html, and saved in variable button

        makeSound(button);  //now call the makeSound function with button as parameter
        keyAnimation(button);
    });
}

document.addEventListener("keydown", function(event){   //keydown is used to select a button using keyboard, so if we console.log the event, all the properties will got logged, including the "key" property.
//the event means what event triggers it, such as mouseclick or keyboard click.
    makeSound(event.key);   //the parameter means accessing the key property of the event object, so it means we want to take just the key property, not the entire property of the event object
    // key property tells us which keyboard is pressed
    keyAnimation(event.key);
});

function makeSound(key){        //this function takes key as parameters
    switch (key) {          //then switch whatever value key takes
        case "w":           //if the value is w, then the sentence in it will be executed
            var crash = new Audio('sounds/crash.mp3');  //new Audio to assign audio in a variable
            crash.play();       //play() method will be used to play whatever stored in variable crash
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(button);
            break;
    }
}

function keyAnimation(currentKey){
    var animatedKey = document.querySelector("." + currentKey);

    animatedKey.classList.add("pressed"); //add the class pressed to the keys

    setTimeout(function() {
        animatedKey.classList.remove("pressed");
    }, 100); // to avoid button jebol, will remove the pressed class after 100ms
}