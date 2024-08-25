import React from 'react';
import CardList from './CardList';
import useGetRandomChars from './GetRandomChars';

const InitChars = () => {
    const { characters: chars, loading, error } = useGetRandomChars('Assassination Classroom', 1, 10);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <CardList items={chars} />;
};

export default InitChars;
