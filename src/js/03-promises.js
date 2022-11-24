const refs = {
  formEl: document.querySelector('form')
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const { elements: { delay, step, amount } } = e.target;
  const firstDelay = delay.value;
  const interval = step.value;
  const countIterationAll = amount.value;
  let id;
  let countIteration = 0;
  let delayIteration = 0;
  
  setTimeout(() => {
    id = setInterval(() => {
      countIteration += 1;

      delayIteration = +firstDelay + countIteration * +interval;

      console.log(delayIteration);

      createPromise(countIteration, delayIteration);
      
      if (countIteration === +countIterationAll) {
        clearInterval(id);
      }
      
    }, interval)
    
    
  },firstDelay)

  e.target.reset();
})


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`)
  }
}
