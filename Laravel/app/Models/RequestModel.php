<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RequestModel extends Model
{
    protected $table = 'requests';

    protected $fillable=[
        'title',
        'client_id',
        'description',
        'status',
        'priority',
        'due_date',
        'resolution'
    ];

    protected $hidden=['created_at', 'updated_at'];

    public function client():BelongsTo
    {
        return $this->belongsTo(ClientModel::class, 'client_id', 'id');
    }
}
