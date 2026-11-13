<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ClientModel extends Model
{
    protected $table = 'clients';

    protected $fillable=['name', 'email'];

    protected $hidden=['created_at', 'updated_at', 'deleted_at'];

    public function requests():HasMany{
        return $this->hasMany(RequestModel::class, 'client_id', 'id');
    }
}
