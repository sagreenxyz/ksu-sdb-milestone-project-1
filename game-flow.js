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

function showModalComplete() {
    // shade the background
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalComplete').style.display = 'block';

}

function hideModalComplete() {
    // unshade the background
    document.querySelector('main').style.opacity = '1.0';  // if transitioning to showModalStart, this line is not necessary
    document.getElementById('modalComplete').style.display = 'none';
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

function showDivControl() {
    document.getElementById('control').style.display = 'block';
    let startTime = Date.now();
    document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS).toISOString().slice(14, 19)}`;
    clearTimeout(objTimer);
    objTimer = setInterval(() => {
        if ((Date.now() - startTime) >= gameDurationLimitMS) {
            hideDivControl();
            document.getElementById('control').classList.remove('blinking-warning-background')
            showModalTimeout();
        }
        document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS - (Date.now() - startTime)).toISOString().slice(14, 19)}`;
    }, 1000);
    setTimeout(() => {
        console.log('setTimeout')
        document.getElementById('control').classList.add('blinking-warning-background')
    }, warningStartTimeMS);
}

function hideDivControl() {
    document.getElementById('control').style.display = 'none';
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

