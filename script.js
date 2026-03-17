const music = document.getElementById("bgMusic")

let musicStarted = false

function startMusic(){
  if(!musicStarted){
    music.play()
    musicStarted = true
  }
}

document.addEventListener("click", startMusic)
document.addEventListener("mousemove", startMusic)