import { handler } from "../src/main";

test("handler()", async () => {
  const event = {};
  expect(await handler(event)).toBe("ok");
});
