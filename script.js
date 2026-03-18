function celebrate(){
  document.querySelectorAll("button").forEach(btn=>{
    if(btn !== restartBtn && btn !== mainBtn){
      btn.remove();
    }
  });

  mainBtn.hidden = true; // safer than display:none

  for(let i=0;i<80;i++){
    createHeart(Math.random()*window.innerWidth, Math.random()*window.innerHeight);
  }

  finalMsg.style.display = "block";
}

function resetGame(){
  runCount = 0;
  clickCount = 0;

  counter.innerText = "Clicks: 0 / 20";

  document.querySelectorAll("button").forEach(btn=>{
    if(btn !== mainBtn && btn !== restartBtn){
      btn.remove();
    }
  });

  mainBtn.hidden = false; // bring back button safely
  mainBtn.style.left = "45%";
  mainBtn.style.top = "60%";

  finalMsg.style.display = "none";
}

const music = document.getElementById("bgMusic");

let musicStarted = false;

function startMusic(){
  if(!musicStarted){
    music.muted = false;
    music.play().catch(()=>{});
    musicStarted = true;
  }
}

// Start muted (required for autoplay)
music.muted = true;
music.play().catch(()=>{});

// Start real audio on FIRST interaction
document.addEventListener("click", startMusic);
document.addEventListener("mousemove", startMusic);