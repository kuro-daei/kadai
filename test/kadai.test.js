import { calcPai, isInCircle } from "../src/kadai";

describe("kadai", () => {
  test("isInCircle in", () => {
    let isIn = false;
    isIn = isInCircle(0, 0, 10);
    expect(isIn).toBe(true);
    isIn = isInCircle(-10, 0, 10);
    expect(isIn).toBe(true);
    isIn = isInCircle(0, 10, 10);
    expect(isIn).toBe(true);
    isIn = isInCircle(10 / Math.sqrt(2), 10 / Math.sqrt(2), 10);
    expect(isIn).toBe(true);
  });

  test("isInCircle out", () => {
    let isIn = false;
    isIn = isInCircle(10, 10, 10);
    expect(isIn).toBe(false);
    isIn = isInCircle(-10, -10, 10);
    expect(isIn).toBe(false);
    isIn = isInCircle(10.1 / Math.sqrt(2), 10.1 / Math.sqrt(2), 10);
    expect(isIn).toBe(false);
  });

  test("calcPai", () => {
    const pai = calcPai(10, 20);
    expect(pai).toBe(2);
  });
});
