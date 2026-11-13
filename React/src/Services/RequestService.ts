import type {Request} from "../Interfaces/Request.ts";
import type {FiltersRequest} from "../Interfaces/FiltersRequest.ts";
import {api_url} from "../api.ts";
import type {Summary} from "../Interfaces/Summary.ts";
import type {NewRequest} from "../Interfaces/NewRequest.ts";

export async function getRequests(filters: FiltersRequest) : Promise<Request[]>{
    var parameters = new URLSearchParams();

    if(filters.client_id != 0)
        parameters.append('client_id', String(filters.client_id));

    if(filters.status != '0')
        parameters.append('status', filters.status);

    if(filters.priority != '0')
        parameters.append('priority', filters.priority);

    if(filters.q.trim() != '')
        parameters.append('q', filters.q.trim());

    var query = parameters.toString();
    var response = await fetch(`${api_url}/requests${ query ? `?${query}` : '' }`, {
        headers: {Accept:'application/json'}
    });

    if(!response.ok)
        throw new Error(`HTTP ${response.status}`);

    let requests: Request[] = await response.json();

    return requests;
}

export async function getSummary(client_id: number) : Promise<Summary>{
    var parameter = new URLSearchParams();

    if(client_id != 0)
        parameter.append('client_id', String(client_id));

    var query = parameter.toString();
    var response = await fetch(`${api_url}/requests/summary${ query ? `?${query}` : '' }`, {
        headers: {Accept:'application/json'}
    });

    if(!response.ok)
        throw new Error(`HTTP ${response.status}`);

    return response.json();
}

export async function createRequest(data: NewRequest) {
    const response = await fetch(`${api_url}/requests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(data),
    });

    const body = await response.json();
    return { status: response.status, body };
}

