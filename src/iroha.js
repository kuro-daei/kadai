// pick1に1番目の文字番号が1-12で入ってきます。
// pick2に2番目の文字番号が1-12で入ってきます。
// pick3に3番目の文字番号が1-12で入ってきます。
// strs に ["い","ろ","は",...,"る","を"] が入ってきます。
// 指定された3文字の文字列を output に入れます。
// 例）
// pick1=1,pick2=2,pick3=3 だと outputは "いろは"
// pick1=12,pick2=11,pick3=10 だと outputは "をるぬ"
// 配列を使ってください。
export default function iroha(pick1, pick2, pick3, str) {
  console.log(`${pick1},${pick2},${pick2}`);
  const strs = str.split("");
  console.log(`${strs}`);
  let output = "";
  /*-- ここから変更 --*/

  /*-- ここまで変更 --*/
  return output;
}
