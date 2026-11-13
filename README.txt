Baza kreirana code-first pristupom sa test podacima unešenim putem seeder-a.
Izabrao sam da mi priority i status kolone budu enum-i kreirani RAW SQL-om.

Komdanda za pokretanje migracija i seeder-a: php artisan migrate --seed

PostgreSQL sa projektom sam povezao tako što sam otvorio php.ini i odkomentarisao ekstenzije:
-pdo_pgsql
-pgsql

Radio sam u okruženju PhpStorm, s desne strane + -> new -> Data Source -> PostgreSQL -> unos kredencijala
Zadatak sam radio duže od 4h(oko nekih 7h), trebalo bi je da se malo upoznam sa PostgreSQL-om, podsetim se 
sintakse Laravel-a i React-a.

Kompozitni index nad kolonama client_id i status služe zarad ubrzavanja upita nad tim kolonama.

SQL upit koji nam treba za izvlačenje summary-a:
SELECT Status, COUNT(*) as total
FROM Requests
GROUP BY Status


Nisam razumeo kako se okida PATCH /api/requests/{id}, da li je trebalo klikom iz tabele na određeni zahtev 
klijenta da se isti podaci pojave u formi ispod pa da se odatle radi edit? 
Takođe nisam znao da napišem test(feature test).
Nisam stigao da uradim sledeće:
GET /api/requests?status=open&q=logo vraća samo otvorene zahteve čiji naslov sadrži „logo“, sa imenom klijenta.
GET /api/requests/summary vraća zbirove koji se slažu sa podacima u bazi
Za drugi endpoint ne razumem ni šta se traži :(

Koristio sam TypeScript kojeg sam izabrao još prilikom instalacije projekta, takođe i Tailwind CSS. 
Kompletan dizajn stranice je radio Claude Code. 
Takođe korišćen je i za češljanje po dokumentaciji i u određenim slučajevima pronalasku grešaka.
Nije AI generisao kod već samo pronalazio greške kada sam mu ja to tražio!!!
Sve principe, logiku i plan sam radio bez veštačke inteligencije!
