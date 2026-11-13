import type { Summary } from "../../Interfaces/Summary.ts";

interface SummaryProps {
    summary: Summary;
}

function SummaryComponent({ summary }: SummaryProps) {
    const cards = [
        { label: 'Open',        value: summary.open,        style: 'border-blue-500 text-blue-700' },
        { label: 'In progress', value: summary.in_progress, style: 'border-amber-500 text-amber-700' },
        { label: 'Done',        value: summary.done,        style: 'border-emerald-500 text-emerald-700' },
    ];

    return (
        <section className="mx-auto mt-6 grid w-[85%] grid-cols-3 gap-4">
            {cards.map(c => (
                <div key={c.label} className={`rounded-lg border-l-4 bg-white p-4 shadow-sm ${c.style}`}>
                    <p className="text-sm font-medium text-slate-500">{c.label}</p>
                    <p className="mt-1 text-3xl font-bold">{c.value}</p>
                </div>
            ))}
        </section>
    );
}


export default  SummaryComponent;