import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventProducerService } from "./eventproducer.service";
import { PostEventDto } from "../eventProducer/PostEventDto";

@swagger.ApiTags("eventProducers")
@common.Controller("eventProducers")
export class EventProducerController {
  constructor(protected readonly service: EventProducerService) {}

  @common.Get("/:id/publish-post-event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishPostEvent(
    @common.Body()
    body: PostEventDto
  ): Promise<string> {
        return this.service.PublishPostEvent(body);
      }

  @common.Post("/publishPostToKafka")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishPostToKafka(
    @common.Body()
    body: PostEventDto
  ): Promise<string> {
        return this.service.PublishPostToKafka(body);
      }
}
