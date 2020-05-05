import rps from "../src/rps";
describe("rps", () => {
  let mockMath;
  beforeEach(() => {
    mockMath = Object.create(global.Math);
    global.Math = mockMath;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("rock", () => {
    mockMath.random = () => 0.1;
    const a = rps();
    expect(a).toBe("rock");
  });
  test("paper", () => {
    mockMath.random = () => 0.5;
    const a = rps();
    expect(a).toBe("paper");
  });
  test("scissors", () => {
    mockMath.random = () => 0.9;
    const a = rps();
    expect(a).toBe("scissors");
  });
});
