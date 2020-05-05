// ひとりのジャンケンの結果を返します。
// 返す値は "rock" "paper" "scissors" のどれかです。
export default function rps() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}
