create table articles(
    id serial PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    content text NOT NULL,
    photo VARCHAR(255) NOT NULL,
    published TIMESTAMPTZ NOT NULL DEFAULT NOW()
)

create table gallery_albums(
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    folder_path VARCHAR(255) NOT NULL
)

create table regatta(
    id serial PRIMARY KEY,
    event_year VARCHAR(4),
    run CHAR,
    content text,
    gallery_album SMALLINT,
    FOREIGN KEY (gallery_album) REFERENCES gallery_albums (id)
)

create table regatta_results_YERA_RUN(
    id serial PRIMARY KEY,
    vessel_name VARCHAR(20) NOT NULL,
    captain VARCHAR(50),
    less10 SMALLINT,
    less12 SMALLINT,
    more12 SMALLINT,
    general SMALLINT
)


insert into articles(title, content, photo)
values ('Regaty Trzy Perły 2023', 'Zarządu Jacht Klubu rozpocząl przygotowania do Regat "Trzy Perły". Podzieliliśmy role, przydzieliliśmy zadania, ustaliliśmy terminy. Edycja majowa odbędzie się w dniach 27-28.05.2023r.

Najważniejsza decyzja - zmiana formuły regat. Pierwszego dnia będziemy ścigać się na trasie Kołobrzeg - Darłowo, a drugiego na redzie Portu Darłowo. Wstępne założenia są takie, że etap redowy będzie rozciągać się od Dąbkek do Wicia, więc będzie pięknie widowisko dla fanów fotografii. O zwycięstwie zdecyduje suma wyników z obu dni.

Termin edycji wrześniowej to 09-10.09.2023r. Tym razem wyścig z Ustki do Darłowa, a drugiego dnia - reda Darłowa.

O zajętym miejscu w całych regatach zdecydują wyniki obu edycji - majowej i wwrześniowej. Zapraszamy wszystkich pasjonatów żeglarstwa do udziału w regatach. Więcej szczegółów znajduje się regulaminie regat w zakładce dokumenty.', 'path/to/the/photo')



INSERT INTO regatta_results_2023_1(vessel_name, captain, less10, less12, more12, c_general)
VALUES
	('Maxi Honey',	'Krzysztof Stormann',	null,	1,		null ,	1),
	('Pasadenia',	'Waldemar Kapusta',		null,	2,		null ,	2),
	('Barbara F',	'Witold Feszler',		null,	null,	1,		3),
	('Marinuss',	'Marek Piętka',			null,	3,		null,	4),
	('Sekstant',	'Robert Bukowski',		null,	4,		null,	5),
	('Dunajec',		'Grzegorz Hejno',		null,	null,	2,		6),
	('Aloa 25',		'Przemysław Zarzycki',	1,  	null,	null,	7),
	('Azyl S',		'Krzysztof Bocianowski',2,		null, 	null,	8)


INSERT INTO regatta (event_year, run, gallery_album)
VALUES ('2023', 1, 1)