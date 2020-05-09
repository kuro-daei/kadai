export default function calc(a, b, operator) {
  console.log(`${a} ${operator} ${b} = ?`);
  let answer = 0;
  /*-- ここから変更 --*/
  switch (operator) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      answer = a / b;
      break;
  }
  /*-- ここまで変更 --*/
  return answer;
}
