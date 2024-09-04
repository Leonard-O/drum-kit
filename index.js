document.querySelector('button').addEventListener('click', handleClick);
var buttons = document.querySelectorAll('.drum');
var numberOfButtons = buttons.length;

for (var i = 0; i < numberOfButtons; i++) {
    buttons[i].addEventListener('click', handleClick);
    document.addEventListener('keypress', handleKeyPress);
}

function handleClick() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function handleKeyPress(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key) {
    switch (key) {
        case 'w':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case 'a':
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;

        case 's':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'k':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'l':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey.toLowerCase()}`);
    activeButton.classList.add('pressed');
    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}

// function BellBoy(yearsOfExperience, name, age, languages) {
// 	this.yearsOfExperience = yearsOfExperience;
// 	this.name = name;
// 	this.age = age;
// 	this.languages = languages;
// 	this.moveSuitcase = function () {
// 		alert('Can I move move your suit case?');
// 		pickUpSuitcase();
// 		move();
// 	};
// 	this.cleaning = function () {
// 		alert('Cleaning the room');
// 		pickUpBucket();
// 		startsCleaning();
// 	};
// }

// var belBoy1 = new BellBoy(5, 'Doe', 32, ['English', 'French', 'Kiswahili']);
// var belboy2 = new BellBoy(10, Leonard, 33, ['English', 'Swahili', 'Latino']);