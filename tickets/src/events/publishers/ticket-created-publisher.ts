import { Publisher, Subjects, TicketCreatedEvent } from "@nticket/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
