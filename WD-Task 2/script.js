let startTime;
let currentTime;
let timerInterval;
let laps = [];
let lapCounter = 1;

function startPause() {
    const startPauseBtn = document.getElementById('startPauseBtn');

    if (startPauseBtn.textContent === 'Start') {
        startPauseBtn.textContent = 'Pause';
        startTimer();
    } else {
        startPauseBtn.textContent = 'Start';
        pauseTimer();
    }
}

function startTimer() {
    startTime = Date.now() - (currentTime || 0);
    timerInterval = setInterval(updateTimer, 10);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    currentTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(currentTime);
}

function formatTime(ms) {
    const date = new Date(ms);
    return `${padTime(date.getMinutes())}:${padTime(date.getSeconds())}.${padTime(Math.floor(date.getMilliseconds() / 10))}`;
}

function padTime(value) {
    return value.toString().padStart(2, '0');
}

function lap() {
    const lapTime = formatTime(currentTime);
    laps.push(lapTime);
    const lapsList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.classList.add('lap-item');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapsList.insertBefore(lapItem, lapsList.firstChild);
    lapCounter++;
}

function reset() {
    clearInterval(timerInterval);
    startTime = null;
    currentTime = null;
    laps = [];
    lapCounter = 1;
    document.getElementById('display').textContent = '00:00:00.000';
    document.getElementById('startPauseBtn').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
}
