import { fields } from "../../src/blocks/fields";
import { fieldsBuilder } from "../../src/blocks/builder/fields";
import { ecsTaskEvent } from "../../src/event/ecsTask";

import { running as runningEvent } from "../data/running";

test("running event", async () => {
  // setup
  const cluster =
    "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/clusters/test-cluster/services|test-cluster>";
  const service =
    "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/clusters/test-cluster/services/test-service/details|test-service>";
  const taskDef =
    "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/taskDefinitions/test-task-def/10|test-task-def:10>";
  const deploymentStatus = "RUNNING";
  const taskId =
    "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/clusters/test-cluster/tasks/9999/details|9999>";
  const tasks = [
    "*Status:* RUNNING *Task:* app *ImageTag:* test-image:test-tag",
    "*Status:* RUNNING *Task:* sidecar *ImageTag:* sidecar:latest",
  ].join("\n");

  //and
  const materials = {
    cluster: cluster,
    service: service,
    taskDef: taskDef,
    deploymentStatus: deploymentStatus,
    taskId: taskId,
    tasks: tasks,
  };

  //and
  const expected = fieldsBuilder(materials);

  // when
  const event = ecsTaskEvent(runningEvent);
  const actual = fields(event);

  // then
  expect(actual).toStrictEqual(expected);
});
