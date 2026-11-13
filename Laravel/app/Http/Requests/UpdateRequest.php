<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
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
            'status' => ['required', Rule::in(['open', 'in_progress', 'done'])],
            'resolution' => ['nullable', 'string', 'min:10', 'required_if:status,done']
        ];
    }

    public function messages(): array{
        return [
            'status.required' => 'Status je obavezan.',
            'status.in' => 'Status nije u dozvoljenom opsegu.',

            'resolution.required_if' => 'Rešenje je obavezno kada je status done.',
            'resolution.min' => 'Rešenje mora imati najmanje 10 karaktera.',
        ];
    }
}
