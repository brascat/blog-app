import * as graphql from "@nestjs/graphql";
import { PostEventDto } from "../eventProducer/PostEventDto";
import { EventProducerService } from "./eventproducer.service";

export class EventProducerResolver {
  constructor(protected readonly service: EventProducerService) {}

  @graphql.Query(() => String)
  async PublishPostEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PublishPostEvent(args);
  }

  @graphql.Mutation(() => String)
  async PublishPostToKafka(
    @graphql.Args()
    args: PostEventDto
  ): Promise<string> {
    return this.service.PublishPostToKafka(args);
  }
}
