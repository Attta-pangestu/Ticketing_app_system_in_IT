
async function getTickets() {
    try{
        const res = await fetch('http://localhost:3000/api/tickets');
        const data = await res.json();
        console.log(data)
        return data;
    }catch(err) {
        console.log(err)
    }
}


export const TicketService = {
    getTickets
}
