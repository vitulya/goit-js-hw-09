//Описаний в документації
import flatpickr from "flatpickr";
//Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    btnStart: document.querySelector('[type="button"]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

refs.btnStart.disabled = true;

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
    //   futureDay = Date.parse(selectedDates[0]);
    //   console.log(today);
    //   console.log(selectedDates[0] - today)
      let ms = selectedDates[0] - today;
      
      if (ms <= 0) {
          refs.btnStart.disabled = true;
          alert('Please choose a date in the future')
      } else {
        refs.btnStart.disabled = false;
      }

    //   objDay = convertMs(ms);
    //   console.log(objDay);
  },
};

refs.btnStart.addEventListener('click', () => {
    // let currentTime = Date.now();
    refs.btnStart.disabled = true;
    console.log(futureDay);
    
    setInterval(() => {
        

        let currentTime = new Date();
        // console.log(currentTime);
        ms = futureDay - currentTime;

        if (ms >= 0) {
            objDay = convertMs(ms);
            const { days, hours, minutes, seconds } = objDay;
        // console.log(objDay);
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

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
    return String(value).padStart(2,'0')
}

// console.log(addLeadingZero('1'));