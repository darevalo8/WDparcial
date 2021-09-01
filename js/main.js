const myaudio = document.querySelector('#myAudio');
function playAudio() { 
    // x.play(); 
    const boton_play = document.querySelector('#play_re');
    boton_play.style.display= "none";
    const boton_pause = document.querySelector('.pause');
    boton_pause.style.display = "block";
    myaudio.play()
} 
  
  function pauseAudio() { 
    const boton_pause = document.querySelector('.pause');
    boton_pause.style.display = "none";
    const boton_play = document.querySelector('#play_re');
    boton_play.style.display= "block";
    
    myaudio.pause(); 
  } 