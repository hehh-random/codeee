function resetGame(){

  runCount = 0;
  clickCount = 0;

  counter.innerText = "Clicks: 0 / 20";

  // remove duplicate buttons
  document.querySelectorAll("button").forEach(btn=>{
    if(btn !== mainBtn && btn !== restartBtn){
      btn.remove();
    }
  });

  // bring back main button
  mainBtn.style.display = "block";
  mainBtn.style.left = "45%";
  mainBtn.style.top = "60%";

  // hide final message
  finalMsg.style.display = "none";
}