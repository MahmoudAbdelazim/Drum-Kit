//Play sounds using button clicks
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Play sounds using keyboard presses
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Determine which sound to be played
var sound;
function makeSound (char){
  switch (char) {
    case 'w':
      sound = new Audio('sounds/tom-1.mp3');
      break;
    case 'a':
      sound = new Audio('sounds/tom-2.mp3');
      break;
    case 's':
      sound = new Audio('sounds/tom-3.mp3');
      break;
    case 'd':
      sound = new Audio('sounds/tom-4.mp3');
      break;
    case 'j':
      sound = new Audio('sounds/crash.mp3');
      break;
    case 'k':
      sound = new Audio('sounds/kick-bass.mp3');
      break;
    case 'l':
      sound = new Audio('sounds/snare.mp3');
      break;
    default:
      console.log("No sound played!");
  }
  sound.play();
}

//Make animation when a button is clicked
function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
