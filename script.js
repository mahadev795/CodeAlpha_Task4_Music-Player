const tracks = [
    {
        title: "Track 1",
        artist: "Artist 1",
        src: "Ram Siya Ram.mp3"
    },
    {
        title: "Track 2",
        artist: "Artist 2",
        src: "Mere Kanha.mp3"
    },
    {
        title: "Track 3",
        artist: "Artist 3",
        src: "Shree Krishna Govind Hare Murari.mp3"
    }
];

let currentTrackIndex = 0;

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

function loadTrack(index) {
    const track = tracks[index];
    audioSource.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    audio.load();
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

loadTrack(currentTrackIndex);