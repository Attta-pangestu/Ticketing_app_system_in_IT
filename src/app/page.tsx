
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
          {ticketData && uniqueCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className='mb-5'>
              <hr className='h-2 border-0 bg-white ' />
              <h2>{category}</h2>
              <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-4'>
                {ticketData.filter((ticket) => ticket.category === category).map((ticket, ticketIndex) => (
                  <TicketCard key={ticketIndex} ticket={ticket}  />
                ))}
              </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Dashboard;


