import { useState } from 'react';
import './App.css';
import BasicSearch from './component/basic/BasicSearch';
import BackEnd from './component/search-backend/BackEnd';
import FormBE from './component/search-backend/FormBE';
import SearchTable from './component/table/SearchTable';
import { Users } from './users';

function App() {
  return (
    <div className="app">
      <BasicSearch />
      {/* <SearchTable /> */}
      {/* <BackEnd /> */}
    </div>
  );
}


export default App;
