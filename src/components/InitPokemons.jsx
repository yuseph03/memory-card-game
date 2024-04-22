import PropTypes from 'prop-types'; 
import RandomPokemon from "./RandomPokemon"
import RandomIndex from "./RandomIndex"

export default function InitPokemons({ num }) {
    let pokemons = [];

    for (let i = 1; i < num; i++) {
        pokemons.push(<RandomPokemon id={RandomIndex(500)}/>)
    }

    return (
        <>
            {pokemons}
        </>
    )
}

InitPokemons.propTypes = {
    num: PropTypes.number.isRequired 
}