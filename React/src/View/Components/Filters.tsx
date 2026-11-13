import type {Client} from "../../Interfaces/Client.ts";
import type {FiltersRequest} from "../../Interfaces/FiltersRequest.ts";

interface FilterProps {
    clients: Client[];
    filters: FiltersRequest;
    onChange: (filters: FiltersRequest) => void;
}

export const statuses: {value: string; label: string}[] = [
    {value: 'open', label: 'Open'},
    {value: 'in_progress', label: 'In progress'},
    {value: 'done', label: 'Done'}
];

export const priorities: {value: string; label: string}[] = [
    {value: 'low', label: 'Low'},
    {value: 'medium', label: 'Medium'},
    {value: 'high', label: 'High'}
];

function Filters({clients, filters, onChange}: FilterProps) {
    return (
        <section className="mx-auto w-[85%] rounded-lg bg-white p-4 mt-5">
            <div className="flex items-end justify-center gap-4">

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-600">Klijent</span>
                    <select
                        value={filters.client_id}
                        onChange={e => onChange({...filters, client_id: Number(e.target.value)})}
                        className="w-56 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm
                               text-slate-800 focus:border-indigo-500 focus:outline-none
                               focus:ring-2 focus:ring-indigo-200">
                        <option value={0}>Sve</option>
                        {clients.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-600">Status</span>
                    <select
                        value={filters.status}
                        onChange={e => onChange({...filters, status: e.target.value})}
                        className="w-44 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm
                               text-slate-800 focus:border-indigo-500 focus:outline-none
                               focus:ring-2 focus:ring-indigo-200">
                        <option value="0">Sve</option>
                        {statuses.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-600">Prioritet</span>
                    <select
                        value={filters.priority}
                        onChange={e => onChange({...filters, priority: e.target.value})}
                        className="w-44 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm
                               text-slate-800 focus:border-indigo-500 focus:outline-none
                               focus:ring-2 focus:ring-indigo-200">
                        <option value="0">Sve</option>
                        {priorities.map(p => (
                            <option key={p.value} value={p.value}>{p.label}</option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-600">Pretraga</span>
                    <input
                        type="search"
                        value={filters.q}
                        onChange={e => onChange({...filters, q: e.target.value})}
                        placeholder="Pretraži po naslovu..."
                        className="w-72 rounded-md border border-slate-300 px-3 py-2 text-sm
                               text-slate-800 placeholder:text-slate-400 focus:border-indigo-500
                               focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                </label>

            </div>
        </section>
    );
}

export default Filters;