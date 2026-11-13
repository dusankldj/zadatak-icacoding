import { type FormEvent, useState } from "react";
import type { Client } from "../../Interfaces/Client.ts";
import type { NewRequest } from "../../Interfaces/NewRequest.ts";
import { statuses, priorities } from "./Filters.tsx";
import { createRequest } from "../../Services/RequestService.ts";

interface RequestFormProps {
    clients: Client[];
    onCreated: () => void;
}

const emptyForm: NewRequest = {
    title: '',
    client_id: 0,
    description: null,
    status: 'open',
    priority: 'low',
    due_date: null,
    resolution: null,
};

type FormErrors = Partial<Record<keyof NewRequest, string[]>>;

const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 " +
    "placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";

const labelClass = "text-sm font-medium text-slate-600";
const errorClass = "text-xs italic text-red-600";

function Form({ clients, onCreated }: RequestFormProps) {
    var [form, setForm] = useState<NewRequest>(emptyForm);

    var [errors, setErrors] = useState<FormErrors>({});

    function update(field: keyof NewRequest, value: string | number | null) {
        setForm({...form, [field]: value});
    }

    async function submitForm(e: FormEvent) {
        e.preventDefault();
        setErrors({});

        try {
            var result = await createRequest(form);

            if(result.status == 201){
                setForm(emptyForm);
                onCreated();

                return;
            }

            if(result.status == 422){
                setErrors(result.body.errors);

                return;
            }

        } catch (err) {
            console.error('Greska mreze:', err);
        }
    }

    return (
        <section className="mx-auto mt-6 w-[85%] rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-5 text-lg font-semibold text-slate-800">Novi zahtev</h2>

            <form onSubmit={submitForm} className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Naslov */}
                <label className="flex flex-col gap-1 md:col-span-2">
                    <span className={labelClass}>
                        Naslov <span className="text-red-500">*</span>
                    </span>
                    <input
                        type="text"
                        value={form.title}
                        onChange={e => update('title', e.target.value)}
                        placeholder="Kratak opis zahteva (3–120 karaktera)"
                        className={inputClass}
                    />

                    {errors.title && <p className={errorClass}>{errors.title[0]}</p>}

                </label>

                {/* Opis */}
                <label className="flex flex-col gap-1 md:col-span-2">
                    <span className={labelClass}>Opis</span>
                    <textarea
                        rows={3}
                        value={form.description ?? ''}
                        onChange={e => update('description', e.target.value || null)}
                        placeholder="Opis zahteva."
                        className={`${inputClass} resize-none`}
                    />

                    {errors.description && <p className={errorClass}>{errors.description[0]}</p>}

                </label>

                {/* Klijent */}
                <label className="flex flex-col gap-1">
                    <span className={labelClass}>
                        Klijent <span className="text-red-500">*</span>
                    </span>
                    <select
                        value={form.client_id}
                        onChange={e => update('client_id', Number(e.target.value))}
                        className={inputClass}
                    >
                        <option value={0}>Izaberite klijenta</option>
                        {clients.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>

                    {errors.client_id && <p className={errorClass}>{errors.client_id[0]}</p>}

                </label>

                {/* Rok */}
                <label className="flex flex-col gap-1">
                    <span className={labelClass}>Rok</span>
                    <input
                        type="date"
                        value={form.due_date ?? ''}
                        onChange={e => update('due_date', e.target.value || null)}
                        className={inputClass}
                    />

                    {errors.due_date && <p className={errorClass}>{errors.due_date[0]}</p>}

                </label>

                {/* Status */}
                <label className="flex flex-col gap-1">
                    <span className={labelClass}>
                        Status <span className="text-red-500">*</span>
                    </span>
                    <select
                        value={form.status}
                        onChange={e => update('status', e.target.value)}
                        className={inputClass}
                    >
                        {statuses.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                    </select>

                    {errors.status && <p className={errorClass}>{errors.status[0]}</p>}

                </label>

                {/* Prioritet */}
                <label className="flex flex-col gap-1">
                    <span className={labelClass}>
                        Prioritet <span className="text-red-500">*</span>
                    </span>
                    <select
                        value={form.priority}
                        onChange={e => update('priority', e.target.value)}
                        className={inputClass}
                    >
                        {priorities.map(p => (
                            <option key={p.value} value={p.value}>{p.label}</option>
                        ))}
                    </select>

                    {errors.priority && <p className={errorClass}>{errors.priority[0]}</p>}

                </label>

                {/* Rešenje */}
                <label className="flex flex-col gap-1 md:col-span-2">
                    <span className={labelClass}>Rešenje</span>
                    <textarea
                        rows={3}
                        value={form.resolution ?? ''}
                        onChange={e => update('resolution', e.target.value || null)}
                        placeholder="Obavezno ako je status Done (najmanje 10 karaktera)"
                        className={`${inputClass} resize-none`}
                    />

                    {errors.resolution && <p className={errorClass}>{errors.resolution[0]}</p>}

                </label>

                {/* Dugme */}
                <div className="flex justify-end md:col-span-2">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm
                                   transition-colors hover:bg-indigo-700
                                   focus:outline-none focus:ring-2 focus:ring-indigo-300
                                   disabled:cursor-not-allowed disabled:opacity-60">
                        Sačuvaj zahtev
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Form;