const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const progress = document.getElementById('progress');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused || audio.ended) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
        // Voeg de rotate klasse toe wanneer de muziek begint te spelen
        document.querySelector('.album-art img').classList.add('rotate');
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
        // Verwijder de rotate klasse wanneer de muziek wordt gepauzeerd
        document.querySelector('.album-art img').classList.remove('rotate');
    }
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressWidth = (currentTime / duration) * 100;
    progress.style.width = `${progressWidth}%`;
});