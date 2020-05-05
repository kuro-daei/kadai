import rps from "./rps";
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
  for (let i = 0; i < n; i++) {
    const a = rps();
    switch (a) {
      case "rock":
        rocks++;
        break;
      case "paper":
        papers++;
        break;
      case "scissors":
        scissors++;
        break;
    }
  }
  if (rocks == 0 || papers == 0 || scissors == 0) {
    if (rocks != n && papers != n && scissors != n) {
      isWin = true;
    }
  }
  // ここまで修正
  return { isWin, rocks, papers, scissors };
}
