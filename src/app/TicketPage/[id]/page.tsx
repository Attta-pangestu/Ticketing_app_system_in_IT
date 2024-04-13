"use client"
import React from 'react'



const TicketPage = ({params}: {params: {id: string}}) => {
  return (
    <div className='flex justify-center'>
        <form className='flex flex-col  gap-3 w-1/2'>
            <h3>Update Your Ticket</h3>
            <label>Title</label>
            <input id='title' name='title' type="text" required  />
            <label >Description</label>
            <textarea name="description" id="description" rows={5} />
            <label >Category</label>
            <select name='category' id='category' value='other'>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
                <option value="other">Other</option>
            </select>
            <label>Priority</label>
            <div className='flex items-end gap-2'>
                <input type="radio" name="priority" id="low" value={0} />
                <label htmlFor="low">Low</label>
                <input type="radio" name="priority" id="medium" value={1} />
                <label htmlFor="medium">Medium</label>
                <input type="radio" name="priority" id="high" value={2} />
                <label htmlFor="high">High</label>
            </div>
            <label >Progress</label>
            <input type="range" name="progress" id="progress" min={0} max={100} value={39} />
            <label >Status</label>
            <select name="status" id="status" value={'not started'}>
                <option value="not started">Not Started</option>
                <option value="started">Started</option>
                <option value="done">Done</option>
            </select>
            <input type="submit" className='btn '  />
        </form>
    </div>
  )
}

export default TicketPage