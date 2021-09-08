import background from './src/background/background.js'

window.onload = () => {
    const container = document.getElementById('container');
    container.appendChild(background());
};