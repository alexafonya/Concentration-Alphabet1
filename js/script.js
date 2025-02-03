
var ALF = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
    'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
];

var LEFT = 'Л';
var BOTH = 'О';
var RIGHT = 'П';

var FIRST_TIME;

HAND = ['Л', 'П', 'О'];

let set = 1600;
let currentIndex = 0;
let alfIndex = 0;
let SETH = 0;
let NEWHAND;


let set2 = set * 3;
let set3 = set * 27;

// Интервалы 

Times_Alf = setInterval(function () { newLetters() }, set3)

Times_1 = setInterval(function () { newHands() }, set2)

Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);

// Перемешивание

window.addEventListener("load", () => { newLetters() });

function newLetters() {
    NEWLETT = ALF.sort(function () { return 0.5 - Math.random() })
    console.log(`NEWAlfavit : ${ALF}`)
}


function newHands() {
    for (let i = HAND.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [HAND[i], HAND[j]] = [HAND[j], HAND[i]];
        console.log(`NEWHAND + ${HAND}`)

    }
}


function randomLetters() {
    document.getElementById("alfavit").innerText = ALF[alfIndex];
    alfIndex = (alfIndex + 1) % ALF.length;
    console.log(alfIndex)

}

const randomHands = () => {

    document.getElementById("hand").innerText = HAND[currentIndex];
    currentIndex = (currentIndex + 1) % HAND.length;
    console.log(currentIndex)
    console.log(`HAND + ${HAND}`)


}


// counter = 0;


// interval1 = window.setInterval(() => {
//     document.querySelector("#memory").innerHTML = counter++;

// }, 1000)

// Расположение Букв


function setFont() {
    SISE_1 = document.getElementById("alfavit").style.fontSize;
    if (SISE_1 <= 60) {
        const LEFT = Math.floor(Math.random() * 90);
        const TOP = Math.floor(Math.random() * 80);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else {
        const LEFT = Math.floor(Math.random() * 84);
        const TOP = Math.floor(Math.random() * 67);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }
    // console.log("set");
}

//  Размер Шрифта

function setSise() {
    const SHRIFT = document.getElementById("fill").value;
    console.log(SHRIFT)
    document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
    document.getElementById('hand').style.fontSize = SHRIFT + 'px';

}

// Экстро



function startApp() {
    clearInterval(Times_3);
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    if (HOLD == Times_3) {
        setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, 1600);
    } else {
        clearInterval(Times_3);
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
    }

}

function extra() {
    const FONT = document.getElementById("fill").value;
    const SISE = Math.floor((Math.random() * 86) + 36);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';
    document.getElementById("hand").style.fontSize = SISE + 'px';
    console.log(SISE)

}

function setTime() {
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    if (HOLD == Times_3) {
        setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    } else {
        clearInterval(Times_3);
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
    }
}


// Полный экран

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}


var menuItem = document.querySelector("#clean");
var dropDownMenu = document.querySelector("#top");
var menuItem2 = document.querySelector("#show");
var dropDownMenu2 = document.querySelector("#top");


menuItem.addEventListener("click", function () {
    dropDownMenu.style.display = "none";
});


menuItem2.addEventListener("click", function () {
    dropDownMenu2.style.display = "grid";
});

// function cleanPan() {
//     menuItem.removeEventListener("click", function () {
//         dropDownMenu.style.display = "none";
//     });
   
// }
