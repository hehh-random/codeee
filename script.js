function celebrate(){

  document.querySelectorAll("button").forEach(btn=>{
    if(btn !== restartBtn && btn !== mainBtn){
      btn.remove();
    }
  });

  // hide main button instead of deleting it
  mainBtn.style.display = "none";

  for(let i=0;i<80;i++){
    createHeart(Math.random()*window.innerWidth, Math.random()*window.innerHeight);
  }

  finalMsg.style.display = "block";
}