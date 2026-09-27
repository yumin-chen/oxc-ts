import { expect, test } from "vite-plus/test";
import { main } from "./main.ts";

test("main", () => {
  expect(main()).toBe("Hello, world!");
});
