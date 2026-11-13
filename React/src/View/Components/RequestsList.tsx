import type { Request } from "../../Interfaces/Request.ts";

interface RequestsFromParent {
    data: Request[];
}


const statusStyles: Record<string, string> = {
    open:        'bg-blue-100 text-blue-800 ring-blue-200',
    in_progress: 'bg-amber-100 text-amber-800 ring-amber-200',
    done:        'bg-emerald-100 text-emerald-800 ring-emerald-200',
};

const statusLabels: Record<string, string> = {
    open: 'Open',
    in_progress: 'In progress',
    done: 'Done',
};

const priorityStyles: Record<string, string> = {
    low:    'bg-slate-100 text-slate-700 ring-slate-200',
    medium: 'bg-orange-100 text-orange-800 ring-orange-200',
    high:   'bg-red-100 text-red-800 ring-red-200',
};

// "2026-11-20" → "20.11.2026."
function formatDate(date: string | null): string {
    if (!date) return '—';
    const [y, m, d] = date.split('-');
    return `${d}.${m}.${y}.`;
}

function RequestList({ data }: RequestsFromParent) {
    if (data.length === 0) {
        return (
            <div className="mx-auto mt-6 w-[85%] rounded-lg bg-white p-10 text-center text-slate-500 shadow-sm">
                Nema zahteva za prikaz.
            </div>
        );
    }

    return (
        <div className="mx-auto mt-6 w-[85%] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                    <th className="px-5 py-3 font-semibold">Naslov</th>
                    <th className="px-5 py-3 font-semibold">Klijent</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                    <th className="px-5 py-3 font-semibold">Prioritet</th>
                    <th className="px-5 py-3 font-semibold">Rok</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                {data.map(d => (
                    <tr key={d.id} className="transition-colors hover:bg-slate-50">
                        <td className="px-5 py-4">
                            <p className="font-medium text-slate-800">{d.title}</p>
                            {d.description && (
                                <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                                    {d.description}
                                </p>
                            )}
                        </td>

                        <td className="px-5 py-4 text-slate-700">{d.client.name}</td>

                        <td className="px-5 py-4">
                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[d.status]}`}>
                                    {statusLabels[d.status]}
                                </span>
                        </td>

                        <td className="px-5 py-4">
                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${priorityStyles[d.priority]}`}>
                                    {d.priority}
                                </span>
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap text-slate-600">
                            {formatDate(d.due_date)}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default RequestList;