import { Publisher, OrderCreatedEvent, Subjects } from "@nticket/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
