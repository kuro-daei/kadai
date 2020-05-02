import calc from "../src/calc";

describe("calc", () => {
  test("zero", () => {
    const ans = calc(0);
    expect(ans).toStrictEqual({ hours: 0, minutes: 0 });
  });
  test("20", () => {
    const ans = calc(20);
    expect(ans).toStrictEqual({ hours: 0, minutes: 20 });
  });
  test("60", () => {
    const ans = calc(60);
    expect(ans).toStrictEqual({ hours: 1, minutes: 0 });
  });
  test("100", () => {
    const ans = calc(100);
    expect(ans).toStrictEqual({ hours: 1, minutes: 40 });
  });
});
