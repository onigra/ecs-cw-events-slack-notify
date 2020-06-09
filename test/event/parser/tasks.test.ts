import { tasks } from "../../../src/event/parser/tasks";

test("tasks()", () => {
  // setup
  const containers = [
    {
      containerArn: "arn:aws:ecs:ap-northeast-1:9999:container/9999",
      exitCode: 0,
      lastStatus: "RUNNING",
      name: "app",
      image: "9999.dkr.ecr.ap-northeast-1.amazonaws.com/test-image:test-tag",
      imageDigest:
        "sha256:9999999999999999999999999999999999999999999999999999999999999999",
      runtimeId: "9999",
      taskArn: "arn:aws:ecs:ap-northeast-1:9999:task/9999",
      networkInterfaces: [[Object]],
      cpu: "0",
    },
    {
      containerArn: "arn:aws:ecs:ap-northeast-1:9999:container/8888",
      exitCode: 0,
      lastStatus: "RUNNING",
      name: "sidecar",
      image: "sidecar/sidecar:latest",
      runtimeId: "8888",
      taskArn: "arn:aws:ecs:ap-northeast-1:9999:task/8888",
      networkInterfaces: [[Object]],
      cpu: "256",
      memory: "512",
    },
  ];

  // and
  const expected = [
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

  // when
  const actual = tasks(containers);

  // then
  expect(actual).toStrictEqual(expected);
});
