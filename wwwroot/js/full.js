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


window.fullscreenHelpers = {
    requestFullscreen,
};
