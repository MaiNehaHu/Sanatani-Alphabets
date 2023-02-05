let count = 0;

function playAudio(Playsong) {

  myAudio = Playsong;
  
  if(count===0){
    console.log("played .count was "+ count)
    count++
    myAudio.play();
    console.log("played .count is  "+ count)
  }
  else{
    console.log("paused .count was "+ count )
    count--
    myAudio.pause(); 
    console.log("paused .count is  "+ count)
  }

}
/**AddEventListenerall that doesn't workin my browse */
