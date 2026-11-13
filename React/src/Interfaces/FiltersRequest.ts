export interface FiltersRequest{
    client_id:number,
    status:string,
    priority:string,
    q:string,
}

export const emptyFilters: FiltersRequest={
    client_id: 0,
    status: '0',
    priority: '0',
    q: '',
}