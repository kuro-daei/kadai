import iroha from "./iroha";

export default class Controller {
  constructor() {
    const compose = document.getElementById("compose");
    compose.addEventListener("click", () => {
      const pick1 = parseInt(document.getElementById("pick1").value);
      const pick2 = parseInt(document.getElementById("pick2").value);
      const pick3 = parseInt(document.getElementById("pick3").value);
      const str = "いろはにほへとちりぬるを";
      const output = iroha(pick1, pick2, pick3, str);
      document.getElementById("output").value = output;
    });
  }
}
