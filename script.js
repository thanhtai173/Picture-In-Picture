'use strict';
const videoElement = document.getElementById('video');
const button_start = document.getElementById('button-start');
const button_stop = document.getElementById('button-stop');

const apiYoutube = "https://youtu.be/AJCqgmX7rok";

// To select media stream , pass to video element , and then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('whoops, error here:', error);
    }
}


button_start.addEventListener('click', async () => {
    button_start.hidden = true;
    button_stop.hidden = false;
    // Start Picture in Picutre
    await videoElement.requestPictureInPicture();

});

button_stop.addEventListener('click', () => {
    button_start.hidden = false;
    button_stop.hidden = true;
    // Start Picture in Picutre
    document.exitPictureInPicture();
});

// On load - this one needs to be loaded before click to button
selectMediaStream();