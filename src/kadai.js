// 入力された分 (input) を
// 時間、分 に変換して返しましょう。
// 割り算の余りを切り捨てるには Math.floorを使いましょう。
// 余りを出すには % を使います。
// 例
// 11 ÷ 3 の商と余りは次のように計算します。
// 商: Math.floor(11/3) → 3
// 余り: 11 % 3 -> 2

export default function calc(input) {
  console.log(`input ${input}`);
  let hours = 0;
  let minutes = 0;
  /*-- ここから変更 --*/
  hours = Math.floor(input / 60);
  minutes = input % 60;
  /*-- ここまで変更 --*/
  return { hours, minutes };
}
