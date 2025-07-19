import './App.css';  
import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import PokemonCard from './PokemonCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      setPokemon(null);
      setError('');
      return;
    }

    setLoading(true);
    setError('');

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Pokémon no encontrado');
        }
        return res.json();
      })
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setPokemon(null);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Buscador de Pokémon</h1>
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;
