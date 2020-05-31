import { IncomingWebhook } from "@slack/webhook";
import { buildMessage } from "./messageBuilder";

const url = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);

export const handler = async (event: any) => {
  console.log(event);
  const message = buildMessage(event);
  await webhook.send(message);
  return "ok";
};
