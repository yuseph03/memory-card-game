import Card from "./Card"
import CardFetch from "./CardFetch"

export default function CardLoader() {
    let pokemons = [ 
        {id: 1, name: 'pikachu', pic: ''},
        {id: 2, name: 'ditto', pic: ''}
    ]

    CardFetch(pokemons)
    
    return(
        <main id="cards">
            {pokemons.map(pokemon => 
                <Card key={pokemon.id} pic={pokemon.pic} name={pokemon.name}/>
            )}
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt=""/>

        </main>
    )
}