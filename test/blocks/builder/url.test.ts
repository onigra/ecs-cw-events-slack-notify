import { urlBuilder } from "../../..//src/blocks/builder/url";

test("urlBuilder()", () => {
  // setup
  const materials = {
    region: "us-west-1",
    cluster: "cluster",
    service: "service",
    taskDef: "foo:10",
    taskId: "taskid",
  };

  // and
  const expected = {
    clusterUrl:
      "https://us-west-1.console.aws.amazon.com/ecs/home?region=us-west-1#/clusters/cluster/services",
    serviceUrl:
      "https://us-west-1.console.aws.amazon.com/ecs/home?region=us-west-1#/clusters/cluster/services/service/details",
    taskDefUrl:
      "https://us-west-1.console.aws.amazon.com/ecs/home?region=us-west-1#/taskDefinitions/foo/10",
    taskUrl:
      "https://us-west-1.console.aws.amazon.com/ecs/home?region=us-west-1#/clusters/cluster/tasks/taskid/details",
  };

  // when
  const actual = urlBuilder(materials);

  // then
  expect(actual).toStrictEqual(expected);
});
