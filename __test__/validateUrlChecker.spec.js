// Import the js file to test
import { validateUrl } from "../src/client/js/validateUrl";
describe("Testing to make sure input is url", () => {
  test("Testing the validateUrl() function", () => {
    expect(validateUrl("Welcome")).toBe(false);
  });
});
