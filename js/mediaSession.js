export default function enableMediaSession(webamp) {
  if ("mediaSession" in navigator) {
    webamp.onTrackDidChange(({ title, artist, album }) => {
      navigator.mediaSession.metadata = new MediaMetadata({
        title,
        artist,
        album,
        artwork: [
          {
            src: "https://dummyimage.com/96x96",
            sizes: "96x96",
            type: "image/png"
          }
        ]
      });
    });

    navigator.mediaSession.setActionHandler("play", () => {
      webamp.play();
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      webamp.pause();
    });
    navigator.mediaSession.setActionHandler("seekbackward", () => {
      webamp.seekBackward(10);
    });
    navigator.mediaSession.setActionHandler("seekforward", () => {
      webamp.seekForward(10);
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      webamp.previousTrack();
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      webamp.nextTrack();
    });
  }
}
