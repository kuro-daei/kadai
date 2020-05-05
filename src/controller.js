import coins from "./coins";
export default class Controller {
  constructor() {
    const button = document.getElementById("exec");
    button.addEventListener(
      "click",
      () => {
        const n = document.getElementById("n").value;
        const max = 100;
        const answers = coins(n, max);
        for (let i = 0; i < answers.length; i++) {
          const answer = answers[i];
          const ans = document.getElementById("ans" + i);
          ans.style.backgroundColor =
            "rgba(128,128,255," + answer / (max * 2) + ")";
          document.getElementById("ans" + i).value = answer;
        }
      },
      false
    );
  }
}
