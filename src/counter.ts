export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0);

  // q: how do I open a new branch on git?
  // a: git checkout -b <branch-name>

  // q: how to solve differential equation?
  // a: use ode45

  // q: how to solve integral?
  // a: use quad

}
