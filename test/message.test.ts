import { buildMessage } from "../src/message";
import { running } from "./data/running";
import { pending } from "./data/pending";
import { stopped } from "./data/stopped";

test("Running event", () => {
  // setup
  const expected = {
    blocks: [
      {
        text: {
          text: "*ECS Deployment Info*",
          type: "mrkdwn",
        },
        type: "section",
      },
    ],
    color: "good",
    fields: [
      {
        short: true,
        title: "Cluster",
        value:
          "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/clusters/test-cluster/services|test-cluster>",
      },
      {
        short: true,
        title: "Service",
        value:
          "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/clusters/test-cluster/services/test-service/details|test-service>",
      },
      {
        short: true,
        title: "Task Definition",
        value:
          "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/taskDefinitions/test-task-def/10|test-task-def:10>",
      },
      {
        short: true,
        title: "Deployment Status",
        value: "RUNNING",
      },
      {
        short: false,
        title: "Task Id",
        value:
          "<https://ap-northeast-1.console.aws.amazon.com/ecs/home?region=ap-northeast-1#/clusters/test-cluster/tasks/9999/details|9999>",
      },
      {
        short: false,
        title: "Tasks",
        value:
          "*Status:* RUNNING *Task:* app *ImageTag:* test-image:test-tag\n*Status:* RUNNING *Task:* sidecar *ImageTag:* sidecar:latest",
      },
    ],
  };

  // when
  const actual = buildMessage(running);

  // then
  expect(actual).toStrictEqual(expected);
});

test.skip("Pending event", () => {
  // setup
  const expected = {};

  // when
  const actual = buildMessage(pending);

  // then
  expect(actual).toStrictEqual(expected);
});

test.skip("Stopped event", () => {
  // setup
  const expected = {};

  // when
  const actual = buildMessage(stopped);

  // then
  expect(actual).toStrictEqual(expected);
});
