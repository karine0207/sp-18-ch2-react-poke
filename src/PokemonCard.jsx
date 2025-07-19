import React from 'react';

function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div style={{ marginTop: '1em', border: '1px solid #ccc', padding: '1em', borderRadius: '8px' }}>
      <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

export default PokemonCard;
