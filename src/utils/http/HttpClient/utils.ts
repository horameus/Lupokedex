import { BaseUrl, Endpoint } from './config';

export interface HttpClientResult<T> {
    status: number;
    statusText: string;
    hasError: boolean;
    error: Error | null;
    data: T | null;
}

export const handleUrl = (baseUrl: BaseUrl) => (baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl);

export const handleEndpoint = (endpoint: Endpoint) => (endpoint.startsWith('/') ? endpoint : `/${endpoint}`);

export const tryParseResponse = async <T>(response: Response) => {
    const result: HttpClientResult<T> = {
        status: response.status,
        statusText: response.statusText,
        hasError: !response.ok,
        error: null as Error | null,
        data: null as T | null,
    };

    try {
        result.data = await response.json();
    } catch (error) {
        result.error = error as Error;
    } finally {
        return result;
    }
};
