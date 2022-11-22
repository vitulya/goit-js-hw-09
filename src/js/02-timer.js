//Описаний в документації
import flatpickr from "flatpickr";
//Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    btnStart: document.querySelector('[type="button"]')
}

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);


function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


    const days = Math.floor(ms / day);
    addLeadingZero(days);

    const hours = Math.floor((ms % day) / hour);
    addLeadingZero(hours);

    const minutes = Math.floor(((ms % day) % hour) / minute);
    addLeadingZero(minutes);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
    return value.padStart(2,0)
}

// console.log(addLeadingZero('1'));