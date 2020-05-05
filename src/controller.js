import { rpsn } from "./rps";

export default class Controller {
  constructor() {
    document.getElementById("exec").addEventListener("click", () => {
      const n = document.getElementById("n").value;
      const output = rpsn(n);
      if (output.isWin) {
        document.getElementById("isWin").value = "ついた。";
      } else {
        document.getElementById("isWin").value = "つかなかった。";
      }
      document.getElementById("rocks").value = output.rocks;
      document.getElementById("papers").value = output.papers;
      document.getElementById("scissors").value = output.scissors;
    });
  }
}
