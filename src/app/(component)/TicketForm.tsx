"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { Ticket } from '@/types/TicketType';


const generateStartingTicketData = (editMode : boolean, ticket : Ticket )  => {
    const startingTicketData = {
        title: '', 
        description: '',
        priority: 1,
        progress: 0,
        status: 'not started', 
        category: 'other',
    }
    if(editMode) {
        startingTicketData['title'] = ticket.title;
        startingTicketData['description'] = ticket.description;
        startingTicketData['priority'] = ticket.priority;
        startingTicketData['progress'] = ticket.progress;
        startingTicketData['status'] = ticket.status;
        startingTicketData['category'] = ticket.category;
        
    }
    return  startingTicketData;
}

const TicketForm =  ({ticketUpdate} : {ticketUpdate: Ticket} ) => {
    const router = useRouter();
    const isEditMode = ticketUpdate._id === 'new' ? false : true; 
    const [formData, setFormData] = React.useState(generateStartingTicketData(isEditMode, ticketUpdate));
    
    
    const handleChange = (event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
        if(isEditMode) {
            console.log('on edit mode')
            const res = await fetch(`http://localhost:3000/api/tickets/`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({formData,ticketId : ticketUpdate._id}), 
            } );
            if(!res.ok){
                throw new Error('Failed to update ticket');
            }
            router.refresh();
            router.push('/');
        }else{
            const res = await fetch('http://localhost:3000/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({formData})
            })
            const data = await res.json();
            console.log(data)
            router.refresh();
            router.push('/');
        }
        
    }
    

    
    

  return (
    <div className='flex justify-center'>
    <form className='flex flex-col  gap-3 w-1/2' onSubmit={handleSubmit}>
        <h3>{isEditMode ? 'Edit Ticket' : 'Create Ticket'} </h3>
        <label>Title</label>
        <input id='title' name='title' type="text" required value={formData.title}  onChange={handleChange} />
        <label >Description</label>
        <textarea name="description" id="description" rows={5} value={formData.description} onChange={handleChange} />
        <label >Category</label>
        <select name='category' id='category' value={formData.category} onChange={handleChange} >
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="other">Other</option>
        </select>
        <label>Priority</label>
        <div className='flex items-end gap-2'>
            <input type="radio" name="priority" id="low"  value={0} checked={formData.priority  == 0} onChange={handleChange}/>
            <label htmlFor="low">Low</label>
            <input type="radio" name="priority" id="medium" value={1} checked={formData.priority == 1} onChange={handleChange} />
            <label htmlFor="medium">Medium</label>
            <input type="radio" name="priority" id="high" value={2} checked={formData.priority == 2} onChange={handleChange} />
            <label htmlFor="high">High</label>
        </div>
        <label >Progress</label>
        <input type="range" name="progress" id="progress" value={formData.progress} min={0} max={100} onChange={handleChange} />
        <label >Status</label>
        <select name="status" id="status" onChange={handleChange} value={formData.status}>
            <option value="not started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
        </select>
        <input type="submit" className='btn'   />
    </form>
</div>
  )
}

export default TicketForm