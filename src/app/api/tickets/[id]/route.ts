import TicketDB from "@/models/ticketDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    try{
        const ticket = await TicketDB.findById(params.id);
        return NextResponse.json({ticket, status: 'success'}, { status: 200 })
    }catch(error){
        console.log(error)
        return NextResponse.json({error, status: 'failed'}, { status: 500 })
    }
}