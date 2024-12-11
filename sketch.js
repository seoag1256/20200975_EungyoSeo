// IT미디어공학전공 20200975 서은교
// 사운드미디어제작 기말과제

//Play/Stop
//볼륨조절
//재생위치조절5단계jump
//음악속도조정
//음악선택(2개이상)
// -------------------------------------------------

let music1;
let music2;

let vol; // 볼륨

function preload() {
  soundFormats("mp3", "ogg");
  music1 = loadSound("musicFile.mp3"); //whiplash
  music2 = loadSound("musicFile2.mp3"); //supernova
}

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(220);
}