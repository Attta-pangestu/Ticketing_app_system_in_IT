import { Ticket, Tickets } from "@/types/TicketType";

async function getTickets() {
    try{
        const res = await fetch('http://localhost:3000/api/tickets');
        const data = await res.json();
        if(!res.ok){
            throw new Error('Failed to fetch tickets');
        }
        console.log(data)
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



export const TicketService = {
    getTickets,
    getTicketCategories, 
}
