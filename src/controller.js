import rps from "./rps";

export default class Controller {
  constructor() {
    document.getElementById("exec").addEventListener("click", () => {
      const n = document.getElementById("n").value;
      const output = rps(n);
      document.getElementById("isWin").value = output.isWin;
      document.getElementById("rocks").value = output.rocks;
      document.getElementById("papers").value = output.papers;
      document.getElementById("scissors").value = output.scissors;
    });
  }
}
