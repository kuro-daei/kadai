import Controller from "../src/controller";
import * as mod from "../src/calc";

describe("Controller", () => {
  test("sample", async () => {
    document.body.innerHTML =
      '<input type="text" id="a" value="12" />' +
      '<input type="text" id="b" value="34" />' +
      '<select id="operator" class="form-control"><option selected>+</option></select>' +
      '<input type="button" id="equal"/>' +
      '<input type="text" id="answer" value="56" />';

    mod.default = jest.fn();

    new Controller();

    const button = document.getElementById("equal");
    button.click();

    await expect(mod.default).toHaveBeenCalledWith(12, 34, "+");
  });
});
