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

// Force play (handles most browsers)
window.addEventListener("load", () => {
  music.play().catch(() => {});
});

// Backup: start on ANY interaction
document.addEventListener("click", () => {
  music.play().catch(() => {});
});

document.addEventListener("mousemove", () => {
  music.play().catch(() => {});
});