let count = 0;

function playAudio(Playsong) {
  var myAudio = Playsong;
  isPlaying ? myAudio.pause() : myAudio.play();

  myAudio.onplaying = function () {
    isPlaying = true;
  };

  myAudio.onpause = function () {
    isPlaying = false;
  };
}
var isPlaying = false;

