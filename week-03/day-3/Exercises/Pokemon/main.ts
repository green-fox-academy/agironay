'use strict';

import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

//console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Bulbasaur', 'leaf', 'water'),
        new Pokemon('Pikachu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Bulbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

for (let i: number = 0; i <= pokemonOfAsh.length; i++) {
    if (initializePokemon()[i].isEffectiveAgainst(wildPokemon)) {
        console.log('I choose you ',initializePokemon()[i].name);
    }
}