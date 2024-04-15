import React from 'react'
import TicketCard from './(component)/TicketCard'
import { TicketService } from '@/service/TicketService'



const Dashboard = async () => {
  const TicketData = await TicketService.getTickets;
  console.log(TicketData)
  
  return (
    <div className='p-5'>
        <div >
            
        </div>
    </div>
  )
}

export default Dashboard
