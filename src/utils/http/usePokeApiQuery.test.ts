import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import usePokeApiQuery from './usePokeApiQuery';

describe('usePokeApiQuery()', () => {
    test('Sets data on successful API call', async () => {
        const { result } = renderHook(() => usePokeApiQuery('/pokemon/pikachu'));
        // @ts-expect-error
        await waitFor(() => expect(result.current.data?.name).toBe('pikachu'));
    });

    test('Sets loading to false after API call', async () => {
        const { result } = renderHook(() => usePokeApiQuery('/pokemon/pikachu'));
        await waitFor(() => expect(result.current.loading).toBe(false));
    });

    test('Sets loading to true during API call', async () => {
        const { result } = renderHook(() => usePokeApiQuery('/pokemon/pikachu'));
        expect(result.current.loading).toBe(true);
    });

    test('Sets error on failed API call', async () => {
        const { result } = renderHook(() => usePokeApiQuery('/pokemon/gargamel'));
        await waitFor(() => expect(result.current.hasError).toBe(true));
        await waitFor(() => expect(result.current.status).toBe(404));
    });
});
