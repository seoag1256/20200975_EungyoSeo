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

  // 1번 음원
  let title1 = createP("[Whiplash - aespa]");
  title1.style("text-align", "0", "650");
  title1.style("font-size", "18px");
  title1.style("margin-top", "5px");
  
  button1 = createButton("play");
  button1.mousePressed(playMusic1);
  button2 = createButton("pause");
  button2.mousePressed(pauseMusic1);
  button1.position(160, 650);
  button2.position(210, 650);
  
  // 2번 음원
  let title2 = createP("[Supernova - aespa]");
  title2.style("text-align", "0", "655");
  title2.style("font-size", "18px");
  title2.style("margin-top", "10px");
  
  button3 = createButton("play");
  button3.mousePressed(playMusic);
  button4 = createButton("pause");
  button4.mousePressed(pauseMusic);
  button3.position(170, 690);
  button4.position(220, 690);
}

function draw() {
  background(220);
}

function playMusic1() {
  if (!mySound.isPlaying()) {
    mySound.play();
    button.html("stop");
  } else {
    mySound.stop();
    button.html("play");
  }
}

function pauseMusic1() {
  if (!mySound.isPlaying()) {
    mySound.play();
    button1.html("pause");
  } else {
    mySound.pause();
    button.html("play");
    button1.html("pause");
  }
}
