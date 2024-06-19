import { Module } from "@nestjs/common";
import { EventProducerService } from "./eventproducer.service";
import { EventProducerController } from "./eventproducer.controller";
import { EventProducerResolver } from "./eventproducer.resolver";

@Module({
  controllers: [EventProducerController],
  providers: [EventProducerService, EventProducerResolver],
  exports: [EventProducerService],
})
export class EventProducerModule {}
