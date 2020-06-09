import { ecsTaskEvent } from "../../src/event/ecsTask";
import { running as runningEvent } from "../data/running";

test("Running event", () => {
  // setup
  const expected = {
    region: "ap-northeast-1",
    cluster: "test-cluster",
    service: "test-service",
    status: "RUNNING",
    taskDef: "test-task-def:10",
    taskId: "9999",
    tasks: [
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
    ],
  };

  // when
  const actual = ecsTaskEvent(runningEvent);

  // then
  expect(actual).toStrictEqual(expected);
});
