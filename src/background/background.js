import clock from '../clock/clock.js';
import buttonBox from '../buttons/buttonBox.js';
import lapBox from '../laps/lapBox.js';

const background = (getClockTime, startClock) => {
    const backgroundBox = document.createElement("div");
    backgroundBox.id = "background";
    backgroundBox.appendChild(clock(getClockTime));
    backgroundBox.appendChild(buttonBox(startClock));
    backgroundBox.appendChild(lapBox());
    
    return backgroundBox;
}

export default background;