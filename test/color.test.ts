import { color } from "../src/blocks/color";

describe.each`
  status              | expected
  ${"PROVISIONING"}   | ${"#3498DB"}
  ${"PENDING"}        | ${"#3498DB"}
  ${"DEPROVISIONING"} | ${"#3498DB"}
  ${"STOPPED"}        | ${"warning"}
  ${"RUNNING"}        | ${"good"}
`("color($status)", ({ status, expected }) => {
  test(`returns ${expected}`, () => {
    expect(color(status)).toBe(expected);
  });
});
