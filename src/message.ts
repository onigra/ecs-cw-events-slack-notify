import { MessageAttachment } from "@slack/types";
import { color } from "./blocks/color";
import { title } from "./blocks/title";
import { fields } from "./blocks/fields";

export function buildMessage(event: any): MessageAttachment {
  return {
    color: color(event),
    blocks: title(),
    fields: fields(event),
  };
}
