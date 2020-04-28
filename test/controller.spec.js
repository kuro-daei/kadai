import Controller from "../src/controller";
import * as mock from "../src/pai";

describe("Controller", () => {
  test("all true", async () => {
    document.body.innerHTML =
      '<span id="incircle"></span>' + '<input type="hidden" id="n" value="3"/>';
    jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
    mock.isInCircle = jest.fn().mockReturnValue(true);
    new Controller();
    await expect(mock.isInCircle).toHaveBeenCalledWith(12, 12, 100);
    await expect(mock.isInCircle).toHaveBeenCalledTimes(3);
    const nOfInCircle = document.getElementById("incircle").innerText;
    await expect(nOfInCircle).toBe(3);
  });

  test("all false", async () => {
    document.body.innerHTML =
      '<span id="incircle"></span>' + '<input type="hidden" id="n" value="5"/>';
    jest.spyOn(global.Math, "random").mockReturnValue(0.23456789);
    mock.isInCircle = jest.fn().mockReturnValue(false);
    new Controller();
    await expect(mock.isInCircle).toHaveBeenCalledWith(23, 23, 100);
    await expect(mock.isInCircle).toHaveBeenCalledTimes(5);
    const nOfInCircle = document.getElementById("incircle").innerText;
    await expect(nOfInCircle).toBe(0);
  });
});
