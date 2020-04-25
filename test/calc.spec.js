import calc from "../src/calc";

describe("Calc", () => {
  test("10", () => {
    const s = calc(10);
    expect(s).toBe(55);
  });
  test("0", () => {
    const s = calc(0);
    expect(s).toBe(0);
  });
  test("2", () => {
    const s = calc(2);
    expect(s).toBe(3);
  });
});
