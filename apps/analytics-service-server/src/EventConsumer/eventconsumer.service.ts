import { Injectable } from "@nestjs/common";

@Injectable()
export class EventConsumerService {
  constructor() {}
  async ConsumePostEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
