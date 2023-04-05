import { Publisher, OrderCancelledEvent, Subjects } from "@nticket/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
