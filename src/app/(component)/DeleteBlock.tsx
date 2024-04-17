"use client"

import { TicketService } from '@/service/TicketService'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'



const DeleteBlock = ({id} : {id: string}) => {
  const router = useRouter();
 
  async function onDeleteHandler(ticketId: string) {
    const res = await TicketService.deleteTicket(ticketId);
    if(!res.ok) {
      throw new Error('Failed to delete ticket');
    }
    router.refresh(); 
  }
  return (
    <FontAwesomeIcon 
        icon={faX}
        className='text-red-400 hover:cursor-pointer hover:text-red-200'
        onClick={() => onDeleteHandler(id)}
    />
  )
}

export default DeleteBlock