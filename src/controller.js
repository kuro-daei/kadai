import calc from "./kadai";

export default class Controller {
  constructor() {
    const equal = document.getElementById("equal");
    equal.addEventListener("click", () => {
      const a = parseInt(document.getElementById("a").value);
      const b = parseInt(document.getElementById("b").value);
      const operator = document.getElementById("operator").value;
      const answer = calc(a, b, operator);
      document.getElementById("answer").value = answer;
    });
  }
}
