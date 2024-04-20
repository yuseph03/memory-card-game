export default function RandomPokemon(id) {
    let pokemon = {};

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(function (response) {
            pokemon.name = response.name;
            pokemon.sprite = response.sprites.other.dream_world.front_default;
        })
        .catch(function handleError(error) {
            console.log("Error" + error);
        });

    return pokemon;
}