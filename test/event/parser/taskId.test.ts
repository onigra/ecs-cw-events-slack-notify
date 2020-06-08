import { taskId } from "../../../src/event/parser/taskId";

test("taskId()", () => {
  // setup
  const taskArn = "arn:aws:ecs:ap-northeast-1:319807237558:task/9999";

  // and
  const expected = "9999";

  // when
  const actual = taskId(taskArn);

  // then
  expect(actual).toBe(expected);
});
