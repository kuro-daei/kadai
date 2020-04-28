import { circle, point } from "./draw";
import { isInCircle } from "./pai";

export default class Controller {
  constructor() {
    let inCircle = 0;
    const r = 100;
    circle(100, 100, r);
    const n = document.getElementById("n").value;
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * 2 * r) - r;
      const y = Math.floor(Math.random() * 2 * r) - r;
      if (isInCircle(x, y, r)) {
        inCircle++;
        point(x + r, y + r, "rgba(255, 0, 0, 0.5)");
      } else {
        point(x + r, y + r, "rgba(0, 0, 0, 0.5)");
      }
    }
    const spanInCircle = document.getElementById("incircle");
    spanInCircle.innerText = inCircle;
  }
}
