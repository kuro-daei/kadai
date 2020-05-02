import calc from "./calc";

export default class Controller {
  constructor() {
    const equal = document.getElementById("equal");
    equal.addEventListener("click", () => {
      const minutes = parseInt(document.getElementById("minutes").value);
      const answer = calc(minutes);
      document.getElementById("ans_hours").value = answer.hours;
      document.getElementById("ans_minutes").value = answer.minutes;
      document.getElementById("ans_seconds").value = answer.seconds;
    });
  }
}
