import { expect, test } from "vite-plus/test";
import { fn } from "./main.ts";

test("fn", () => {
  expect(fn()).toBe("Hello, world!");
});
