import React from 'react'
import TicketCard from './(component)/TicketCard'


const Dashboard = () => {
  return (
    <div className='p-5'>
        <div >
            
            {/* card */}
            <div className='mb-4'>
                <h2>Unik Kategori</h2>
                <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
                  <TicketCard />
                  <TicketCard />
                  <TicketCard />


                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
