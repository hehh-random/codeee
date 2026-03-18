function celebrate(){
  document.querySelectorAll("button").forEach(btn=>{
    if(btn !== restartBtn){
      btn.remove();
    }
  });

  for(let i=0;i<80;i++){
    createHeart(Math.random()*window.innerWidth, Math.random()*window.innerHeight);
  }

  finalMsg.style.display = "block";
}

document.querySelectorAll("button").forEach(btn=>{
  if(btn !== mainBtn && btn !== restartBtn){
    btn.remove();
  } else {
    btn.style.display = "block"; // 👈 restore visibility
  }
});