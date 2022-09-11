import React, { useState } from 'react';
import { Users } from '../../users';
import Table from './Table';

function SearchTable() {
    const [query, setQuery] = useState("");

    const keys = ["first_name", "last_name","email"]

    const search = (data) => {
        return data.filter((item) => 
            keys.some((key) => item[key].toLowerCase().includes(query)) 

        // item.first_name.toLowerCase().includes(query) 
        // || item.last_name.toLowerCase().includes(query)
        // || item.email.toLowerCase().includes(query) 
    )}
    const hi = search(Users)
    return (
        <div>
            <input type={'text'} placeholder="Search..." className='search' 
                onChange={(e) => setQuery(e.target.value)} 
            />
            {(hi.length === 0) ? (
                <>
                    <p  style={{color: "red"}}>Khong co!</p>
                </>
            ):(
                <>
                <Table data={search(Users)}/>
                </>
            )}
        </div>
    )
}

export default SearchTable