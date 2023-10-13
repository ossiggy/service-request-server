import { Router } from 'express';
import guard from 'express-jwt-permissions';
import { jwtAuth, isAuthorizedForAction } from '../../middleware';
import { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket } from '../../controllers';

const ticketRouter = Router();
const permissionsGuard = guard();

ticketRouter
.get('/', jwtAuth, isAuthorizedForAction, getAllTickets)
.get('/:id', jwtAuth, permissionsGuard.check([['admin'], ['ticket:read']]), getTicketById)
.post('/', jwtAuth, createTicket)
.put('/:id', jwtAuth, permissionsGuard.check([['admin'], ['ticket:write']]), updateTicket)
.delete('/:id', jwtAuth, permissionsGuard.check(['admin']), deleteTicket);

export { ticketRouter };
