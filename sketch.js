// IT미디어공학전공 20200975 서은교
// 사운드미디어제작 기말과제
// -------------------------------------------------

let music1;
let music2;

let vol;

var amp;

var sliderVol;
var sliderRate;

var jump1;
var jump2;

function preload() {
  soundFormats("mp3", "ogg");
  music1 = loadSound("musicFile.mp3"); //whiplash
  music2 = loadSound("musicFile2.mp3"); //supernova
}

function setup() {
  createCanvas(640, 640);

  amp = new p5.Amplitude();
  fft = new p5.FFT();

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
  button3.mousePressed(playMusic2);
  button4 = createButton("pause");
  button4.mousePressed(pauseMusic2);
  button3.position(170, 690);
  button4.position(220, 690);

  // 볼륨 슬라이더
  let volumeText = createP("Volume :");
  volumeText.style("text-align", "0", "660");
  volumeText.style("font-size", "18px");
  volumeText.style("margin-top", "5px");

  sliderVol = createSlider(0, 2.0, 0.4, 0.2);
  sliderVol.position(80, 735);

  //속도 슬라이더
  let rateText = createP("Rate :");
  rateText.style("text-align", "0", "660");
  rateText.style("font-size", "18px");
  rateText.style("margin-top", "5px");

  sliderRate = createSlider(0, 2, 1, 0.25);
  sliderRate.position(80, 780);

  //1번 음원 Jump버튼
  buttonJump1 = createButton("<<");
  buttonJump1.mousePressed(jumpMusic1);
  buttonJump2 = createButton(">>");
  buttonJump2.mousePressed(jumpMusic2);
  buttonJump1.position(270, 650);
  buttonJump2.position(310, 650);
  jump1 = 0;

  //2번 음원 Jump
  buttonJump3 = createButton("<<");
  buttonJump3.mousePressed(jumpMusic3);
  buttonJump4 = createButton(">>");
  buttonJump4.mousePressed(jumpMusic4);
  buttonJump3.position(280, 690);
  buttonJump4.position(320, 690);
  jump2 = 0;
}

function draw() {

  background(0);

  var volAmp = amp.getLevel();
  var diam = map(volAmp, 0, 0.5, 10, 350);

  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  let x = width / 2;
  let y = height / 2;

  noFill();
  strokeWeight(5);
  stroke(r, g, b);
  ellipse(x, y, diam, diam);
  ellipse(x, y, diam/2, diam/2);
  ellipse(x, y, diam*2, diam*2);
  
  let waveForm = fft.waveform();

  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < waveForm.length; i++) {
    let x = map(i, 0, waveForm.length, 0, width);
    let y = map(waveForm[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
  
  

  music1.setVolume(vol);
  music2.setVolume(vol);
  vol = sliderVol.value();
  music1.rate(sliderRate.value());
  music2.rate(sliderRate.value());
}

// 1번 음원 - play/stop
function playMusic1() {
  if (!music1.isPlaying()) {
    if (music2.isPlaying) {
      music2.stop();
      button3.html("play");
    }
    music1.play();
    button1.html("stop");
  } else {
    music1.stop();
    button1.html("play");
  }
}

function pauseMusic1() {
  if (!music1.isPlaying() && !music2.isPlaying()) {
    music1.play();
  } else {
    music1.pause();
    button1.html("play");
  }
}

// 2번 음원 - play/stop
function playMusic2() {
  if (!music2.isPlaying()) {
    if (music1.isPlaying) {
      music1.stop();
      button1.html("play");
    }
    music2.play();
    button3.html("stop");
  } else {
    music2.stop();
    button3.html("play");
  }
}

function pauseMusic2() {
  if (!music1.isPlaying() && !music2.isPlaying()) {
    music2.play();
  } else {
    music2.pause();
    button3.html("play");
  }
}

//1번 음원 - jump
function jumpMusic1() {
  // <<
  jump1 = jump1 - 30.5;
  if (jump1 <= 30.5) {
    jump1 = 0;
    music1.stop();
    button1.html("play");
  }
  music1.jump(jump1);
}

function jumpMusic2() {
  // >>
  jump1 = jump1 + 30.5;
  if (jump1 + 30.5 >= 183) {
    jump1 = 0;
    music1.stop();
    button1.html("play");
  }
  music1.jump(jump1);
}

//2번 음원 - jump
function jumpMusic3() {
  // <<
  jump2 = jump2 - 29.8;
  if (jump2 <= 29.8) {
    jump2 = 0;
    music2.stop();
    button3.html("play");
  }
  music2.jump(jump2);
}

function jumpMusic4() {
  // >>
  jump2 = jump2 + 29.8;
  if (jump2 + 29.8 >= 178) {
    jump2 = 0;
    music2.stop();
    button3.html("play");
  }
  music2.jump(jump2);
}
