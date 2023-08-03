import React, { useState, useEffect } from 'react'
import { getAllPokemonList } from './Pokeman';
import Button from './Common/Button';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPokemonList()
      setPokemonData(data?.results);
    }
    fetchData();
  }, []);


  return (
    <div className='App'>
      <h2 style={{ textAlign: 'center' }}>Pokemon App
        <Button style={{ textAlign: "center" }}>Pokeman</Button></h2>

      <div style={{ marginTop: '40px', justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', width: '90%', margin: 'auto' }}>

        {pokemonData?.map((poke, i) => {
          return (

            <div style={{ width: '400px', height: '330px', border: '2px solid #000000', margin: '30px 10px' }} key={i}>

              <div style={{ padding: '5px 10px' }}>
                <p style={{ fontWeight: 'bold', textTransform: 'capitalize', }}>{poke.name}</p>
              </div>
              <img src={`https://img.pokemondb.net/artwork/large/${ poke.name }.jpg`} alt="pokemon" style={{ height: '300px', width: '300px' }} />
            </div>
          )
        })}


      </div>
    </div >
  )
}

export default App