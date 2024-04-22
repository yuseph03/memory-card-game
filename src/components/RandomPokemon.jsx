import Card from "./Card";
import { useFetch } from "./hooks/useFetch";
import PropTypes from 'prop-types';

export default function RandomPokemon({ id }) {
    const {loading, data, error} = useFetch(id)

    if (loading) return <h1>Loading...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return <Card
            name={data.name}
            key={data.id}
            sprite={data.sprites.other.dream_world.front_default}
        />;
}

RandomPokemon.propTypes = {
    id: PropTypes.number
};