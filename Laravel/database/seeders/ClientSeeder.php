<?php

namespace Database\Seeders;

use App\Models\ClientModel;
use App\Models\RequestModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ClientModel::insert([
            ['name' => 'Dušan Đokić', 'email' => 'djokicdusan033333@gmail.com', 'created_at' => now()],
            ['name' => 'Ivica Sekulović', 'email' => 'ivica.sekuliccc7@gmail.com', 'created_at' => now()],
            ['name' => 'Uroš Dimitrijević', 'email' => 'urossd01@gmail.com', 'created_at' => now()]
        ]);
    }
}
