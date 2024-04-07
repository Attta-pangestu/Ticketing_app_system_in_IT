import React from 'react'
import PriorityDisplay from './PriorityDisplay';
import DeleteBlock from './DeleteBlock';
import Link from 'next/link';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';


const TicketCard = () => {
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

    const createdDateTime = '2023-01-01T00:00:00.000Z';
    

  return (
    <div className='flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-4 m-2  '>
        <div className='flex mb-3'>
            <PriorityDisplay priority={0} />
            <div className='ml-auto'>
                <DeleteBlock />
            </div>
        </div>
        
        <Link style={{display: 'contents'}} href='/'>
            <h4 className='mb-1'>Lorem Ipsum</h4>
            <hr className='h-px border-0 bg-page mb-2' />
            <p className='whitespace-pre-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, at?</p>

            <div className='flex-grow'></div>
            
            <div className='flex mt-2'>
                <div className='flex flex-col'>
                    <p className='text-md my-1'>09 Januari 2023</p>
                    <ProgressDisplay progress={40} />
                </div>

                <div className='ml-auto flex items-end'>
                    <StatusDisplay status='not started' />
                </div>

            </div>
        </Link>

    </div>
  )
}

export default TicketCard