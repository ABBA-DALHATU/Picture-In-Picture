"use strict";

const btn = document.querySelector("button");
const videoEl = document.querySelector(".video");

const selectScreenCapture = async function () {
  const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  videoEl.srcObject = mediaStream;
  videoEl.addEventListener("loadedmetadata", () => {
    videoEl.play();
  });
};

selectScreenCapture();

btn.addEventListener("click", async () => {
  await videoEl.requestPictureInPicture();
});
