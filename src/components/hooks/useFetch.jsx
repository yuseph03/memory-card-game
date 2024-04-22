import { useEffect, useState } from "react";

export function useFetch(id) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, []);

    return {
        loading,
        data, 
        error
    };
}