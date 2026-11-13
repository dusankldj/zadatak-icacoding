<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        /* Raw SQL pravljenje enum-a */
        DB::statement("CREATE TYPE request_status AS ENUM('open', 'in_progress', 'done')");
        DB::statement("CREATE TYPE request_priority AS ENUM('low', 'medium', 'high')");

        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->string('title', 120);
            $table->foreignId('client_id')->constrained('clients')->restrictOnDelete();
            $table->text('description')->nullable(true);
            $table->rawColumn('status', 'request_status')->default('open');
            $table->rawColumn('priority', 'request_priority')->default('low');

            /* Postavljanje kompozitnog indexa */
            $table->index(['client_id', 'status']);

            $table->date('due_date')->nullable(true);
            $table->text('resolution')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests');
        DB::statement("DROP TYPE IF EXISTS request_status");
        DB::statement("DROP TYPE IF EXISTS request_priority");
    }
};
