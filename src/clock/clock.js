const clock = () => {
    const time = '00:00:00';
    const id = 'clock';
    const timerBox = document.createElement('div')
    const timerDislay = document.createElement('h1');
    timerDislay.id = id;
    const timerNumberNode =  document.createTextNode(time);
    timerDislay.appendChild(timerNumberNode);
    timerBox
    return timerDislay;
}

export default clock;