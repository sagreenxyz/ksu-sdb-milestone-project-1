function showModalStartGame() {
    // shade the background
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalStart').style.display = 'block';
}

function hideModalStartGame() {
    // unshade the background
    document.querySelector('main').style.opacity = '1.0';
    document.getElementById('modalStart').style.display = 'none';
}

function showModalSuccess() {
    // shade the background
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalSuccess').style.display = 'block';

}

function hideModalSuccess() {
    // unshade the background
    document.querySelector('main').style.opacity = '1.0';  // if transitioning to showModalStart, this line is not necessary
    document.getElementById('modalSuccess').style.display = 'none';
}

function showModalTimeout() {
    // shade the background
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalTimeout').style.display = 'block';
    setTimeout(() => {
        hideModalTimeout();
        showModalStartGame();
    }, timeoutModalDurationMS);
}

function hideModalTimeout() {
    // unshade the background
    document.querySelector('main').style.opacity = '1.0';  // if transitioning to showModalStart, this line is not necessary
    document.getElementById('modalTimeout').style.display = 'none';
}

function showDivTimerControl() {
    document.getElementById('timer-control').style.visibility = 'visible';
    let startTime = Date.now();
    document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS).toISOString().slice(14, 19)}`;
    clearTimeout(objTimer);
    objTimer = setInterval(() => {
        if ((Date.now() - startTime) >= gameDurationLimitMS) {
            hideDivtimer-control();
            document.getElementById('timer-control').classList.remove('blinking-warning-background')
            showModalTimeout();
        }
        document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS - (Date.now() - startTime)).toISOString().slice(14, 19)}`;
    }, 1000);
    setTimeout(() => {
        console.log('setTimeout')
        document.getElementById('timer-control').classList.add('blinking-warning-background')
    }, warningStartTimeMS);
}

function hideDivTimerControl() {
    document.getElementById('timer-control').style.visibility = 'hidden';
}

function flowInitializeGame() {
    document.getElementById('btnStartGame').addEventListener('click', () => {
        hideModalStartGame();
        showDivControl();
    });

    document.getElementById('btnExitGame').addEventListener('click', () => {
        hideDivControl();
        showModalStartGame();
    })

    showModalStartGame();
    flowStartGame();
}

function flowStartGame() {
}

function flowGameSolved() {
    showModalComplete();
    setTimeout(() => {
        hideModalComplete();
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