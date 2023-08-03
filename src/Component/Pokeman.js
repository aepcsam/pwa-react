import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getAllPokemonList = async () => {
    const { data } = await axios.get(url);
    return data;
};


