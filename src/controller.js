import conv from "./hex";
export default class Controller {
  constructor() {
    document.getElementById("convert").addEventListener("click", () => {
      const input = document.getElementById("input").value;
      const mode = document.getElementById("mode").value;
      const output = conv(input, mode);
      document.getElementById("output").value = output;
    });
  }
}
