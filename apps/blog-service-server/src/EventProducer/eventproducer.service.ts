import { Injectable } from "@nestjs/common";
import { PostEventDto } from "../eventProducer/PostEventDto";

@Injectable()
export class EventProducerService {
  constructor() {}
  async PublishPostEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PublishPostToKafka(args: PostEventDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
