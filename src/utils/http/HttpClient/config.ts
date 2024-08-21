export const defaultClientHeaders: HeadersInit = {
    'Content-Type': 'application/json',
};

export type BaseUrl = `http://${string}` | `https://${string}`;
export type Endpoint = `/${string}`;
