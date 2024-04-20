export default function CardFetch(pokemons) {
    pokemons.forEach(pokemon => 
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name, {mode: 'cors'})
            .then((response) => response.json())
            .then((response) => {
                fetch(response.forms[0].url)
                .then((response) => response.json())
                .then((response) => pokemon.pic = response.sprites.front_default)
            })
            .catch(function(err) {
                console.log('Fetch failed: ' + err)
            }))
    return pokemons;
}