const video = document.getElementById('video');
const play = document.getElementById('play');
const stopped = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play and pause

function toggleVideoStatus() {
 if (video.paused) {
    play(); 
 } else {
    pause();
 }
}

function updatePlayIcon() {
    return true;
}

function updateprogress() {
    return true;
}

function stopVideo() {
    return true;
}

function setVideoProgress() {
    return true;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateprogress);

play.addEventListener('click', toggleVideoStatus);

stopped.addEventListener('click', stopVideo);

progress.addEventListener('click', setVideoProgress)


