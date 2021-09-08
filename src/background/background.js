import clock from '../clock/clock.js'

const background = () => {
    const backgroundBox = document.createElement("div");
    backgroundBox.id = "background";
    backgroundBox.appendChild(clock());
    return backgroundBox;
}

export default background;