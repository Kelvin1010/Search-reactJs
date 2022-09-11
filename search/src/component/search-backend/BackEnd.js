import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FormBE from './FormBE';
import Table from '../table/Table';

function BackEnd() {
  const [query, setQuery] = useState("");
  const[data, setData] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:1919?q=${query}`)
      setData(res.data);
    }
    fetchUsers()
  },[query])
  return (
      <div>
          <input type={'text'} placeholder="Search..." className='search' 
                  onChange={(e) => setQuery(e.target.value)} 
          />
          {/* <FormBE data={data}/> */}
          <Table data={data}/>
      </div>
  )
}

export default BackEnd