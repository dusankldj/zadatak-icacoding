<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class NewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:3', 'max:120'],
            'client_id' => ['required', 'integer', 'exists:clients,id'],
            'description' => ['nullable', 'string'],
            'status' => ['required', Rule::in(['open', 'in_progress', 'done'])],
            'priority' => ['required', Rule::in(['low', 'medium', 'high'])],
            'due_date' => ['nullable', 'date', 'required_if:priority,high'],
            'resolution' => ['nullable', 'string', 'min:10', 'required_if:status,done'],
        ];
    }

    public function messages(): array{
        return [
          'title.required' => 'Naslov je obavezan',
          'title.min' => 'Naslov mora imati makar 3 karaktera.',
          'title.max' => 'Naslov mora imati najvise 120 karaktera.',

          'client_id.required' => 'Klijent je obavezan.',
          'client_id.exists' => 'Klijent ne postoji.',

          'status.required' => 'Status je obavezan.',
          'status.in' => 'Status nije u dozvoljenom opsegu.',

          'priority.required' => 'Prioritet je obavezan.',
          'priority.in' => 'Prioritet nije u dozvoljenom opsegu.',

          'due_date.required_if' => 'Rok mora postojati ako je prioritet visok.',

          'resolution.min' => 'Rešenje mora biti makar 10 karaktera dugacko.',
          'resolution.required_if' => 'Rešenje mora postojati ako je zehtev statusa done.'
        ];
    }
}
