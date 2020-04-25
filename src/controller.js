import calc from "./calc";

export default class Controller {
  constructor() {
    const sum = document.getElementById("sum");
    sum.addEventListener("click", () => {
      const n = parseInt(document.getElementById("n").value);
      const s = calc(n);
      document.getElementById("s").value = s;
    });
  }
}
