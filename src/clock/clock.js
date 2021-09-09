const clock = (getClockTime) => {
    const clockTime = getClockTime();
    const clockBox = document.createElement('div')
    const updateClock = () => {
        if(clockTime) {
            const millisecondDisplay = document.createElement('h1');
            const secondDisplay = document.createElement('h1');
            const minuteDisplay = document.createElement('h1');
    
            const millisecondText =  document.createTextNode(clockTime.milliseconds);
            const secondText =  document.createTextNode(clockTime.seconds + ".");
            const minuteText =  document.createTextNode(clockTime.minutes + ":");
    
            clockBox.id = "clockBox";
    
            millisecondDisplay.appendChild(millisecondText);
            secondDisplay.appendChild(secondText);
            minuteDisplay.appendChild(minuteText);
    
    
            clockBox.appendChild(minuteDisplay);
            clockBox.appendChild(secondDisplay);
            clockBox.appendChild(millisecondDisplay);
    
        }
    }

    setInterval(() => {
        updateClock()
    }, 16)

    return clockBox;
}

export default clock;