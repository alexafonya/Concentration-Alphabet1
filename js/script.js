
var ALFru = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
    'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
];

var FIRST_TIME;

var HANDru = ['Л', 'П', 'О'];
let ERROR;
var HAND;
var ALF;
let set = 1200;
let currentIndex = 0;
let alfIndex = 0;
let SETH = 0;
let NEWHAND;
var TimesColor;
var TimesExtColor;
var colorSimle = document.getElementById("color");
var colorExtra = document.getElementById("ColorExt");
var Theme = document.getElementById("theme");
var SUPER = document.getElementById("super").value;

let set2 = (set * 3) + 100;
let set3 = set * 27;
let set4 = set * 26;
let set5 = set * 22;

let TIME = document.getElementById("start").value;
let INTERVAL1;
let interTime;
let HOLD = document.getElementById("speed").value;
let SHRIFT;
let SISE;
let SISE_1;

var RED = document.getElementById("alfavit").style.color = "red";
var ORANGE = document.getElementById("alfavit").style.color = "orange";
var YELLOW = document.getElementById("alfavit").style.color = "yellow";
var GREEN = document.getElementById("alfavit").style.color = "green";
var BLUE = document.getElementById("alfavit").style.color = "blue";
var INDIGO = document.getElementById("alfavit").style.color = "indigo";
var VIOLET = document.getElementById("alfavit").style.color = "violet";
var GRAY = document.getElementById("alfavit").style.color = "gray";
var BLACK = document.getElementById("alfavit").style.color = "black";

var colorNow = document.getElementById("color").value;

var menuItem = document.querySelector("#window>input");
var dropDownMenu = document.querySelector("#top");

// Иврит

var ALFheb = [
   'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 
   'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'
]

HANDheb = ['ים', 'שם', 'יח'];

// inglish

var ALFeng = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
 ];
 
 var LEFTeng = 'L';
 var BOTHeng = 'B';
 var RIGHTeng = 'R';
 
 HANDeng = ['L', 'R', 'B'];

 let modal;
 let modal2 = document.querySelector('#modal');
 
const changeLengRus = () =>{
    document.getElementById("min").textContent = " Размер -"
    document.getElementById("plu").textContent = " Размер +"
    document.getElementById("fullScr").value = " Весь экран "
    document.getElementById("minus").textContent = " Скорость -"
    document.getElementById("plus").textContent = " Скорость +"
    document.getElementById("sise").value = "    Сброс    "
    document.getElementById("On").value =  "Супер"
    document.getElementById("super").value = "С.Микс"
    document.querySelector("#co>label").textContent = "Цвет"
    document.querySelector("#CoEx>label").textContent = "Ц.Микс"
    document.getElementById("ru").textContent = "Рус"
    document.getElementById("en").textContent = "Анг"
    document.getElementById("he").textContent = "Ивр"
    document.querySelector("#the>label").textContent = "ЧерныйЭкран"
    document.getElementById("1").innerText = "1мин"
    document.getElementById("2").innerText = "5мин"
    document.getElementById("3").innerText = "10мин"
    document.getElementById("4").innerText = "15мин"
    document.getElementById("5").innerText = "20мин"
}
const changeLengEng = () =>{
     document.getElementById("min").textContent = " Sise -"
    document.getElementById("plu").textContent = " Sise +"
    document.getElementById("fullScr").value = " Full screen "
     document.getElementById("minus").textContent = " Speed -"
    document.getElementById("plus").textContent = " Speed +"
    document.getElementById("sise").value = "   Reset   "
    document.getElementById("On").value =  "Extra"
    document.getElementById("super").value = "ExMix"
    document.querySelector("#co>label").textContent = "Color"
    document.querySelector("#CoEx>label").textContent = "CoMix"
    document.getElementById("ru").textContent = "Ru"
    document.getElementById("en").textContent = "En"
    document.getElementById("he").textContent = "He"
    document.querySelector("#the>label").textContent = "Dark screen"
    document.getElementById("1").innerText = "1min"
    document.getElementById("2").innerText = "5min"
    document.getElementById("3").innerText = "10min"
    document.getElementById("4").innerText = "15min"
    document.getElementById("5").innerText = "20min"
}
const changeLengHeb = () =>{
    document.getElementById("min").textContent = "- גוֹדֶל "
    document.getElementById("plu").textContent = "+ גוֹדֶל "
    document.getElementById("fullScr").value = " מסך מלא "
    document.getElementById("minus").textContent = "-  מְהִירוּת "
    document.getElementById("plus").textContent = "+  מְהִירוּת "
    document.getElementById("sise").value = "   אִתחוּל   "
    document.getElementById("On").value =  "תוֹסֶפֶת"
    document.getElementById("super").value = "מיקס"
    document.querySelector("#co>label").textContent = "צֶבַע"
    document.querySelector("#CoEx>label").textContent = "צֶבַע מיקס"
    document.getElementById("ru").textContent = "רוס"
    document.getElementById("en").textContent = "אנג"
    document.getElementById("he").textContent = "עִברִ"
    document.querySelector("#the>label").textContent = "רקע כהה"
    document.getElementById("1").innerText = "1 דק"
    document.getElementById("2").innerText = "5 דק"
    document.getElementById("3").innerText = "10 דק"
    document.getElementById("4").innerText = "15 דק"
    document.getElementById("5").innerText = "20 דק"
}

 addEventListener("DOMContentLoaded", function() {
    modal = modal1;
    ALF = ALFeng;
    HAND = HANDeng;
    he.addEventListener("click", function () {
        changeLengHeb();
        close.onclick() 
        modal = modal3;
        if (alfIndex > 21){
            alfIndex -= 5;
        } 
        ALF = ALFheb;
        HAND = HANDheb;       
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("he").style.fontSize = "20px"
        document.getElementById("he").style.transition = "0.7s";
        document.getElementById("en").style.fontSize = "14px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("ru").style.fontSize = "14px"
        document.getElementById("ru").style.transition = "0.7s";
     })
    en.addEventListener("click", function () {  
        setTime();      
        changeLengEng();
        close.onclick() 
        modal = modal1;   
        if (alfIndex > 25){
            alfIndex -= 1;
        } 
        ALF = ALFeng;
        HAND = HANDeng;     
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("en").style.fontSize = "20px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("ru").style.fontSize = "14px"
        document.getElementById("ru").style.transition = "0.7s";
        document.getElementById("he").style.fontSize = "14px"
        document.getElementById("he").style.transition = "0.7s"; 
     })
    ru.addEventListener("click", function () {
        changeLengRus();
        close.onclick() 
        modal = modal2;            
        ALF = ALFru;
        HAND = HANDru;            
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("ru").style.fontSize = "20px"
        document.getElementById("ru").style.transition = "0.7s";
        document.getElementById("en").style.fontSize = "14px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("he").style.fontSize = "14px"
        document.getElementById("he").style.transition = "0.7s";
     })
 })

 var Play = document.getElementById("playTime");
 var Stop = document.getElementById("stopTime");
 var resTim = document.getElementById("start");

  resTim.addEventListener("click", function () {
    Play.addEventListener("mousemove",function(){
        Play.style.backgroundColor = " rgb(100, 121, 255)"  
         Play.style.transition = "0.5s"
    })
    Play.addEventListener("mouseleave",function(){
        Play.style.backgroundColor = "rgb(230, 230, 230)"
         Play.style.transition = "0.5s"
    })
    
    Stop.addEventListener("mousemove",function(){
        Stop.style.backgroundColor = "rgb(255, 121, 121)"
        Stop.style.transition = "0.5s"
    })
    
    Stop.addEventListener("mouseleave",function(){
        Stop.style.backgroundColor = "rgb(230, 230, 230)"
        Stop.style.transition = "0.5s"
    })  
    
    Stop.style.backgroundColor = "rgb(230, 230, 230)"
    Stop.style.width = "30px";
    Stop.style.height = "30px";
    Play.style.backgroundColor = "rgb(230, 230, 230)"
    Play.style.width = "30px";
    Play.style.height = "30px";

 })

Play.addEventListener("click", function() {  
    Stop.removeEventListener("click",function(){});
    Stop.addEventListener("mousemove",function(){
        Stop.style.backgroundColor = "rgb(255, 121, 121)"
    })
    
    Stop.addEventListener("mouseleave",function(){
        Stop.style.backgroundColor = " rgb(158, 158, 158)"
    })

    Play.addEventListener("mouseleave",function(){
        Play.style.backgroundColor = "rgb(0, 4, 213)"
    })
    
    Play.style.backgroundColor = " rgb(0, 4, 213)"
    Play.style.transition = "0.5s"
    Play.style.width = "40px";
    Play.style.height = "40px";
    Stop.style.backgroundColor = "rgb(158, 158, 158)"
    Stop.style.transition = "0.5s"
    Stop.style.width = "30px";
    Stop.style.height = "30px";    
    clearInterval(INTERVAL1); 
    INTERVAL1 = setInterval(function () { newCountDown() }, 1000) 
    // this.removeEventListener("mouseleave",function(){})
 })

 Play.addEventListener("mousemove",function(){
    Play.style.backgroundColor = "rgb(100, 121, 255)"  
     Play.style.transition = "0.5s"
})

Play.addEventListener("mouseleave",function(){
    Play.style.backgroundColor = "rgb(230, 230, 230)"
     Play.style.transition = "0.5s"
})

Stop.addEventListener("mousemove",function(){
    Stop.style.backgroundColor = "rgb(255, 121, 121)"
    Stop.style.transition = "0.5s"
})

Stop.addEventListener("mouseleave",function(){
    Stop.style.backgroundColor = "rgb(230, 230, 230)"
    Stop.style.transition = "0.5s"
})
 
Stop.addEventListener("click", function(){
    Play.removeEventListener("click",function(){});
    Play.addEventListener("mousemove",function(){
        Play.style.backgroundColor = " rgb(100, 121, 255)"  
    })
    Play.addEventListener("mouseleave",function(){
        Play.style.backgroundColor = " rgb(158, 158, 158)"
    })
  
    Stop.addEventListener("mouseleave",function(){
        Stop.style.backgroundColor = "rgb(227, 0, 0)"
    })
    Stop.style.backgroundColor = "rgb(227, 0, 0)"
    Stop.style.width = "40px";
    Stop.style.height = "40px";
    Stop.style.transition = "0.5s"
    Play.style.backgroundColor = "rgb(158, 158, 158)"
    Play.style.transition = "0.5s"
    Play.style.width = "30px";
    Play.style.height = "30px";
    clearInterval(INTERVAL1);
    // this.removeEventListener;
})

let setTimes = document.getElementById("start");

setTimes.addEventListener("click", function() {
    clearInterval(INTERVAL1);
    setTimer();
    newCountDown();
})

 const newCountDown = () => {   
     while (TIME != -1) {
    let countDownEl = document.getElementById("countdown")
    let minutes = Math.floor(TIME / 60);
    let seconds = TIME % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let DUBLE = countDownEl.innerHTML = `${minutes} : ${seconds}`;
    document.getElementById("dublicate").value = DUBLE;
    TIME--;
    if (TIME == 10) {
        var Audio = document.getElementById("final")
        Audio.play()
    } if (TIME == 0) {
        stopAudio()
        
        clearInterval(INTERVAL1)
    }
    break
}  

}

function setTimer() {
    TIME = document.getElementById("start").value
    console.log(TIME)
}

// Интервалы 

var Times_Alf = setInterval(function () { newLetters() }, set4)

var Times_1 = setInterval(function () { newHands() }, set2)

var Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);

ExMix = document.getElementById("super");
Ex = document.getElementById("On");
Speed = document.getElementById("speed");

colorSimle.addEventListener("click", function () {
    resetExtColor();
    clear();
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (colorSimle.checked) {
        TimesColor = setInterval(function () {
            randomHands(), setFont(), setColor(),
                randomLetters()
        }, interTime);
   
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, interTime); 
    }
})

colorExtra.addEventListener("click", function () {
    resetColor();
    clear();
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (this.checked) {
        TimesExtColor = setInterval(function () {
            randomHands(), setFont(),
                randomLetters(), setColorAlf(), setColorHand()
        }, interTime);
    
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},interTime);
    }
})

// Перемешивание

window.addEventListener("load", () => { newLetters(),setSise() });

function newLetters() {
    for (let i = ALF.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ALF[i], ALF[j]] = [ALF[j], ALF[i]];
        console.log(`NEWALF = ${ALF}`)

    }
}

function newHands() {
    for (let i = HAND.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [HAND[i], HAND[j]] = [HAND[j], HAND[i]];
        console.log(`NEWHAND = ${HAND}`)
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
    console.log(`HAND = ${HAND} + ${HAND}`)
}

colorExtra.addEventListener("click", function () {

    if (this.checked) {

    } else {

    }
})

// Расположение Букв

let setfontFullScr =()=>{
    console.log("NEW")
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
    if (SHRIFT <= 50) {
        console.log("20-50")
        LEFT = Math.floor(Math.random() * 100);
        TOP = Math.floor(Math.random() * 100);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 70){
        console.log("50-70")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 85 );
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 90){
        console.log("70-90")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 79);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 110){
        console.log("90-110")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 74);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 130){
        console.log("110-130")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 69);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 150){
        console.log("130-150")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 62);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }

}

let setFont =() =>{
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
    if (SHRIFT <= 50) {
        console.log("20-50")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 86);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 70){
        console.log("50-70")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 78);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 90){
        console.log("70-90")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 71);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 110){
        console.log("90-110")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 63);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 130){
        console.log("110-130")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 55);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 150){
        console.log("130-150")
        LEFT = Math.floor(Math.random() * 90);      
        TOP = Math.floor(Math.random() * 45);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }

}

//  Размер Шрифта

$('#min').click(function(){
      $(this).siblings('input')[0].stepDown();
      setSise()
  })
  $('#plu').click(function(){  
      $(this).siblings('input')[0].stepUp(); 
      setSise()
    })
$('#minus').click(function(){
      $(this).siblings('input')[0].stepDown();
      setSise()
  })
  $('#plus').click(function(){  
      $(this).siblings('input')[0].stepUp(); 
      setSise()
    })

function setSise() {
    SHRIFT = document.getElementById("fill").value;
    console.log(SHRIFT)
    ERROR = document.querySelector("#Error2").style.display =  "none";
            // if ( SHRIFT > 150){
            // //     ERROR = document.querySelector("#Error2").style.display =  "block";
            // //     document.querySelector("#Error2").innerHTML =  `The  size  of  letters  should  not  exceed   '150' !`;
            // //     document.querySelector("#Error2").style.position = "reletive";
            // //     document.querySelector("#Error2").style.left = "25%";
            // //     document.querySelector("#Error2").style.top = "45%";
            // //     document.querySelector("#Error2").style.fontSize = "45px";   
            // //     document.querySelector("#Error2").style.color = "red";
            // //     document.querySelector("#block").style.display = "none";
            // // } if(SHRIFT < 20){
            // //     ERROR = document.querySelector("#Error2").style.display =  "block";
            // //     document.querySelector("#Error2").innerHTML =  `The size of the letters should not be less than "20"!`;
            // //     document.querySelector("#Error2").style.position = "reletive";
            // //     document.querySelector("#Error2").style.left = "20%";
            // //     document.querySelector("#Error2").style.top = "45%";
            // //     document.querySelector("#Error2").style.fontSize = "45px";   
            // //     document.querySelector("#Error2").style.color = "red";
            // //     document.querySelector("#block").style.display = "none";
            // // } else{   
            
            // }
    document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
    document.getElementById('hand').style.fontSize = SHRIFT + 'px';
}

function reset() {
    location.reload()
}

function clear() {
    clearInterval(TimesColor);
    clearInterval(TimesExtColor);
    clearInterval(Times_3);
}

let setTimeReal = ()=>{
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters()}, set);
        } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()}, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else {
            clearInterval(Times_Alf)
            NewAlfHOLD = HOLD * 27;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        }return Times_Alf     
    }
}

let startAppReal = ()=>{
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters(), extra()}, set);
        } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra()}, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else {
            clearInterval(Times_Alf)
            NewAlfHOLD = HOLD * 27;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        }return Times_Alf     
    }
}

let superExtraReal = ()=>{
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan()}, set);
        } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan()}, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else {
            clearInterval(Times_Alf)
            NewAlfHOLD = HOLD * 27;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        }return Times_Alf     
    }
}

// function setTime() {
//     clear();
//     resetColor();
//     resetExtColor();
//     setSise();
//     document.getElementById("On").removeAttribute('disabled')
//     document.getElementById("super").removeAttribute('disabled')
//     if (document.getElementById("fill").value = "Mix"){
//         document.getElementById("fill").value = 60;
//     } else {
        
//     }
//     document.getElementById("fill").setAttribute('type', 'number');
//     setSise();
//     HOLD = document.getElementById("speed").value;
//     document.querySelector("#Error").style.display =  "none";
//     document.querySelector("#block").style.display = "block";
//     if (HOLD < 500){
//         document.querySelector("#Error").style.display =  "block";
//         document.querySelector("#Error").innerHTML =  `Too fast!  The interval should not be less than "500"!`;
//         document.querySelector("#Error").style.position = "reletive";
//         console.log("lskdjfhv")
//         document.querySelector("#Error").style.left = "20%";
//         document.querySelector("#Error").style.top = "15%";
//         document.querySelector("#Error").style.fontSize = "45px";
//         document.querySelector("#Error").style.color = "red";
//         document.querySelector("#block").style.display = "none";
//     } if (HOLD > 5000){
//         document.querySelector("#Error").style.display =  "block";
//         document.querySelector("#Error").innerHTML =  `Too slow!  The interval should not be greater than "5000"!`;
//         document.querySelector("#Error").style.position = "reletive";
//         console.log("lskdjfhv")
//         document.querySelector("#Error").style.left = "16%";
//         document.querySelector("#Error").style.top = "15%";
//         document.querySelector("#Error").style.fontSize = "45px";
//         document.querySelector("#Error").style.color = "red";
//         document.querySelector("#block").style.display = "none";
//     }else{
//         document.querySelector("#time").innerText = HOLD;
//          if(HOLD == set){
//         interTime = set;
//     } else{
//         interTime = HOLD;
//     } 
//     setTimeReal();
//     colorSimle.addEventListener("click", function (){
//         if (colorSimle.checked) {
//             clear();
//             TimesColor = setInterval(function () {
//                 console.log("Speed - Проверка внутри")
//                 randomHands(), setFont(), setColor(),
//                     randomLetters()
//             }, interTime);
//         }  else {
//             setTimeReal();
//         }
//     })
//     colorExtra.addEventListener("click", function (){
//         if (colorExtra.checked) {
//             clear();
//             TimesExtColor = setInterval(function () {
//                 console.log("Speed - Проверка внутри")
//                 randomHands(), setFont(),
//                     randomLetters(), setColorAlf(), setColorHand()
//             }, interTime);
//         } else {
//             setTimeReal();
//         }
//     }) 
// }
    
// }

function setTime() {
    clear();
    setSise();
    resetColor();
    resetExtColor();
    document.getElementById("Mix").style.display = "none";
    document.getElementById("fill").style.display = "block";
    const HOLD = document.getElementById("speed").value;
    document.getElementsByClassName(".time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }

        } else {
            resetExtColor();
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                
                clear();
                setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }

        } else {
            resetColor();
        }
    })
   
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    }


}

function superExtra() { 
    clear();
    resetColor();
    resetExtColor();
    document.getElementById("Mix").style.display = "block"; 
    document.getElementById("fill").style.display = "none";
    const HOLD = document.getElementById("speed").value;
    document.getElementsByClassName(".time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () {
                    randomHands(), setFont(), randomLetters(), superExtraLet(),
                    superExtraHan(), setColorAlf(), setColorHand()
                }, set);
            } else {
                clear();
                Times_3 = setInterval(function () {
                    randomHands(), setFont(), randomLetters(), superExtraLet(),
                    superExtraHan(), setColorAlf(), setColorHand()
                }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)

            }
        } else {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)

            }
        } else {

            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }
        }
    })
    if (HOLD == Times_3) {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    }
}

function startApp() {
    clear();
    resetColor();
    resetExtColor();                
    document.getElementById("Mix").style.display = "none";
    document.getElementById("fill").style.display = "block";
    const HOLD = document.getElementById("speed").value;
    document.getElementsByClassName(".time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () {
                    randomHands(), setFont(), randomLetters(),
                        extra(), setColorAlf(), setColorHand()
                }, set);
            } else {
                clear();
                Times_3 = setInterval(function () {
                    randomHands(), setFont(), randomLetters(),
                        extra(), setColorAlf(), setColorHand()
                }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };
        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };

        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };
        }

    })
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    };
}

// function startApp() {
//     // clear();
//     // document.getElementById("On").setAttribute('disabled', '')
//     // document.getElementById("super").removeAttribute('disabled')
//     resetColor();
//     resetExtColor();
//     HOLD = document.getElementById("speed").value;
//     document.querySelector("#time").innerText = HOLD;       
//     if(HOLD == set){
//         interTime = set;
//     } else{
//         interTime = HOLD;
//     }
//     colorSimle.addEventListener("click", function (){
//         if (colorSimle.checked) {
//             clear();
//             TimesColor = setInterval(function () {
//                 console.log("Экстро - Проверка внутри")
//                 randomHands(), setFont(), setColor(), extra(),
//                     randomLetters()
//             }, interTime);
//         }  else {
//             startAppReal();
//         }
//     })
//     colorExtra.addEventListener("click", function (){
//         if (colorExtra.checked) {
//             clear();
//             TimesExtColor = setInterval(function () {
//                 console.log("Экстро - Проверка внутри")
//                 randomHands(), setFont(),
//                     randomLetters(), extra(), setColorAlf(), setColorHand()
//             }, interTime);
//         } else {
//             startAppReal();
//         }
//     })
//     startAppReal();
//     // if (colorSimle.checked) {
//     //     // clear();
//     //     TimesColor = setInterval(function () {
//     //         console.log("Экстро(cS) - Проверка вне")
//     //         randomHands(), setFont(), setColor(), extra(),
//     //             randomLetters()
//     //     }, interTime);
//     // } else if (colorExtra.checked) {
//     //     // clear();
//     //     TimesExtColor = setInterval(function () {
//     //         console.log("Экстро(TEC) - Проверка вне")
//     //         randomHands(), setFont(),
//     //             randomLetters(), extra(), setColorAlf(), setColorHand()
//     //     }, interTime);
//     // } else {
//     //     // resetColor();
//     //     // resetExtColor();
//     //     startAppReal();
//     // }
// }

// function superExtra() {
//     clear();
//     resetColor();
//     resetExtColor();
//     // document.getElementById("super").setAttribute('disabled', '')
//     // document.getElementById("On").removeAttribute('disabled')
//     HOLD = document.getElementById("speed").value;
//     document.querySelector("#time").innerText = HOLD; 
//     console.log("here1")
//     if(HOLD == set){
//         interTime = set;
//     } else{
//         interTime = HOLD;
//     }
//     //   if (colorSimle.checked) {
//     //     TimesColor = setInterval(function () {
//     //         console.log("СуперЭкстро(cS) - Проверка вне")
//     //         randomHands(), setFont(), setColor(), superExtraLet(), superExtraHan(),
//     //             randomLetters()
//     //     }, interTime);
//     // }  else {
//     //     console.log("here2")
//     //     superExtraReal();
//     // }
//     // console.log("here3")
//     // if (colorExtra.checked) {
//     //     TimesExtColor = setInterval(function () {
//     //         console.log("СуперЭкстро(TEC) - Проверка вне")
//     //         randomHands(), setFont(),superExtraLet(), superExtraHan(),
//     //             randomLetters(), setColorAlf(), setColorHand()
//     //     }, interTime);
//     // } else {
//     //     superExtraReal();
//     // }
//     colorSimle.addEventListener("click", function (){
//         clear();
//         if (colorSimle.checked) {
//             TimesColor = setInterval(function () {
//                 console.log("СуперЭкстро -Проверка внутри")
//                 randomHands(), setFont(), setColor(), superExtraLet(), superExtraHan(),
//                     randomLetters()
//             }, interTime);
//         } else {
//             console.log("here4")
//             superExtraReal();
//         }
//     })
//     console.log("here5")
//     colorExtra.addEventListener("click", function (){
//         clear();
//         if (colorExtra.checked) {
//             console.log("СуперЭкстро - Проверка внутри")
//             TimesExtColor = setInterval(function () {
//                 randomHands(), setFont(),superExtraLet(), superExtraHan(),
//                     randomLetters(), setColorAlf(), setColorHand()
//             }, interTime);
//         } else {
//             superExtraReal();
//         }
//     })
//     superExtraReal();
//     console.log("here6")
// }

function superExtraLet() {
    let SISE = Math.floor((Math.random() * 100) + 30);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';
    LEFT = Math.floor(Math.random() * 90);
    TOP = Math.floor(Math.random() * 60);
    document.getElementById("block").style.left = LEFT + '%';
    document.getElementById("block").style.top = TOP + '%';
    // document.getElementById("plu").innerText = SISE
  
  
}

function superExtraHan() {
    let SISE = Math.floor((Math.random() * 100) + 30);
    asd = document.getElementById("hand").style.fontSize = SISE + 'px';
    console.log(asd)
    LEFT = Math.floor(Math.random() * 90);
    TOP = Math.floor(Math.random() * 60);
    document.getElementById("block").style.left = LEFT + '%';
    document.getElementById("block").style.top = TOP + '%';
    // document.getElementById("min").innerText = SISE
}

function extra() {
    document.getElementById("fill").setAttribute('type', 'number');
    SISE = Math.floor((Math.random() * 100) + 30);
    document.getElementById("fill").value = SISE;
    document.getElementById("alfavit").style.fontSize = SISE + 'px';
    document.getElementById("hand").style.fontSize = SISE + 'px';
    // document.getElementsByClassName("sise").innerText = "Extra"

    console.log(SISE);
    setFont()

}

var fullSreen = document.getElementById("fullScr");
var elem = document.documentElement;

fullSreen.addEventListener("click", function () {
    HOLD = document.getElementById("speed").value;
        dropDownMenu.style.display = "none";       
        document.getElementById("window").style.height = "100vh"; 
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            document.getElementById("window").style.height = "100vh";
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();  
            document.getElementById("window").style.height = "100vh";
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();        
            document.getElementById("window").style.height = "100vh";
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
            document.getElementById("window").style.height = "100vh";
        } 

    this.removeEventListener("click",function(){})
})

 menuItem.addEventListener("click", function () {
       dropDownMenu.style.display = "grid";
        document.getElementById("window").style.height = "83vh";  
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.getElementById("window").style.height = "83vh";
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            document.getElementById("window").style.height = "83vh";
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            document.getElementById("window").style.height = "83vh";
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            document.getElementById("window").style.height = "83vh";
        }
 
        this.removeEventListener("click",function(){})
});

function resetColor() {
    document.getElementById("color").checked = false; 
    clear(); 
    console.log("resColor") 
    let black = document.querySelector("body").style.backgroundColor
    if (black == "black" ){
            document.getElementById("alfavit").style.color = "white";
            document.getElementById("hand").style.color = "white";
    } else {
        document.getElementById("alfavit").style.color = "black";
        document.getElementById("hand").style.color = "black";
    }   
}

function setColor() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
    newColor2 = document.getElementById("hand").style.color = COLORS[color];
    console.log("SetColor - Проверка")
}

function setColorAlf() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
}

function setColorHand() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor2 = document.getElementById("hand").style.color = COLORS[color];
}

function resetExtColor() {
    document.getElementById("ColorExt").checked = false;
    let black = document.querySelector("body").style.backgroundColor
    if (black == "black" ){
            document.getElementById("alfavit").style.color = "white";
            document.getElementById("hand").style.color = "white";
    } else {
        document.getElementById("alfavit").style.color = "black";
        document.getElementById("hand").style.color = "black";
    }  
}

function closeTheme() {
    Theme.checked = false;
    document.querySelector("body").style.backgroundColor = "white";
    document.getElementById("alfavit").style.color = "black"
    document.getElementById("hand").style.color = "black"
}

function setTheme() {
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("alfavit").style.color = "white"
    document.getElementById("hand").style.color = "white"
}

Theme.addEventListener("click", function () {
    if (this.checked) {
        setTheme()
    } else {
        closeTheme();
    }
})

// Инструкция

let modal1 = document.querySelector('#modalEn');
let modal3 = document.querySelector('#modalHe');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

btn.onclick = function () {
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(211, 210, 210, 0.94)';
    modal.style.top = '17%';
    modal.style.left = '10%';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  } 
};

