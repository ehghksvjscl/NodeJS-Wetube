const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

function handlePlayClick() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    } else {
        videoPlayer.pause()
        playBtn.innerHTML = '<i class="fas fa-play"></i>'
    }
}

function handleVolumeClick() {
    console.log(videoPlayer.muted);
    if(videoPlayer.muted) {
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        volumeRange.value = 0
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        videoPlayer.muted = true;
        volumeRange.value = videoPlayer.volume;
    }
}

function exitFullScreen() {
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullScrnBtn.addEventListener("click", goFullScreen);
    document.webkitExitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  
  function goFullScreen() {
    videoContainer.webkitRequestFullscreen();
    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
      videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullscreen) {
      videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
      videoContainer.msRequestFullscreen();
    }
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
    fullScrnBtn.removeEventListener("click", goFullScreen);
    fullScrnBtn.addEventListener("click", exitFullScreen);
  }

  function getCurrentTime() {
      currentTime.innerHTML = formatDate(videoPlayer.currentTime);
  }

function setTotalTime() {
    console.log(videoPlayer.duration);
    const totalTimeString = formatDate(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime,1000)
}

function handleEnded() {
    playBtn.innerHTML = '<i class="fas fa-play"></i>'
    videoPlayer.currentTime = 0;
}

function handelDrag(event) {
    const {target : {value} } = event;
    videoPlayer.volume = value
    if(value >= 0.6) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if(value >= 0.3) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
}
  const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
  };
  

function init() {
    handleVolumeClick() // 작동이 이상함..
    playBtn.addEventListener("click",handlePlayClick);
    volumeBtn.addEventListener("click",handleVolumeClick);
    fullScrnBtn.addEventListener("click",goFullScreen);
    videoPlayer.addEventListener("loadedmetadata",setTotalTime);
    videoPlayer.addEventListener("ended",handleEnded);
    volumeRange.addEventListener("input",handelDrag);
}

// 모든 페이지에서 videoContainer를 찾으므로 있으면 동작하게끔 한다
if(videoContainer) {
    init();
}
