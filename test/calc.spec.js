import calc from "../src/calc";
describe("calc", () => {
  test("sample", () => {
    const answer = calc(1);
    expect(answer).toBe(1);
  });
});
