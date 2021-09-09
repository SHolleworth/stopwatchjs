import button from "./button.js";

const startButton = (startClock) => {
    const startButton = button(startClock, "Start");
    startButton.id = "startButton";
    return startButton;
}

export default startButton;