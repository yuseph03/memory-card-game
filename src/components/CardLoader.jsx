import Card from "./Card"
import RandomIndex from "./RandomIndex"
import RandomPokemon from "./RandomPokemon"
import { useState } from "react"

export default function CardLoader() {
    const [pokemons, setPokemons] = useState([RandomPokemon(12)])
    
    return(
        <main id="cards">
            {pokemons.map((pokemon) => 
                <Card key={pokemon.id} sprite={pokemon.sprite} name={pokemon.name}/>
            )}
        </main>
    )
}