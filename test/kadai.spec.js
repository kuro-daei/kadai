import calc from "../src/kadai";
describe("kadai", () => {
  test("sample", () => {
    const answer = calc(1);
    expect(answer).toBe(1);
  });
});
