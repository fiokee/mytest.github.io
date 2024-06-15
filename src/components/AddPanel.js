import React, { useState } from 'react';
import styles from './AddPanel.module.css';

const AddPanel = ({ addToDatabase }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { id: Date.now(), name };
    addToDatabase(newEntry);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add to Database</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
        className={styles.input} 
        required 
      />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
};

export default AddPanel;
