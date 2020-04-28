import { isInCircle } from "./pai";

export default class Controller {
  constructor() {
    let inCircle = 0;
    const r = 100;
    const n = document.getElementById("n").value;
    console.log(`n:${n}`);
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * r);
      const y = Math.floor(Math.random() * r);
      if (isInCircle(x, y, r)) {
        inCircle++;
      }
    }
    const spanInCircle = document.getElementById("incircle");
    spanInCircle.innerText = inCircle;
  }
}
