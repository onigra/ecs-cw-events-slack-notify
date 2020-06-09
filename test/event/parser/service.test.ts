import { service } from "../../../src/event/parser/service";

test("service()", () => {
  // setup
  const group = "service:test-service";

  // and
  const expected = "test-service";

  // when
  const actual = service(group);

  // then
  expect(actual).toBe(expected);
});
