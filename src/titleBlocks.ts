import { SectionBlock, MrkdwnElement } from "@slack/types";

const title: MrkdwnElement = {
  text: "*ECS Deployment Info*",
  type: "mrkdwn",
};

const titleSection: SectionBlock = {
  type: "section",
  text: title,
};

export function titleBlocks(): SectionBlock[] {
  return [titleSection];
}
