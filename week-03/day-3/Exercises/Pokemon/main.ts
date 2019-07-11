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

let isEffectiveAgainst(pokemon: Pokemon)
isEffectiveAgainst

let whoToChoose: string = '';
function whichToChoose(): void {
    for (let i: number = 0; i <= initializePokemon.length; i++) {
        initializePokemon[i].isEffectiveAgainst(wildPokemon);
    }
}


//console.log('I choose you, ',whichToChoose());

/* for (let i: number = 0; i <= initializePokemon().length; i++) {
if (initializePokemon()[i] == wildPokemon[2]){
console.log('I choose you bro')
} else {
console.log('next');
}
} */