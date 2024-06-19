import * as graphql from "@nestjs/graphql";
import { EventConsumerService } from "./eventconsumer.service";

export class EventConsumerResolver {
  constructor(protected readonly service: EventConsumerService) {}

  @graphql.Mutation(() => String)
  async ConsumePostEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConsumePostEvent(args);
  }
}
