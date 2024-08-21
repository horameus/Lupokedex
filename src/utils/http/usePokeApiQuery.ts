import React from 'react';
import HttpClient from './HttpClient/HttpClient';
import { Endpoint } from './HttpClient/config';

export default function usePokeApiQuery<T>(query: Endpoint) {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | null>(null);
    const [status, setStatus] = React.useState<number | null>(null);

    const client = new HttpClient('https://pokeapi.co/api/v2/');

    const fetch = async (url: string) => {
        setLoading(true);

        const result = await client.get<T>(query);
        setStatus(result.status);
        setLoading(false);

        result.hasError ? setError(result.error as Error) : setData(result.data);
        return;
    };

    React.useEffect(() => {
        fetch(query);
    }, [query]);

    return {
        data,
        loading,
        error,
        hasError: error !== null,
        status,
    };
}
