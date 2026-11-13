<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewRequest;
use App\Http\Requests\UpdateRequest;
use App\Models\RequestModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = RequestModel::query()
                    ->with('client:id,name')
                    ->orderByDesc('created_at');

        if($request->filled('client_id'))
            $query->where('client_id', $request->client_id);

        if($request->filled('status'))
            $query->where('status', $request->status);

        if($request->filled('priority'))
            $query->where('priority', $request->priority);

        if($request->filled('q'))
            $query->where('title', 'ILIKE', '%'.$request->q.'%');

        return $query->get();
    }

    public function summary(Request $request){
        $query = RequestModel::query();

        $client_id = $request->integer('client_id');

        if($client_id > 0)
            $query->where('client_id', $client_id);

        $counts = $query->select('status', DB::raw('count(*) as total'))
                        ->groupBy('status')
                        ->pluck('total', 'status');

        return response()->json([
            'open' => (int) ($counts['open'] ?? 0),
            'in_progress' => (int) ($counts['in_progress'] ?? 0),
            'done' => (int) ($counts['done'] ?? 0),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NewRequest $request) : JsonResponse
    {
        $newRequest = RequestModel::create($request->validated());

        $newRequest->load('client:id,name');

        return response()->json($newRequest, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, RequestModel $requestModel): JsonResponse
    {
        $requestModel->update($request->validated());

        $requestModel->load('client:id,name');

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
