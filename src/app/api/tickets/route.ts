import {NextRequest, NextResponse} from "next/server";
import TicketDB from "@/models/ticketDB";

export async function GET(request: NextRequest) {
    try{
        const ticket = await TicketDB.find();
        return NextResponse.json({ticket, status: 'success'}, { status: 200 })
    }catch(error){
        console.log(error)
        return NextResponse.json({error, status: 'failed'}, { status: 500 })
    }
}


export async function POST(request : NextRequest ) {
    try{
        const body = await request.json();
        console.log(body);
        const ticketData = body.formData;
        
        await TicketDB.create(ticketData);
        return NextResponse.json({status: 'Ticket Created'}, { status: 200 })
    }catch(err){
        console.log(err)
        return NextResponse.json({err, status: 'failed to create'}, { status: 500 })
    }

}