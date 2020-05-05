import dice from "../src/dice";
describe("dice", () => {
  let mockMath;
  beforeEach(() => {
    mockMath = Object.create(global.Math);
    global.Math = mockMath;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("2", () => {
    mockMath.random = () => 0.3;
    const a = dice();
    expect(a).toBe(2);
  });
});
