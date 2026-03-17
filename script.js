function celebrate(){

  // Hide ALL buttons except restart
  document.querySelectorAll("button").forEach(btn=>{
    if(btn.id !== "restartBtn"){
      btn.style.display = "none";
    }
  });

  // Heart explosion
  for(let i=0;i<80;i++){
    createHeart(
      Math.random()*window.innerWidth,
      Math.random()*window.innerHeight
    );
  }

  finalMsg.style.display = "block";
}

function resetGame(){

  runCount = 0;
  clickCount = 0;

  counter.innerText = "Clicks: 0 / 20";

  // Remove ONLY duplicated buttons
  document.querySelectorAll("button").forEach(btn=>{
    if(btn !== mainBtn && btn !== restartBtn){
      btn.remove();
    }
  });

  // Bring main button back
  mainBtn.style.display = "block";
  mainBtn.style.left = "45%";
  mainBtn.style.top = "60%";

  // Hide final message
  finalMsg.style.display = "none";
}