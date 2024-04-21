import RandomIndex from "./RandomIndex"
import RandomPokemon from "./RandomPokemon"

export default function CardLoader() {
    
    return(
        <main id="cards">
            {
                RandomPokemon(RandomIndex(1, 500))
            }
        </main>
    )
}