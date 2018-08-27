export default function enableMediaSession(webamp) {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "Never Gonna Give You Up",
      artist: "Rick Astley",
      album: "Whenever You Need Somebody",
      artwork: [
        {
          src: "https://dummyimage.com/96x96",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "https://dummyimage.com/128x128",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "https://dummyimage.com/192x192",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "https://dummyimage.com/256x256",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "https://dummyimage.com/384x384",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "https://dummyimage.com/512x512",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    });

    navigator.mediaSession.setActionHandler("play", () => {
      webamp.play();
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      webamp.pause();
    });
    navigator.mediaSession.setActionHandler("seekbackward", () => {
      webamp.seekBackward();
    });
    navigator.mediaSession.setActionHandler("seekforward", () => {
      webamp.seekForward();
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      webamp.previousTrack();
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      webamp.nextTrack();
    });
  }
}
