import React, { useState } from 'react';
import styles from './UpdatePanel.module.css';

const UpdatePanel = ({ updateDatabase, data }) => {
  const [selectedId, setSelectedId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedId) return;

    const updatedEntry = { id: Number(selectedId), name };
    updateDatabase(updatedEntry);
    setSelectedId('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Update Database</h2>
      <select 
        value={selectedId} 
        onChange={(e) => setSelectedId(e.target.value)} 
        className={styles.select} 
        required
      >
        <option value="" disabled>Select ID</option>
        {data.map(entry => (
          <option key={entry.id} value={entry.id}>{entry.id}</option>
        ))}
      </select>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
        className={styles.input} 
        required 
      />
      <button type="submit" className={styles.button}>Update</button>
    </form>
  );
};

export default UpdatePanel;
