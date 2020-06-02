import { fields } from "../src/fields";

import { fieldsBuilder } from "../src/builder/fields";
import { running } from "./data/running";

test("running event", async () => {
  // setup
  const cluster = "test-cluster";
  const service = "test-service";
  const taskDef = "test-task-def:10";
  const deploymentStatus = "RUNNING";
  const taskId = "9999";
  const tasks = [
    "*Status:* RUNNING *Task:* app *ImageTag:* test-image:test-tag",
    "*Status:* RUNNING *Task:* sidecar *ImageTag:* sidecar:latest",
  ].join("\n");

  //and
  const expected = fieldsBuilder(
    cluster,
    service,
    taskDef,
    deploymentStatus,
    taskId,
    tasks
  );

  // when
  const actual = fields(running);

  // then

  expect(actual).toStrictEqual(expected);
});
