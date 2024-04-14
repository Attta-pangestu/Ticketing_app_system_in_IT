import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const ticketSchema = new mongoose.Schema(
    {
        title: { type: String, required: true }, 
        description: { type: String, required: true },
        category: { type: String, required: true },
    }, 
    {
        timestamps: true
    }
    
)

const TicketDB = mongoose.mo