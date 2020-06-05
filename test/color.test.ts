import { color } from "../src/blocks/color";

import { running } from "./data/running";
import { pending } from "./data/pending";
import { stopped } from "./data/stopped";

test("Running Event", async () => {
  expect(color(running)).toBe("good");
});

test("Pending Event", async () => {
  expect(color(pending)).toBe("#3498DB");
});

test("Stopped Event", async () => {
  expect(color(stopped)).toBe("warning");
});
