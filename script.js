let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let player = document.getElementById("player");
let computer = document.getElementById("computer");

const winSound = new Audio("./sounds/win.wav");
const loseSound = new Audio("./sounds/lose.wav");
const drawSound = new Audio("./sounds/draw.wav");

winSound.volume = 0.05;
loseSound.volume = 0.05;
drawSound.volume = 0.05;


function play(choice) {

  const randomNum = Math.floor(Math.random() * 3);
  if (choice === 0) {
    player.innerText = "✊";
  } else if (choice === 1) {
    player.innerText = "✋";
  } else {
    player.innerText = "✌️";
  }

  if (randomNum === 0) {
    computer.innerText = "✊";
  } else if (randomNum === 1) {
    computer.innerText = "✋";
  } else {
    computer.innerText = "✌️";
  }

  if (choice === randomNum) {
    drawSound.play();
    result.innerText = "It's a Draw! 😐";
  } else if (
    (choice === 0 && randomNum === 2) || // rock beats scissor
    (choice === 1 && randomNum === 0) || // paper beats rock
    (choice === 2 && randomNum === 1) // scissor beats paper
  ) {
    result.innerText = "You Win! 🎉";
    winSound.play();
  } else {
    result.innerText = "You Lose! 💀";
    loseSound.play();
  }
}

rock.addEventListener("click", () => {
  play(0);
});
paper.addEventListener("click", () => {
  play(1);
});
scissor.addEventListener("click", () => {
  play(2);
});



const bgMusic = new Audio("./sounds/bg-music.mp3");
bgMusic.loop = true; 
bgMusic.volume = 0.01; 

const musicBtn = document.getElementById("music-btn");
let isMusicPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isMusicPlaying) {
    bgMusic.play();
    musicBtn.innerText = "🔇 Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.innerText = "🎵 Play Music";
  }
  isMusicPlaying = !isMusicPlaying;
});

