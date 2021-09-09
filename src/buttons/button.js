const button = (func, text) => {
    const print = (event) => {console.log(event.clientX)};
    const button = document.createElement("button");
    button.addEventListener('click', print);
    button.type = "button"
    const buttonParagraph = document.createElement("p");
    const buttonText = document.createTextNode(text);

    button.classList.add('buttonBackground');
    
    buttonParagraph.appendChild(buttonText);
    button.appendChild(buttonParagraph);

    return button;
}

export default button;