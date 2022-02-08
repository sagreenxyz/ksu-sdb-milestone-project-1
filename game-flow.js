const gameDurationLimitMS = 1000 * 60 * 0.10;
const warningStartTimeMS = 1000 * 60 * 0.05;
const timeoutModalDurationMS = 1000 * 60 * 0.10;
let objTimer;
let objTimer2;

function showModalStartGame() {
    // shade the background
    // console.log('showModalStartGame')
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalStart').style.display = 'block';
}

function hideModalStartGame() {
    // unshade the background
    // console.log('hideModalStartGame')
    document.querySelector('main').style.opacity = '1.0';
    document.getElementById('modalStart').style.display = 'none';
}

function showModalSuccess() {
    // shade the background
    // console.log('showModalSuccess')
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalSuccess').style.display = 'block';

}

function hideModalSuccess() {
    // unshade the background
    // console.log('hideModalSuccess')
    document.querySelector('main').style.opacity = '1.0';  // if transitioning to showModalStart, this line is not necessary
    document.getElementById('modalSuccess').style.display = 'none';
}

function showModalTimeout() {
    // shade the background
    console.log('showModalTimeout')
    document.querySelector('main').style.opacity = '0.3';
    document.getElementById('modalTimeout').style.display = 'block';
    document.getElementById('modalTimeout').style.visibility = 'visible';
    clearInterval(objTimer);
    setTimeout(() => {
        console.log('here1')
        hideModalTimeout();
        showModalStartGame();
    }, timeoutModalDurationMS);
}

function hideModalTimeout() {
    // unshade the background
    // console.log('hideModalTimeout')
    document.querySelector('main').style.opacity = '1.0';  // if transitioning to showModalStart, this line is not necessary
    document.getElementById('modalTimeout').style.display = 'none';
    document.getElementById('modalTimeout').style.visibility = 'hidden';
}

function showDivTimerControl() {
    // console.log('showDivTimerControl')
    document.getElementById('timer-control').style.visibility = 'visible';
    let startTime = Date.now();
    document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS).toISOString().slice(14, 19)}`;
    clearTimeout(objTimer);
    objTimer = setInterval(() => {
        if ((Date.now() - startTime) >= gameDurationLimitMS) {
            console.log((Date.now() - startTime))
            console.log(gameDurationLimitMS)
            hideDivTimerControl();
            document.getElementById('timer-control').classList.remove('blinking-warning-background')
            showModalTimeout();
        }
        document.getElementById('timer').innerText = `Time Remaining: ${new Date(gameDurationLimitMS - (Date.now() - startTime)).toISOString().slice(14, 19)}`;
    }, 1000);
    setTimeout(() => {
        // console.log('setTimeout')
        console.log('here2')
        document.getElementById('timer-control').classList.add('blinking-warning-background')
    }, warningStartTimeMS);
}

function hideDivTimerControl() {
    // console.log('hideDivTimerControl')
    document.getElementById('timer-control').style.visibility = 'hidden';
}

function flowInitializeGame() {
    // console.log('flowInitializeGame')
    document.getElementById('btnStartGame').addEventListener('click', () => {
        // console.log('btnStartGame')
        hideModalStartGame();
        showDivTimerControl();
    });

    document.getElementById('btnExitGame').addEventListener('click', () => {
        // console.log('btnExitGame')
        hideDivTimerControl();
        showModalStartGame();
    })

    showModalStartGame();
    // flowStartGame();
}

// function flowStartGame() {
// }

function flowGameSolved() { // call this when unmatched cards === 0;
    // console.log('flowGameSolved')
    showModalComplete();
    setTimeout(() => {
        // console.log('flowGameSolved - setTimeout')
        console.log('here3')
        hideModalComplete();
        showModalStartGame();
    }, 10000);
}

function flowGameTimeout() {
    // console.log('flowGameTimeout')
    showModalTimeout();
    setTimeout(() => {
        // console.log('flowGameTimeout - setTimeout')
        console.log('here4')
        hideModalTimeout();
        showModalStartGame();
    }, 10000);
}