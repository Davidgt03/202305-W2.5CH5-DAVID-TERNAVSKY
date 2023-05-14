import { table } from "./functions";

describe("Given the function table", () => {
  describe("When given the number 1 and number 1", () => {
    test("Then it should return an array of 1 position", () => {
      const columns = 1;
      const rows = 1;

      const expectedResult = ["1"];
      const resultReturned = table(rows, columns);

      expect(resultReturned).toStrictEqual(expectedResult);
    });
  });
});
