import fizzbuzz from "./fizzbuzz";
export default class Controller {
  constructor() {
    const button = document.getElementById("exec");
    button.addEventListener(
      "click",
      () => {
        const n = document.getElementById("n").value;
        const numbers = fizzbuzz(n);
        document.getElementById("output").value = numbers.join(" ");
      },
      false
    );
  }
}
