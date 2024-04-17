import React from 'react'
import PriorityDisplay from './PriorityDisplay';
import DeleteBlock from './DeleteBlock';
import Link from 'next/link';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';
import { Ticket } from '@/types/TicketType';


const TicketCard = ({ticket} : {ticket: Ticket}) => {
    function formatTimestamp(timestamp: number) {
       const options : Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true, 
       }
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
    }
    const createdDateTime = formatTimestamp(Date.parse(ticket.createdAt));
    
    

  return (
    <div className='flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-2 m-2 ' id={ticket._id}>
        <div className='flex mb-3'>
            <PriorityDisplay priority={ticket.priority} />
            <div className='ml-auto'>
                <DeleteBlock id={ticket._id}  />
            </div>
        </div>
        
        <Link style={{display: 'contents'}} href={`/TicketPage/${ticket._id}`}>
            <h4 className='mb-1'>{ticket.title}</h4>
            <hr className='h-px border-0 bg-page mb-2' />
            <p className='whitespace-pre-wrap'>{ticket.description}</p>

            <div className='flex-grow'></div>
            
            <div className='flex mt-2'>
                <div className='flex flex-col'>
                    <p className='text-md my-1'>{createdDateTime}</p>
                    <ProgressDisplay progress={ticket.progress} />
                </div>

                <div className='ml-auto flex items-end'>
                    <StatusDisplay status={ticket.status} />
                </div>

            </div>
        </Link>

    </div>
  )
}

export default TicketCard