export default class Controller {
  constructor() {
    document.getElementById("exec").addEventListener("click", () => {
      const q = document.getElementById("q").value;
      document.getElementById("a").value = q;
    });
  }
}
