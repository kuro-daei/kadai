// 0 から `n` までの数で、
// - 3 で割り切れるなら `Fizz`
// - 5 で割り切れるなら `Buzz`
// - 両方で割り切れるなら `FizzBuzz`
// - それ以外は数字をそのまま
//
// と表示します。下記のような状態になります。
//
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17
//
// numbers に答えを入れます。こんな感じになります。
//
// numbers[0] = 1;
// numbers[2] = 2;
// numbers[3] = Fizz;
// numbers[4] = 4;
// numbers[5] = Buzz;

export default function fizzbuzz(n) {
  console.log(`n=${n}`);
  let numbers = [];
  // ここから修正
  for (let i = 1; i <= n; i++) {
    numbers.push(
      (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i
    );
  }
  // ここまで修正
  return numbers;
}
