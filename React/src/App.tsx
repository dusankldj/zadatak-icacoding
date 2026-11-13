import Filters from "./View/Components/Filters.tsx";
import RequestsList from "./View/Components/RequestsList.tsx";
import {useEffect, useState} from "react";
import type {Client} from "./Interfaces/Client.ts";
import type {Request} from "./Interfaces/Request.ts";
import {emptyFilters, type FiltersRequest} from "./Interfaces/FiltersRequest.ts";
import {getAllClients} from "./Services/ClientService.ts";
import {getRequests, getSummary} from "./Services/RequestService.ts";
import {emptySummary, type Summary} from "./Interfaces/Summary.ts";
import SummaryComponent from "./View/Components/Summary.tsx";
import Form from "./View/Components/Form.tsx";

function App() {
    var [clients, setClients] = useState<Client[]>([]);
    var [filters, setFilters] = useState<FiltersRequest>(emptyFilters);
    var [requests, setRequests] = useState<Request[]>([]);
    var [summary, setSummary] = useState<Summary>(emptySummary);
    var [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        getAllClients()
            .then(data => setClients(data))
            .catch(err => console.error('Error during clients fetch: ', err));
    }, []);


    useEffect(() => {
        getRequests(filters)
            .then(data => setRequests(data))
            .catch(err => console.error('Error during requests fetch: ', err));
    }, [filters, reloadKey]);

    useEffect(() => {
        getSummary(filters.client_id)
            .then(data => setSummary(data))
            .catch(err => console.error('Error during summary fetch: ', err));
    }, [filters.client_id, reloadKey]);

    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <h1 className="text-center text-2xl font-semibold italic text-slate-800">
                Zadatak&nbsp;-&nbsp;IcaCoding
            </h1>

            <SummaryComponent summary={summary} />
            <Filters clients={clients} filters={filters} onChange={setFilters} />
            <RequestsList data={requests} />
            <Form clients={clients} onCreated={() => setReloadKey(x => x+1)}/>
        </main>
    );
}

export default App;