import isPrimeNumber from "../src/kadai";
describe("isPrimeNumber", () => {
  test("1", () => {
    const answer = isPrimeNumber(1);
    expect(answer).toBe(false);
  });
  test("2", () => {
    const answer = isPrimeNumber(2);
    expect(answer).toBe(true);
  });
  test("3", () => {
    const answer = isPrimeNumber(3);
    expect(answer).toBe(true);
  });
  test("9", () => {
    const answer = isPrimeNumber(9);
    expect(answer).toBe(false);
  });
  test("39857", () => {
    const answer = isPrimeNumber(39857);
    expect(answer).toBe(true);
  });
});
