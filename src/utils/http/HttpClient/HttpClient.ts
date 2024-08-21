import { type BaseUrl, type Endpoint, defaultClientHeaders } from './config';
import { handleEndpoint, handleUrl, HttpClientResult, tryParseResponse } from './utils';

export default class HttpClient {
    private baseUrl: string;
    private headers: HeadersInit;

    constructor(baseUrl: BaseUrl, headers: HeadersInit = {}) {
        this.baseUrl = handleUrl(baseUrl);
        this.headers = { ...defaultClientHeaders, ...headers };
    }

    public async get<T>(url: Endpoint): Promise<HttpClientResult<T>> {
        const response = await fetch(`${this.baseUrl}${handleEndpoint(url)}`, {
            method: 'GET',
            headers: this.headers,
        });
        return await tryParseResponse(response);
    }
}
