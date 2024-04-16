import React from 'react'
import TicketCard from './(component)/TicketCard'
import { TicketService } from '@/service/TicketService'
import { Ticket, Tickets } from '@/types/TicketType';



const Dashboard = async () => {
  const res = await TicketService.getTickets();
  const ticketData : Tickets = res.ticket;
  const uniqueCategories = TicketService.getTicketCategories(ticketData);
  
  return (
    <div className='p-5'>
        <div >
           {ticketData && uniqueCategories.map((category) => (
             <h2>{category}</h2>
             
           ))}
        </div>
    </div>
  )
}

export default Dashboard
