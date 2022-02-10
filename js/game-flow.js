const gameDurationLimitMS = 1000 * 60 * 3;
const warningStartTimeMS = 1000 * 60 * 2.5;
const timeoutModalDurationMS = 1000 * 8;
const modalSuccessDurationMS = 1000 * 8;
let objInterval;
let objSetTimeoutControl;

function showModalStartGame() {
    removeAllChildren(cards);
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalStart').style.display = 'block';
    document.getElementById('modalStart').style.visibility = 'visible';
}

function hideModalStartGame() {
    document.querySelector('main').style.opacity = '1.0';
    document.getElementById('modalStart').style.display = 'none';
    document.getElementById('modalStart').style.visibility = 'hidden';
}

function showModalSuccess() {
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalSuccess').style.display = 'block';
    document.getElementById('modalSuccess').style.visibility = 'visible';
    clearInterval(objInterval);
    clearTimeout(objSetTimeoutControl);
    setTimeout(() => {
        hideModalSuccess();
        showModalStartGame();
    }, 4000);
}

function hideModalSuccess() {
    document.querySelector('main').style.opacity = '1.0';
    document.getElementById('modalSuccess').style.display = 'none';
    document.getElementById('modalSuccess').style.visibility = 'hidden';
}

function showModalTimeout() {
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalTimeout').style.display = 'block';
    document.getElementById('modalTimeout').style.visibility = 'visible';
    clearInterval(objInterval);
    setTimeout(() => {
        hideModalTimeout();
        showModalStartGame();
    }, timeoutModalDurationMS);
}

function hideModalTimeout() {
    document.querySelector('main').style.opacity = '1.0';
    document.getElementById('modalTimeout').style.display = 'none';
    document.getElementById('modalTimeout').style.visibility = 'hidden';
}

function showDivTimerControl() {
    document.getElementById('timer-control').style.visibility = 'visible';
    let startTime = Date.now();
    document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS).toISOString().slice(14, 19)}`;
    clearInterval(objInterval);
    objInterval = setInterval(() => {
        if ((Date.now() - startTime) >= gameDurationLimitMS) {
            hideDivTimerControl();
            document.getElementById('timer-control').classList.remove('blinking-warning-background')
            showModalTimeout();
        }
        document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS - (Date.now() - startTime)).toISOString().slice(14, 19)}`;
    }, 1000);
    objSetTimeoutControl = setTimeout(() => {
        document.getElementById('timer-control').classList.add('blinking-warning-background')
    }, warningStartTimeMS);
}

function hideDivTimerControl() {
    document.getElementById('timer-control').style.visibility = 'hidden';
    clearTimeout(objSetTimeoutControl);
}

function flowInitializeGame() {
    btnStartGameClick = document.getElementById('btnStartGame').addEventListener('click', () => {
        hideModalStartGame();
        showDivTimerControl();
        startCardCount = document.getElementById('start-card-count').value;
        document.getElementById('progress').setAttribute('value', 0);
        document.getElementById('progress').setAttribute('max', startCardCount);
        cardSet = genCardSet(startCardCount);
    });

    btnEndGameClick = document.getElementById('btnExitGame').addEventListener('click', () => {
        hideDivTimerControl();
        showModalStartGame();
    })

    showModalStartGame();
}

function flowGameSolved() { // #TODO call this when unmatched cards === 0;
    hideDivTimerControl();
    clearInterval(objInterval);
    showModalSuccess();
    setTimeout(() => {
        hideModalSuccess();
        showModalStartGame();
    }, 10000);
}

function flowGameTimeout() {
    showModalTimeout();
    setTimeout(() => {
        hideModalTimeout();
        showModalStartGame();
    }, 10000);
}

flowInitializeGame();


