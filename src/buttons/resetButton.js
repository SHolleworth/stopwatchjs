import button from "./button.js";

const resetButton = () => {
    const resetButton = button(null, "Reset");
    resetButton.id = "resetButton";
    return resetButton;
}

export default resetButton;