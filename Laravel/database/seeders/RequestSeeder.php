<?php

namespace Database\Seeders;

use App\Models\RequestModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RequestModel::insert([
            [
                'title' => 'Korisnik ne može da promeni lozinku',
                'client_id' => 1,
                'description' => 'Prilikom pokušaja promene lozinke, sistem prikazuje poruku o uspešnoj promeni, ali se korisnik i dalje može prijaviti koristeći staru lozinku.',
                'status' => 'open',
                'priority' => 'low',
                'due_date' => null,
                'resolution' => 'Fixed – problem je nastao zbog nepravilnog ažuriranja hashovane lozinke u bazi podataka',
                'created_at' => now(),
            ],
            [
                'title' => 'Implementacija sistema za notifikacije',
                'client_id' => 1,
                'description' => 'Potrebno je omogućiti slanje notifikacija korisnicima prilikom važnih događaja, kao što su nova poruka, promena statusa porudžbine ili odgovor na komentar',
                'status' => 'in_progress',
                'priority' => 'medium',
                'due_date' => '2026-11-20',
                'resolution' => null,
                'created_at' => now(),
            ],
            [
                'title' => 'Optimizacija učitavanja početne stranice',
                'client_id' => 2,
                'description' => 'Početna stranica se učitava presporo, naročito kada postoji veliki broj objava. Potrebno je optimizovati učitavanje podataka i smanjiti broj nepotrebnih API poziva',
                'status' => 'done',
                'priority' => 'low',
                'due_date' => '2026-11-08',
                'resolution' => 'Implementirana je paginacija i optimizovani su upiti prema bazi podataka',
                'created_at' => now(),
            ],
            [
                'title' => 'Dodavanje mogućnosti prijave neprimerenog sadržaja',
                'client_id' => 2,
                'description' => null,
                'status' => 'open',
                'priority' => 'high',
                'due_date' => '2026-11-15',
                'resolution' => null,
                'created_at' => now(),
            ],
            [
                'title' => 'Filter proizvoda ne prikazuje ispravne rezultate',
                'client_id' => 2,
                'description' => 'Prilikom kombinovanja filtera za cenu i kategoriju, sistem prikazuje proizvode koji ne zadovoljavaju sve izabrane kriterijume.',
                'status' => 'in_progress',
                'priority' => 'medium',
                'due_date' => '2026-12-01',
                'resolution' => 'Fixed – ispravljena je logika kombinovanja filtera na backend strani',
                'created_at' => now(),
            ],
            [
                'title' => 'Omogućiti registraciju putem Google naloga',
                'client_id' => 3,
                'description' => null,
                'status' => 'open',
                'priority' => 'high',
                'due_date' => '2026-11-27',
                'resolution' => null,
                'created_at' => now(),
            ],
            [
                'title' => 'Redizajn korisničkog profila',
                'client_id' => 3,
                'description' => "Trenutni izgled korisničkog profila nije dovoljno pregledan na mobilnim uređajima. Potrebno je unaprediti raspored informacija i prilagoditi prikaz manjim ekranima.",
                'status' => 'done',
                'priority' => 'medium',
                'due_date' => '2026-11-10',
                'resolution' => "Reseno u najkracem roku, sada je korisnicki profil pregledan i ne zahteva dalje izmene.",
                'created_at' => now(),
            ],
            [
                'title' => 'Implementacija automatskog backup-a baze podataka',
                'client_id' => 3,
                'description' => null,
                'status' => 'in_progress',
                'priority' => 'high',
                'due_date' => '2026-11-15',
                'resolution' => null,
                'created_at' => now(),
            ]
        ]);
    }
}
