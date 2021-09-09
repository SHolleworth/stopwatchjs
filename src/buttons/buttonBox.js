import resetButton from "./resetButton.js";
import startButton from "./startButton.js";

const buttonBox = (startClock) => {
    const buttonBox = document.createElement("div");
    buttonBox.id = "buttonBox";
    buttonBox.appendChild(resetButton());
    buttonBox.appendChild(startButton(startClock));
    return buttonBox;
}

export default buttonBox;