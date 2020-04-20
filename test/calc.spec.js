import calc from "../src/calc";

describe("Calc", () => {
  test("+", () => {
    const answer = calc(1, 5, "+");
    expect(answer).toBe(6);
  });
  test("-", () => {
    const answer = calc(5, 2, "-");
    expect(answer).toBe(3);
  });
  test("*", () => {
    const answer = calc(3, 4, "*");
    expect(answer).toBe(12);
  });
  test("/", () => {
    const answer = calc(6, 2, "/");
    expect(answer).toBe(3);
  });
});
