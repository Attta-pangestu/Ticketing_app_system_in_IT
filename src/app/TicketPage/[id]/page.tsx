
import React from 'react'
import TicketForm from '../../(component)/TicketForm';
import { Ticket } from '@/types/TicketType';
import { TicketService } from '@/service/TicketService';



const TicketPage = async ({params}: {params: {id: string}}) => {
  const isEditMode = params.id === 'new' ? false : true; 
  const ticketId = params.id === 'new' ?  'new' : params.id;
  let updatedTicket : Ticket ;
  
  updatedTicket = isEditMode
    ? await TicketService.getTicketById(ticketId).then(({ticket}) => ticket)
    : ({_id: 'new'} as Ticket);

  return (
    <>
      <TicketForm ticketUpdate={updatedTicket as Ticket} />
    </>
  )
}

export default TicketPage