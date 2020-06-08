import { taskDef } from "../../../src/event/parser/taskDef";

test("taskDef()", () => {
  // setup
  const taskDefinitionArn =
    "arn:aws:ecs:ap-northeast-1:319807237558:task-definition/test-task-def:10";

  // and
  const expected = "test-task-def:10";

  // when
  const actual = taskDef(taskDefinitionArn);

  // then
  expect(actual).toBe(expected);
});
