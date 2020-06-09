import { title } from "../../src/blocks/title";

test("title()", () => {
  // setup
  const expected = [
    {
      type: "section",
      text: {
        text: "*ECS Deployment Info*",
        type: "mrkdwn",
      },
    },
  ];

  // when
  const actual = title();

  // then
  expect(actual).toStrictEqual(expected);
});
