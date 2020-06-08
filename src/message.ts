import { MessageAttachment } from "@slack/types";
import { ecsTaskEvent } from "./event/ecsTask";
import { color } from "./blocks/color";
import { title } from "./blocks/title";
import { fields } from "./blocks/fields";

export function buildMessage(event: any): MessageAttachment {
  const e = ecsTaskEvent(event);
  return {
    color: color(e.status),
    blocks: title(),
    fields: fields(e),
  };
}
