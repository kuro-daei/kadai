import dice from "../src/dice";
import coins from "../src/coins";
jest.mock("../src/dice");
describe("coins", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("coins", () => {
    dice
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4);
    const a = coins(2, 1);
    expect(a).toStrictEqual([1, 2, 0, 1, 1, 1]);
  });
});
