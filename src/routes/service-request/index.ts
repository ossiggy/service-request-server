import { Router } from 'express';
import { jwtAuth, isAuthorizedForAction } from '../../middleware';
import { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket } from '../../controllers';

const ticketRouter = Router();

ticketRouter
.get('/', jwtAuth, isAuthorizedForAction(['admin']), getAllTickets)
.get('/:id', jwtAuth, isAuthorizedForAction(['admin', 'ticket:read']), getTicketById)
.post('/', jwtAuth, isAuthorizedForAction(['admin', 'ticket:write']), createTicket)
.put('/:id', jwtAuth, isAuthorizedForAction(['admin', 'ticket:write']), updateTicket)
.delete('/:id', jwtAuth, isAuthorizedForAction(['admin', 'ticket:write']), deleteTicket);

export { ticketRouter };
