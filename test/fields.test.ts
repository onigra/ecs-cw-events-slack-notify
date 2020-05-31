import { fields } from "../src/fields";

import { running } from "./data/running";

test("fho", async () => {
  expect(fields(running)).toStrictEqual([
    {
      title: "Cluster",
      value: "cluster1",
      short: true,
    },
    {
      title: "Task Definition",
      value: "testTD:1",
      short: true,
    },
    {
      title: "Status",
      value: "RUNNING",
      short: true,
    },
  ]);
});
