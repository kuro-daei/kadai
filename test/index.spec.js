import Controller from "../src/controller";
describe("Controller", () => {
  test("sample", () => {
    const controller = new Controller();
    expect(controller.name).toEqual("sample");
  });
});
