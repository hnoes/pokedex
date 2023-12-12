import React from 'react';
import Pokecard from './pokecard';

const Pokedex = ({ pokemon, totalExperience }) => (
    <div className='pokedex'>
        {pokemon.map(pokemonData => (
            <Pokecard key={pokemonData.id} name={pokemonData.name} />
        ))}
        <p>Total Experience: {totalExperience}</p>
    </div>
);

