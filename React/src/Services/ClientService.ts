import type {Client} from "../Interfaces/Client.ts";
import {api_url} from "../api.ts";

export async function getAllClients() :Promise<Client[]>{
    let response: Response = await fetch(`${api_url}/clients`);

    if(!response.ok)
        throw new Error("Greska prilikom povlacenja klijenata sa back-enda.");

    let clients: Client[] = await response.json();

    return await clients;
}

