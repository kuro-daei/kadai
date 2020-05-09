import coins from "./kadai";
export default class Controller {
  constructor() {
    const button = document.getElementById("exec");
    button.addEventListener(
      "click",
      () => {
        const n = document.getElementById("n").value;
        const init = 100;
        const answers = coins(n, init);
        for (let i = 0; i < answers.length; i++) {
          const answer = answers[i];
          const ans = document.getElementById("ans" + i);
          ans.style.backgroundColor =
            "rgba(128,128,255," + answer / (init * 2) + ")";
          ans.value = answer;
        }
      },
      false
    );
  }
}
