//Описаний в документації
import flatpickr from "flatpickr";
//Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    btnStart: document.querySelector('[type="button"]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

refs.btnStart.disabled = true;

let now = new Date()
console.log(now);

const today = new Date;
let futureDay = '';
let objDay = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    futureDay = selectedDates[0];
    let ms = futureDay - today;
    
    if (ms <= 0) {
      refs.btnStart.disabled = true;
      Notiflix.Notify.failure('Qui timide rogat docet negare');
    } else {
      refs.btnStart.disabled = false;
    }

  },
};

refs.btnStart.addEventListener('click', () => {
    refs.btnStart.disabled = true;
    
    setInterval(() => {
        
        let currentTime = new Date();

        let milliseconds = futureDay - currentTime;

        if (milliseconds >= 0) {
            objDay = convertMs(milliseconds);
            const { days, hours, minutes, seconds } = objDay;

            refs.days.innerHTML = addLeadingZero(days);
            refs.hours.innerHTML = addLeadingZero(hours);
            refs.minutes.innerHTML = addLeadingZero(minutes);
            refs.seconds.innerHTML = addLeadingZero(seconds);
        } 
    },1000)
  
})



flatpickr("#datetime-picker", options);


function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


    const days = Math.floor(ms / day);

    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);
10
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
    return String(value).padStart(2,'0')
}
