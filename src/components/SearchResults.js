import React from 'react';
import styles from './SearchResults.module.css';

const SearchResults = ({ results }) => {
  return (
    <div className={styles.results}>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <ul className={styles.list}>
          {results.map(result => (
            <li key={result.id} className={styles.listItem}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p className={styles.noResults}>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
