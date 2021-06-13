// Import the js file to test
import { validateUrl } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
  test("Testing the validateUrl() function", () => {
    expect(validateUrl).toBeDefined();
  });
});
