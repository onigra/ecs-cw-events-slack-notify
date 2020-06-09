import { cluster } from "../../../src/event/parser/cluster";

test("cluster()", () => {
  // setup
  const clusterArn = "arn:aws:ecs:ap-northeast-1:9999:cluster/test-cluster";

  // and
  const expected = "test-cluster";

  // when
  const actual = cluster(clusterArn);

  // then
  expect(actual).toBe(expected);
});
