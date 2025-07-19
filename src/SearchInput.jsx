import React from 'react';

function SearchInput({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Busca un Pokémon..."
      value={searchTerm}
      onChange={e => onSearchChange(e.target.value.toLowerCase())}
      style={{ padding: '0.5em', fontSize: '1.2em', width: '300px' }}
    />
  );
}

export default SearchInput;
