// Import jest before using, see https://jestjs.io/docs/en/ecmascript-modules#differences-between-esm-and-commonjs
// import { jest } from "@jest/globals";
import foo from "./foo.js";

it("foo", () => {
  expect(foo()).toBe("foo");
});
