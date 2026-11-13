export interface NewRequest{
    title:string,
    description:string|null,
    client_id:number,
    due_date:string|null,
    status:string,
    priority:string,
    resolution:string|null,
}