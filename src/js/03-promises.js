import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('form')
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const { elements: { delay, step, amount } } = e.target;
  const firstDelay = delay.value;
  const interval = step.value;
  const countIterationAll = amount.value;
  // let id;
  // let countIteration = 0;
  // let currentDelay = 0;
  // let intervalTime;

  setTimeout(() => {
 
    for (let i = 0; i < +countIterationAll; i += 1) {
      setTimeout(() => {
        createPromise(i+1, +firstDelay + i * +interval);
      }, interval * i)
    }

  }, firstDelay)
  
  e.target.reset();
})


  // setTimeout(() => {

  //   id = setInterval(() => {
  //      intervalTime = countIteration === 0 ? 0 : interval;
  //      console.log(intervalTime);

  //     // currentDelay = +firstDelay + countIteration * +interval;

  //     createPromise(countIteration, currentDelay);
      
  //     if (countIteration === +countIterationAll) {
  //       clearInterval(id);
  //     }
      
  //     countIteration += 1;
      
  //   }, intervalTime)

  // },firstDelay)


function createPromise(position, delay) {
  const promise =  new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  }).then((result) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch((error) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  return promise;  
}
