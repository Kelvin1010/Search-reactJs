import React from 'react';
import './BackEnd.css'

function FormBE({data}) {
  return (
    <div className='be'>
        <h1>Search DATA BackEnd</h1>
        {data.map((item) => (
            <ul key={item.id} className='formbe'>
                <li>{item.first_name}</li>
                <li>{item.last_name}</li>
                <li>{item.email}</li>
            </ul>
        ))}
    </div>
  )
}

export default FormBE;