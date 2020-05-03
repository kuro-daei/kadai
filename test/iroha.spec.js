import iroha from "../src/iroha";

describe("iroha", () => {
  const str = "いろはにほへとちりぬるを";
  test("いろは", () => {
    const output = iroha(1, 2, 3, str);
    expect(output).toStrictEqual("いろは");
  });
  test("はをり", () => {
    const output = iroha(3, 12, 9, str);
    expect(output).toStrictEqual("はをり");
  });
});
