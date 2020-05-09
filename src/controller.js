import isPrimeNumber from "./kadai";

export default class Controller {
  constructor() {
    document.getElementById("exec").addEventListener("click", () => {
      const input = document.getElementById("input").value;
      let output = "素数じゃない";
      if (isPrimeNumber(input)) {
        output = "素数";
      }
      document.getElementById("output").value = output;
    });
  }
}
