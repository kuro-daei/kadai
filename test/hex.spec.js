import convert from "../src/hex";
describe("hex", () => {
  test("0", () => {
    const answer = convert("0", "hex");
    expect(answer).toBe("0");
  });
  test("100", () => {
    const answer = convert("100", "hex");
    expect(answer).toBe("64");
  });
  test("16", () => {
    const answer = convert("15", "hex");
    expect(answer).toBe("f");
  });
});
describe("dec", () => {
  test("0", () => {
    const answer = convert("0", "dec");
    expect(answer).toBe("0");
  });
  test("f", () => {
    const answer = convert("f", "dec");
    expect(answer).toBe("15");
  });
  test("64", () => {
    const answer = convert("64", "dec");
    expect(answer).toBe("100");
  });
});
