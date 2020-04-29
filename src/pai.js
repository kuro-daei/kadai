// 円の中に入った点の数 n と全体の点の数 totalから円周率を求めます。
// 変数 pai に求めた円周率を入れます。
function calcPai(n, total) {
  console.log(`n:${n}, total:${total}`);
  let pai = 0;
  // ここから修正

  // ここまで修正
  return pai;
}

function isInCircle(x, y, r) {
  console.log(`x:${x},y:${y},r:${r}`);
  let isInCircle = false;
  isInCircle = Math.sqrt(x * x + y * y) <= r;
  return isInCircle;
}

export { isInCircle, calcPai };
