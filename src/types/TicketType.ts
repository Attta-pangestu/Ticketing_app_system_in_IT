export type Ticket = {
    _id: string;
    title: string;
    description: string;
    category: string;
    priority: number;
    progress: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Tickets = Ticket[];
