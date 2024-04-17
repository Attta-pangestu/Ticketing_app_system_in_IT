import { Ticket, Tickets } from "@/types/TicketType";

async function getTickets() {
    try{
        const res = await fetch('http://localhost:3000/api/tickets', {cache: 'no-store'});
        const data = await res.json();
        if(!res.ok){
            throw new Error('Failed to fetch tickets');
        }
        return data;
    }catch(err) {
        console.log(err)
    }
}

function getTicketCategories(tickets: Tickets) {
    if (!tickets) return []; 

    const categories = tickets.map((ticket: Ticket) => ticket.category);
    const uniqueCategories = [
        ...new Set(categories),
    ];
    return uniqueCategories;
}

async function getTicketById(ticketId: string) {
    try{
        const res = await fetch(`http://localhost:3000/api/tickets/${ticketId}`, {cache: 'no-store'});
        const data = await res.json();
        if(!res.ok){
            throw new Error('Failed to fetch tickets');
        }
        return data;
    }catch(err){
        console.log(err)
    }
}

async function deleteTicket(ticketId: string) {
    return await fetch(`http://localhost:3000/api/tickets`, {
        headers: {
            'Content-Type': 'application/json'
        }, 
        method: 'DELETE',
        body: JSON.stringify({ticketId}),
    })
    .then((res) => res.json())
}

async function editTicket(ticketId: string, ticketData: Ticket) {
    return await fetch(`http://localhost:3000/api/tickets`, {
        headers: {
            'Content-Type': 'application/json'
        }, 
        method: 'PUT',
        body: JSON.stringify({ticketId, ticketData}),
    })
}



export const TicketService = {
    getTickets,
    getTicketCategories, 
    getTicketById, 
    deleteTicket, 
    editTicket, 
    
}
