"use client"

import { useRouter } from 'next/navigation'
import { title } from 'process'
import React from 'react'


const generateStartingTicketData = (editMode : boolean, ticket : any) => {
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

const TicketForm = ({ticket} : {ticket: any}) => {
    const router = useRouter();
    console.log(ticket)
    const isEditMode = ticket?._id  === 'new' ? false : true;
    const startingTicketData = generateStartingTicketData(isEditMode, ticket);
    const [formData, setFormData] = React.useState(startingTicketData);
    
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
            const res = await fetch(`http://localhost:3000/api/tickets/${ticket?._id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({formData}), 
            } );
            if(!res.ok){
                throw new Error('Failed to update ticket');
            }
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
            // router.refresh();
            // router.push('/');
        }
        
    }
    

    
    

  return (
    <div className='flex justify-center'>
    <form className='flex flex-col  gap-3 w-1/2' onSubmit={handleSubmit}>
        <h3>Create </h3>
        <label>Title</label>
        <input id='title' name='title' type="text" required  onChange={handleChange} />
        <label >Description</label>
        <textarea name="description" id="description" rows={5} onChange={handleChange} />
        <label >Category</label>
        <select name='category' id='category' onChange={handleChange} >
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="other">Other</option>
        </select>
        <label>Priority</label>
        <div className='flex items-end gap-2'>
            <input type="radio" name="priority" id="low"  onChange={handleChange}/>
            <label htmlFor="low">Low</label>
            <input type="radio" name="priority" id="medium" onChange={handleChange} />
            <label htmlFor="medium">Medium</label>
            <input type="radio" name="priority" id="high" onChange={handleChange} />
            <label htmlFor="high">High</label>
        </div>
        <label >Progress</label>
        <input type="range" name="progress" id="progress" min={0} max={100} onChange={handleChange} />
        <label >Status</label>
        <select name="status" id="status" onChange={handleChange}>
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