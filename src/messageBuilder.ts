import { MessageAttachment } from "@slack/types";
import { color } from "./color";
import { titleBlocks } from "./titleBlocks";
import { fields } from "./fields";

function build(event: any): MessageAttachment {
  const message: MessageAttachment = {
    color: color(event),
    blocks: titleBlocks(),
    fields: fields(event),
  };

  return message;
}

export function buildMessage(event: any): MessageAttachment {
  return build(event);
}
