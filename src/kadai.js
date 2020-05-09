import dice from "./dice";

// 6人の人がそれぞれ init 点持ってます。
// 例えば init が 100 だったら、userCoinsは下記のようになります。
// userCoins = [100, 100, 100, 100, 100, 100]
// サイコロを2つ振ります。
// 1つ目のサイコロの番号 dice1 の人がコインを1つ出します。
// 2つ目のサイコロの番号 dice2 の人がコインを1つもらいます。
// 上記を n回 繰り返します。
// ただし、dice1 がゼロよりも小さくなる場合は、コインの授受は行いません。
export default function conins(n, init) {
  const userCoins = Array(6).fill(init);
  console.log(`star: n=${n}, userCoins=[${userCoins}]`);
  // ここから修正
  // ここまで修正
  return userCoins;
}
