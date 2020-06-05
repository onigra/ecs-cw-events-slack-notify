import { SectionBlock } from "@slack/types";

const titleSection: SectionBlock = {
  type: "section",
  text: {
    text: "*ECS Deployment Info*",
    type: "mrkdwn",
  },
};

export function title(): SectionBlock[] {
  return [titleSection];
}
