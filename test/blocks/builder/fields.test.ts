import { fieldsBuilder } from "../../..//src/blocks/builder/fields";

test("fieldsBuilder()", () => {
  // setup
  const elements = {
    cluster: "cluster",
    service: "service",
    taskDef: "taskDef",
    deploymentStatus: "deployStatus",
    taskId: "deployStatus",
    tasks: "tasks",
  };

  // and
  const expected = [
    {
      title: "Cluster",
      value: elements.cluster,
      short: true,
    },
    {
      title: "Service",
      value: elements.service,
      short: true,
    },
    {
      title: "Task Definition",
      value: elements.taskDef,
      short: true,
    },
    {
      title: "Deployment Status",
      value: elements.deploymentStatus,
      short: true,
    },
    {
      title: "Task Id",
      value: elements.taskId,
      short: false,
    },
    {
      title: "Tasks",
      value: elements.tasks,
      short: false,
    },
  ];

  // when
  const actual = fieldsBuilder(elements);

  // then
  expect(actual).toStrictEqual(expected);
});
