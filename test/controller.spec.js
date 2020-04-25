import Controller from "../src/controller";
import * as mod from "../src/calc";

describe("Controller", () => {
  test("sample", async () => {
    document.body.innerHTML =
      '<input type="text" id="n" value="12" />' +
      '<input type="button" id="sum"/>' +
      '<input type="text" id="s" value="" />';

    mod.default = jest.fn();

    new Controller();

    const button = document.getElementById("sum");
    button.click();

    await expect(mod.default).toHaveBeenCalledWith(12);
  });
});
