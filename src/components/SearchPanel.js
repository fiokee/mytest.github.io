import React, { useState } from 'react';
import styles from './SearchPanel.module.css';

const SearchPanel = ({ searchDatabase }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchDatabase(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <h2>Search Database</h2>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..." 
        className={styles.input} 
        required 
      />
      <button type="submit" className={styles.button}>Search</button>
    </form>
  );
};

export default SearchPanel;
