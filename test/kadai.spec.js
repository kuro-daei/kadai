import calc from "../src/kadai";

describe("Calc", () => {
  test("5", () => {
    const answer = calc(5);
    expect(answer).toBe(15);
  });
  test("10", () => {
    const answer = calc(10);
    expect(answer).toBe(55);
  });
});
