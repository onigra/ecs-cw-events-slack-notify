import { tasksBuilder } from "../../..//src/blocks/builder/tasks";

test("one task", () => {
  // setup
  const tasks = [
    {
      status: "STOPPED",
      task: "app",
      imageTag: "test-image:test-tag",
    },
  ];

  // and
  const expected = [
    `*Status:* STOPPED *Task:* app *ImageTag:* test-image:test-tag`,
  ];

  // when
  const actual = tasksBuilder(tasks);

  // then
  expect(actual).toStrictEqual(expected);
});

test("two tasks", () => {
  // setup
  const tasks = [
    {
      status: "RUNNING",
      task: "app",
      imageTag: "test-image:test-tag",
    },
    {
      status: "RUNNING",
      task: "sidecar",
      imageTag: "sidecar:latest",
    },
  ];

  // and
  const expected = [
    `*Status:* RUNNING *Task:* app *ImageTag:* test-image:test-tag`,
    `*Status:* RUNNING *Task:* sidecar *ImageTag:* sidecar:latest`,
  ];

  // when
  const actual = tasksBuilder(tasks);

  // then
  expect(actual).toStrictEqual(expected);
});
