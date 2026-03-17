function celebrate(){

  // Hide buttons instead of removing
  document.querySelectorAll("button").forEach(btn=>{
    if(btn !== restartBtn){
      btn.style.display = "none";
    }
  });

  for(let i=0;i<80;i++){
    createHeart(
      Math.random()*window.innerWidth,
      Math.random()*window.innerHeight
    );
  }

  finalMsg.style.display = "block";
}