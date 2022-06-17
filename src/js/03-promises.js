import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector("[name='delay']"),
  delayStep: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']"),
};
refs.form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  let firstDelayVal = refs.firstDelay.valueAsNumber;
  const delayStepVal = refs.delayStep.valueAsNumber;
  const amountVal = refs.amount.valueAsNumber;
  for (let index = 1; index <= amountVal; index++) {
    createPromise(index, firstDelayVal)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    firstDelayVal += delayStepVal;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
