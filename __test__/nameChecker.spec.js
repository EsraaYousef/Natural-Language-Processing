// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker";

const Names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

test("the Names list has Archer on it", () => {
  expect(Names).toContain("Archer");
  expect(checkForName).toBeDefined();
});
