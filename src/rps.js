// ひとりのジャンケンの結果を返します。
// 返す値は "rock" "paper" "scissors" のどれかです。
function rps() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

// n人でジャンケンをやったときの結果を返します。
// rps関数を使ってください。
// isWin は勝負がついたら true、引き分けの時は false を入れてください。
// rocks にはグーの数、papers にはパーの数、scissorsにはチョキの数を入れてください。
export default function rpsn(n) {
  let isWin = false;
  let rocks = 0;
  let papers = 0;
  let scissors = 0;
  console.log(`n:${n}`);
  // ここから修正
  // ここまで修正
  return { isWin, rocks, papers, scissors };
}
