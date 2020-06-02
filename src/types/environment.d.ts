/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly SLACK_WEBHOOK_URL: string;
  }
}
