const video = document.querySelector('.video');
const btn = document.getElementById('play-pause')
const fast = document.querySelector('.fast');

function togglePlayPause(){
  if(video.paused){
      btn.className = 'pause' ;
      video.playbackRate = 1.0
      video.play();
  }
  else {
    btn.className = 'play'
    video.pause()
  }
}

btn.onclick =function(){
  togglePlayPause()
}

function forward(){
video.playbackRate = 3.0
  console.log('run');
}

fast.addEventListener('click', ()=>{
  forward()
})
