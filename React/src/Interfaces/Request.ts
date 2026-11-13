import type {Client} from "./Client.ts";

/* Mogu cak i enum tipovi da se definisu na nivou front-a kao type, ostavio sam ih da budu string */
export interface Request{
    id:number,
    client_id:number,
    title:string,
    description:string | null;
    status:string,
    priority:string,
    due_date:string | null,
    resolution:string | null,
    client:Client,
}