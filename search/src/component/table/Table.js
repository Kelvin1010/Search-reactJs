import React, { useState } from 'react';
import { Users } from '../../users.js';
import './Tabel.css'

function Table({data}) {
     
  return (
      <div className='table'>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Email</th>
                    </tr>
                    {data.map((item) =>(
                        <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    
  )
}

export default Table