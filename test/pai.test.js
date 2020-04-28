import { isInCircle } from "../src/pai";

describe("Controller", () => {
  test("in", () => {
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

  test("out", () => {
    let isIn = false;
    isIn = isInCircle(10, 10, 10);
    expect(isIn).toBe(false);
    isIn = isInCircle(-10, -10, 10);
    expect(isIn).toBe(false);
    isIn = isInCircle(10.1 / Math.sqrt(2), 10.1 / Math.sqrt(2), 10);
    expect(isIn).toBe(false);
  });
});
