export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    let y = 0
    console.log(y);
    
    element.innerHTML = `count is ${counter}`
    
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0);

  

  
  // some changes

  // feature 1

}
