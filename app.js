import background from './src/background/background.js'

window.onload = () => {
    const container = document.getElementById('container');
    let clockTime = {
        milliseconds: 0,
        seconds: 0,
        minutes: 0
    }
    let startTime = null; 
    let backgroundNode = null;
    let running = false;

    const startClock = () => {
        startTime = 0;
        startTime = Date.now();
        running = true;
        setInterval(() => {
            const newTime = {};
            const currentTime = Date.now();
            const timeElapsed = new Date(currentTime - startTime);
            newTime.minutes = timeElapsed.getMinutes();
            newTime.seconds = timeElapsed.getSeconds();
            newTime.milliseconds = timeElapsed.getMilliseconds();
            setClockTime(newTime)
            running = true;
        }, 10);
    }

    startClock();

    const setClockTime = (newTime) => {
        clockTime = {...newTime}
    }

    const getClockTime = () => {
        return clockTime;
    }

    const render = () => {
        if(backgroundNode)
            container.removeChild(backgroundNode);
        backgroundNode = background(startClock, getClockTime)
        container.appendChild(backgroundNode);
    }

    render();
};