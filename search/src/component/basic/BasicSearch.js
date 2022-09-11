import React, { useLayoutEffect, useState } from 'react';
import './BasicSearch.css';
import { Users } from '../../users.js';

function BasicSearch() {
    const [query, setQuery] = useState("");
    const [not,setNot] = useState("Khong tim thay!");
    const listItems = 
        Users.filter(user => user.first_name.toLocaleLowerCase().includes(query))
        .map((user) =>(<li key={user.id} className='listItem'>{user.first_name}</li>)
        )
    console.log(listItems)
    return (
        <div>
            <input type={'text'} placeholder="Search..." className='search' 
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className='list'>
                {(listItems.length === 0) ? (
                    <>
                        <p style={{color: "red"}} >{not}</p>
                    </>
                ):(
                    <>
                    {listItems}
                    </>
                )}
            </ul>
        </div>
    )
}

export default BasicSearch