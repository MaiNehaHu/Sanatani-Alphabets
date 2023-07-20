var isPlaying = false;
let container = document.getElementById("container");
const songList = document.querySelector(".sounds");

/**List */
const alphabets = [
  {
    id: 1,
    alphabetLetter: "A",
    standsFor: "Arjun",
    audioSrc: "./audio/A arjun.mp3",
  },
  {
    id: 2,
    alphabetLetter: "B",
    standsFor: "Balram",
    audioSrc: "./audio/B balraam.mp3",
  },
  {
    id: 3,
    alphabetLetter: "C",
    standsFor: "Chanakya",
    audioSrc: "./audio/C chanakkya.mp3",
  },
  {
    id: 4,
    alphabetLetter: "D",
    standsFor: "Dhruva",
    audioSrc: "./audio/D druva.mp3",
  },
  {
    id: 5,
    alphabetLetter: "E",
    standsFor: "Eklavya",
    audioSrc: "./audio/E eklavya.mp3",
  },
  {
    id: 6,
    alphabetLetter: "F",
    standsFor: "Four Vedas",
    audioSrc: "./audio/F Vedas.mp3",
  },
  {
    id: 7,
    alphabetLetter: "G",
    standsFor: "Ganpati Bappa",
    audioSrc: "./audio/ganpati bappa morya.mp3",
  },
  {
    id: 8,
    alphabetLetter: "H",
    standsFor: "Hanuman Ji",
    audioSrc: "./audio/H hanuman.mp3",
  },
  {
    id: 9,
    alphabetLetter: "I",
    standsFor: "Indra dev",
    audioSrc: "./audio/I indradev.mp3",
  },
  {
    id: 10,
    alphabetLetter: "J",
    standsFor: "Jatayu",
    audioSrc: "./audio/J jatayu.mp3",
  },
  {
    id: 11,
    alphabetLetter: "K",
    standsFor: "Sri Krishna",
    audioSrc: "./audio/K for.mp3",
  },
  {
    id: 12,
    alphabetLetter: "L",
    standsFor: "Luv & Kush",
    audioSrc: "./audio/L luvkush.mp3",
  },
  {
    id: 13,
    alphabetLetter: "M",
    standsFor: "Markandey",
    audioSrc: "./audio/M markandey.mp3",
  },
  {
    id: 14,
    alphabetLetter: "N",
    standsFor: "Narad",
    audioSrc: "./audio/N narad.mp3",
  },
  {
    id: 15,
    alphabetLetter: "O",
    standsFor: "Omkaar",
    audioSrc: "./audio/O omkar.mp3",
  },
  {
    id: 16,
    alphabetLetter: "P",
    standsFor: "Prahalad",
    audioSrc: "./audio/P for.mp3",
  },
  {
    id: 17,
    alphabetLetter: "Q",
    standsFor: "Queen Gandhari",
    audioSrc: "./audio/Q gandhari.mp3",
  },
  {
    id: 18,
    alphabetLetter: "R",
    standsFor: "Sri Rama",
    audioSrc: "./audio/R for.mp3",
  },
  {
    id: 19,
    alphabetLetter: "S",
    standsFor: "Surya dev",
    audioSrc: "./audio/S surya.mp3",
  },
  {
    id: 20,
    alphabetLetter: "T",
    standsFor: "Tulsi mata",
    audioSrc: "./audio/T tulasi.mp3",
  },
  {
    id: 21,
    alphabetLetter: "U",
    standsFor: "Udhava",
    audioSrc: "./audio/U dudhava.mp3",
  },
  {
    id: 22,
    alphabetLetter: "V",
    standsFor: "Vaman Avatar",
    audioSrc: "./audio/V vanavatar.mp3",
  },
  {
    id: 23,
    alphabetLetter: "W",
    standsFor: "Water ganga",
    audioSrc: "./audio/W water ganaga.mp3",
  },
  {
    id: 24,
    alphabetLetter: "X",
    standsFor: "Xeerabdi dwadsi",
    audioSrc: "./audio/X dwadsi.mp3",
  },
  {
    id: 25,
    alphabetLetter: "Y",
    standsFor: "Yashomati maiya",
    audioSrc: "./audio/Y yashomati.mp3",
  },
  {
    id: 26,
    alphabetLetter: "Z",
    standsFor: "Zaamvant",
    audioSrc: "./audio/Z jamvant.mp3",
  },
];


/**----------- Buttons --------------*/
let OneNode = alphabets
  .map((node) => {
    return `
    <div class="key" >
      <button 
        id="${node.id}" 
        onclick="playAudio(${node.alphabetLetter}, ${node.id});" 
        type="button"
        onmousedown="MouseGrabbing(this)"
        onmouseup="MouseGrabb(this)"
      >
          <!--front-->
          <div class="front-side">
            <span>${node.alphabetLetter}</span>
            <p>${node.standsFor}</p>
          </div>
          <!--back-->
          <div class="back-side">
            <div class="play${node.id}" style="display:none">
              <i class="fa fa-play-circle" style="font-size:100px;"></i>
            </div>
            <div class="pause${node.id}" style="display:none">
              <i class="fa fa-pause-circle-o" style="font-size:100px;"></i>
            </div>
          </div>
      </button>
    </div>
  `;
  })
  .join("");

container.innerHTML = OneNode;


/**------------ Sounds -------------*/
let SongsHTML = alphabets
  .map((song) => {
    return `
    <audio id="${song.alphabetLetter}">
      <source src="${song.audioSrc}" type="audio/mpeg" />
    </audio>
  `;
  })
  .join("");

songList.innerHTML = SongsHTML;


/**------------ PlayAudio ------------ */
function playAudio(Playsong, id) {
  /**Selecting each play and pause cursor*/
  let playIcon = document.querySelector(`.play${id}`);
  let pauseIcon = document.querySelector(`.pause${id}`);
  let alphabetButton = document.getElementById(`${id}`);

  /**Play Icon */
  playIcon.style.position = "absolute";
  playIcon.style.width = "130px";
  playIcon.style.height = "130px";
  playIcon.style.display = "flex";
  playIcon.style.color = "white";
  playIcon.style.alignItems = "center";
  playIcon.style.justifyContent = "center";

  /**Pause Icon */
  pauseIcon.style.position = "absolute";
  pauseIcon.style.width = "130px";
  pauseIcon.style.height = "130px";
  pauseIcon.style.display = "flex";
  pauseIcon.style.color = "white";
  pauseIcon.style.alignItems = "center";
  pauseIcon.style.justifyContent = "center";

  /**Getting Audio refference */
  var myAudio = Playsong;
  isPlaying ? myAudio.pause() : myAudio.play();

  myAudio.onplaying = function () {
    isPlaying = true;
    pauseIcon.style.display = "flex";
    playIcon.style.display = "none";
     
    /** Toggle flip */
    alphabetButton.style.transitionDelay = "0s";
    alphabetButton.classList.add("flip");
  };

  myAudio.onpause = function () {
    isPlaying = false;
    playIcon.style.display = "flex";
    pauseIcon.style.display = "none";
     
    /** Toggle flip */
    alphabetButton.style.transitionDelay = "1s";
    alphabetButton.classList.remove("flip");
  };
}


/**----------- Grab cursor ----------*/
function MouseGrabbing(Button) {
  Button.style.cursor = "grabbing";
}
function MouseGrabb(sameButton) {
  sameButton.style.cursor = "grab";
}