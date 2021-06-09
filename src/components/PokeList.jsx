import React, { useEffect, useState } from "react"
import './PokeList.css'

const PokeList = () => {
    
    const [pokemons, setPokemon ] = useState([])

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6&offset=500')
            const jsonResponse = await response.json()
            setPokemon(jsonResponse.results)
        }

        getPokemon()
    }, [])

    return (
        <div className="card-group">
            
            <div className="container">
                <h2 className="my-3">Últimos pokemons</h2>
                <div className="row">
                    {
                        pokemons.map((pokemon) => {
                            // Pegando o ID do Pokémon para usá-lo na requisição da imagem na linha 32
                            const pokeID = pokemon.url.slice(34, 37)

                            return(
                                <div className="mb-4 col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <img src={"https://pokeres.bastionbot.org/images/pokemon/"+pokeID+".png"} className="card-pokemon p-1" alt={pokemon.name} />
                                        <div className="card-body bg-white">
                                            <h5 className="card-title">{pokemon.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PokeList