import rpsn from "../src/kadai";
import rps from "../src/rps";
jest.mock("../src/rps");
describe("rpsn", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("one", () => {
    rps.mockReturnValueOnce("rock");
    const a = rpsn(1);
    expect(a).toStrictEqual({ isWin: false, rocks: 1, papers: 0, scissors: 0 });
  });

  test("aiko 1", () => {
    rps
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("rock");
    const a = rpsn(3);
    expect(a).toStrictEqual({ isWin: false, rocks: 3, papers: 0, scissors: 0 });
  });
  test("aiko 2", () => {
    rps
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("paper");
    const a = rpsn(3);
    expect(a).toStrictEqual({ isWin: false, rocks: 0, papers: 3, scissors: 0 });
  });

  test("aiko 3", () => {
    rps
      .mockReturnValueOnce("scissors")
      .mockReturnValueOnce("scissors")
      .mockReturnValueOnce("scissors");
    const a = rpsn(3);
    expect(a).toStrictEqual({ isWin: false, rocks: 0, papers: 0, scissors: 3 });
  });
  test("aiko 4", () => {
    rps
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("scissors");
    const a = rpsn(3);
    expect(a).toStrictEqual({ isWin: false, rocks: 1, papers: 1, scissors: 1 });
  });
  test("aiko 5", () => {
    rps
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("scissors");
    const a = rpsn(4);
    expect(a).toStrictEqual({ isWin: false, rocks: 2, papers: 1, scissors: 1 });
  });
  test("win 1", () => {
    rps
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("scissors");
    const a = rpsn(3);
    expect(a).toStrictEqual({ isWin: true, rocks: 0, papers: 2, scissors: 1 });
  });
  test("win 2", () => {
    rps
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("rock");
    const a = rpsn(3);
    expect(a).toStrictEqual({ isWin: true, rocks: 1, papers: 2, scissors: 0 });
  });
  test("win 3", () => {
    rps
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("scissors");
    const a = rpsn(3);
    expect(a).toStrictEqual({ isWin: true, rocks: 2, papers: 0, scissors: 1 });
  });
});
