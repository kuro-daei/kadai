import calc from "../src/kadai";

describe("calc", () => {
  test("zero", () => {
    const ans = calc(0);
    expect(ans).toStrictEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
  test("20", () => {
    const ans = calc(20);
    expect(ans).toStrictEqual({ hours: 0, minutes: 0, seconds: 20 });
  });
  test("60", () => {
    const ans = calc(60);
    expect(ans).toStrictEqual({ hours: 0, minutes: 1, seconds: 0 });
  });
  test("3600", () => {
    const ans = calc(3600);
    expect(ans).toStrictEqual({ hours: 1, minutes: 0, seconds: 0 });
  });
  test("10000", () => {
    const ans = calc(10000);
    expect(ans).toStrictEqual({ hours: 2, minutes: 46, seconds: 40 });
  });
});
