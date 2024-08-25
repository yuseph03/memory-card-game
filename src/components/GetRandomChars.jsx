import { useState, useEffect } from 'react';

const useGetRandomChars = (search = 'Assassination Classroom', page = 1, perPage = 10) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = `query ($search: String, $page: Int, $perPage: Int) {
        Media(search: $search, type: ANIME) {
          characters (page: $page, perPage: $perPage) {
            nodes {
              id
              name {
                first
                last
              }
              image {
                large
              }
            }
          }
        }
      }`;

      const variables = {
        search,
        page,
        perPage
      };

      try {
        const response = await fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ query, variables })
        });
        const data = await handleResponse(response);
        const charactersData = handleData(data);
        setCharacters(charactersData);
      } catch (error) {
        handleError(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [search, page, perPage]);

  return { characters, loading, error };
};

function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

function handleData(data) {
  return data.data.Media.characters.nodes.map(character => character);
}

function handleError(error) {
  console.error('Error, check console', error);
}

export default useGetRandomChars;
