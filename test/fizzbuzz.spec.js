import fizzbuzz from "../src/fizzbuzz";
describe("fizzbuzz", () => {
  test("20", () => {
    const a = fizzbuzz(20);
    expect(a).toStrictEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
      16,
      17,
      "Fizz",
      19,
      "Buzz",
    ]);
  });
});
