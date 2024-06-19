import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventConsumerService } from "./eventconsumer.service";

@swagger.ApiTags("eventConsumers")
@common.Controller("eventConsumers")
export class EventConsumerController {
  constructor(protected readonly service: EventConsumerService) {}

  @common.Post("/consumePostEvent")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumePostEvent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConsumePostEvent(body);
      }
}
