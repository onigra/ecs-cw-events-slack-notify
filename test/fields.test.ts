import { fields } from "../src/fields";

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
  const expected = [
    {
      title: "Cluster",
      value: cluster,
      short: true,
    },
    {
      title: "Service",
      value: service,
      short: true,
    },
    {
      title: "Task Definition",
      value: taskDef,
      short: true,
    },
    {
      title: "Deployment Status",
      value: deploymentStatus,
      short: true,
    },
    {
      title: "Task Id",
      value: taskId,
      short: false,
    },
    {
      title: "Tasks",
      value: tasks,
      short: false,
    },
  ];

  // when
  const actual = fields(running);

  // then

  expect(actual).toStrictEqual(expected);
});
