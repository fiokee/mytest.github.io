import React, { useState, useEffect } from 'react';
import AddPanel from './components/AddPanel';
import UpdatePanel from './components/UpdatePanel';
import SearchPanel from './components/SearchPanel';
import SearchResults from './components/SearchResults';
import database from './data/database.json';

const App = () => {
  const [data, setData] = useState(database);
  const [searchResults, setSearchResults] = useState([]);

  const addToDatabase = (newEntry) => {
    setData([...data, newEntry]);
  };

  const updateDatabase = (updatedEntry) => {
    setData(data.map(entry => entry.id === updatedEntry.id ? updatedEntry : entry));
  };

  const searchDatabase = (query) => {
    const results = data.filter(entry => entry.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Search Platform</h1>
      <AddPanel addToDatabase={addToDatabase} />
      <UpdatePanel updateDatabase={updateDatabase} data={data} />
      <SearchPanel searchDatabase={searchDatabase} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
