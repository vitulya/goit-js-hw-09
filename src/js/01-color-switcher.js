function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
}

refs.btnStart.addEventListener('click', (e) => {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000)
        
    refs.btnStart.disabled = true;
}
);

refs.btnStop.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
})

// function changeColor() {
//     const id = setInterval(() => {
//         document.body.style.backgroundColor = getRandomHexColor();
//     }, 1000)
// }


