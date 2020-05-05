import dice from "./dice";

// 6人の人がそれぞれ max 点持ってます。
// 例えば max が 100 だったら、userCoinsは下記のようになります。
// userCoins = [100, 100, 100, 100, 100, 100]
// サイコロを2つ振ります。
// 1つ目のサイコロの番号 dice1 の人がコインを1つ出します。
// 2つ目のサイコロの番号 dice2 の人がコインをもらいます。
export default function conins(n, max) {
  const userCoins = Array(6).fill(max);
  console.log(`star: n=${n}, userCoins=[${userCoins}]`);
  // ここから修正
  // ここまで修正
  return userCoins;
}
