function requestFullscreen(elementId) {
    const element = document.getElementById(elementId);
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function Player(status) {
    const audios = document.getElementsByClassName("MusicPlayer")
    const audio = audios[0];

    if (status === true) {
        audio.play().catch(err => console.error("播放失败:", err));
    } else {
        audio.pause();
    }
}

window.fullscreenHelpers = {
    requestFullscreen,
    Player
};
