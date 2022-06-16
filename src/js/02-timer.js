import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
var timer = null;
refs.start.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      alert('Please choose a date in the future');
      refs.start.disabled = true;
    } else {
      refs.start.disabled = false;
      function countdownTime() {
        refs.start.disabled = true;
        timer = setInterval(() => {
          const timeLeft = selectedDates[0] - new Date();
          const dataObj = convertMs(timeLeft);

          refs.days.innerHTML = dataObj.days;
          refs.hours.innerHTML = dataObj.hours;
          refs.minutes.innerHTML = dataObj.minutes;
          refs.seconds.innerHTML = dataObj.seconds;

          if (refs.seconds.innerHTML < 10) {
            refs.seconds.innerHTML = addLeadingZero(dataObj.seconds);
          } else {
            refs.seconds.innerHTML = dataObj.seconds;
          }

          if (refs.minutes.innerHTML < 10) {
            refs.minutes.innerHTML = addLeadingZero(dataObj.minutes);
          } else {
            refs.minutes.innerHTML = dataObj.minutes;
          }

          if (refs.hours.innerHTML < 10) {
            refs.hours.innerHTML = addLeadingZero(dataObj.hours);
          } else {
            refs.hours.innerHTML = dataObj.hours;
          }

          if (refs.days.innerHTML < 10) {
            refs.days.innerHTML = addLeadingZero(dataObj.days);
          } else {
            refs.days.innerHTML = dataObj.days;
          }

          if (timeLeft < 1000) {
            clearInterval(timer);
            refs.start.disabled = false;
          }
        }, 1000);
      }
      refs.start.addEventListener('click', countdownTime);
    }
  },
};
function addLeadingZero(value) {
  const stringValue = String(value);
  return stringValue.padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
flatpickr('#datetime-picker', options);
