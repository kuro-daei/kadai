function circle(x, y, r) {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.fillStyle = "rgba(200,200,0,0.8)";
  context.fill();
}

function point(x, y, color) {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.beginPath();
  context.arc(x, y, 0.5, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
}

export { circle, point };
