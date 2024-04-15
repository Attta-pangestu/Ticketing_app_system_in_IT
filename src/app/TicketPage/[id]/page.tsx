
import React from 'react'
import TicketForm from '../../(component)/TicketForm';



const TicketPage = ({params}: {params: {id: string}}) => {
  const isEditMode = params.id === 'new' ? true : false; 
  const ticketData = isEditMode ? {_id: 'new'} : {_id: 'edit'};
  return (
    <>
    <TicketForm ticket={ticketData} />
    </>
  )
}

export default TicketPage