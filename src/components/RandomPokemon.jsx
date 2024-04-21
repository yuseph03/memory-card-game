import { useFetch } from "./hooks/useFetch";
import Card from "./Card";

export default function RandomPokemon(id) {
    const {loading, data, error} = useFetch(id)
    
    if (loading) return <h1>Loading...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return (
        <Card 
        key={data.id} 
        sprite={data.sprites.other.dream_world.front_default} 
        name={data.name}
        />
    )
}