--
-- PostgreSQL database cluster dump
--

-- Started on 2023-12-11 03:41:26

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:ljP9oAcDDGn6lBlgLU1SSQ==$VdZ5u4S55PomTaljqHiqJ8n63ZY9nYhomcgf8bWNY3o=:OB8CR+S69IA0Wpx+LWlaOdOKzqXIE0WXltFAEVvkmc8=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

-- Started on 2023-12-11 03:41:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2023-12-11 03:41:27

--
-- PostgreSQL database dump complete
--

--
-- Database "database" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

-- Started on 2023-12-11 03:41:27

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4883 (class 1262 OID 16396)
-- Name: database; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE database WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Polish_Poland.1250';


ALTER DATABASE database OWNER TO postgres;

\connect database

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16398)
-- Name: articles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.articles (
    id integer NOT NULL,
    title character varying(150) NOT NULL,
    content text NOT NULL,
    photo character varying(255) NOT NULL,
    published timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.articles OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16397)
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.articles_id_seq OWNER TO postgres;

--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 215
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;


--
-- TOC entry 224 (class 1259 OID 24590)
-- Name: crew; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.crew (
    id integer NOT NULL,
    vessel_name character varying(20) NOT NULL,
    vessel_type character varying(20) NOT NULL,
    mark character varying(20) NOT NULL,
    lenght smallint,
    captain character varying(50),
    qualifications character varying(128),
    date_of_birth date,
    address character varying(256),
    phone character varying(20),
    club character varying(128),
    crewmen text
);


ALTER TABLE public.crew OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24589)
-- Name: crew_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.crew_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.crew_id_seq OWNER TO postgres;

--
-- TOC entry 4885 (class 0 OID 0)
-- Dependencies: 223
-- Name: crew_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.crew_id_seq OWNED BY public.crew.id;


--
-- TOC entry 218 (class 1259 OID 16417)
-- Name: gallery_albums; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gallery_albums (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    folder_path character varying(255) NOT NULL
);


ALTER TABLE public.gallery_albums OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16416)
-- Name: gallery_albums_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gallery_albums_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gallery_albums_id_seq OWNER TO postgres;

--
-- TOC entry 4886 (class 0 OID 0)
-- Dependencies: 217
-- Name: gallery_albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gallery_albums_id_seq OWNED BY public.gallery_albums.id;


--
-- TOC entry 220 (class 1259 OID 16424)
-- Name: regatta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regatta (
    id integer NOT NULL,
    event_year character varying(4),
    run character(1),
    content text,
    gallery_album smallint
);


ALTER TABLE public.regatta OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16423)
-- Name: regatta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regatta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.regatta_id_seq OWNER TO postgres;

--
-- TOC entry 4887 (class 0 OID 0)
-- Dependencies: 219
-- Name: regatta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regatta_id_seq OWNED BY public.regatta.id;


--
-- TOC entry 222 (class 1259 OID 16438)
-- Name: regatta_results_yera_run; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regatta_results_yera_run (
    id integer NOT NULL,
    vessel_name character varying(20) NOT NULL,
    captain character varying(50),
    less10 smallint,
    less12 smallint,
    more12 smallint,
    general smallint
);


ALTER TABLE public.regatta_results_yera_run OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16437)
-- Name: regatta_results_yera_run_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regatta_results_yera_run_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.regatta_results_yera_run_id_seq OWNER TO postgres;

--
-- TOC entry 4888 (class 0 OID 0)
-- Dependencies: 221
-- Name: regatta_results_yera_run_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regatta_results_yera_run_id_seq OWNED BY public.regatta_results_yera_run.id;


--
-- TOC entry 4708 (class 2604 OID 16401)
-- Name: articles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);


--
-- TOC entry 4713 (class 2604 OID 24593)
-- Name: crew id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.crew ALTER COLUMN id SET DEFAULT nextval('public.crew_id_seq'::regclass);


--
-- TOC entry 4710 (class 2604 OID 16420)
-- Name: gallery_albums id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery_albums ALTER COLUMN id SET DEFAULT nextval('public.gallery_albums_id_seq'::regclass);


--
-- TOC entry 4711 (class 2604 OID 16427)
-- Name: regatta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regatta ALTER COLUMN id SET DEFAULT nextval('public.regatta_id_seq'::regclass);


--
-- TOC entry 4712 (class 2604 OID 16441)
-- Name: regatta_results_yera_run id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regatta_results_yera_run ALTER COLUMN id SET DEFAULT nextval('public.regatta_results_yera_run_id_seq'::regclass);


--
-- TOC entry 4869 (class 0 OID 16398)
-- Dependencies: 216
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.articles (id, title, content, photo, published) FROM stdin;
2	Podsumowanie rejsu dookoła Bałtyku	Opisanie całego rejsu dookoła Bałtyku, jaki w te wakacje odbył SY Sekstant, a zorganizował Jacht Klub Królewskiego Miasta Darłowo nie jest łatwe. Niełatwe, bo rejs trwał ponad półtora miesiąca, załogi wymieniały się sześć razy, było pięciu kapitanów i trzydziestu jeden uczestników. Cała historia rozpoczęła się kilka lat temu, kiedy w mojej głowie zrodził się pomysł, że skoro byliśmy już w różnych portach i w różnych krajach i opływaliśmy różne wyspy, to czas byłoby opłynąć nasz Bałtyk. Bo wbrew opiniom, że Bałtyk to kapryśne i trudne morze, my je bardzo lubimy. Dwa lata zajęły nam prace nad przygotowaniem jachtu, który wynajęliśmy z Zespołu Szkół Morskich w Darłowie. Kapitanowie i członkowie załóg również się przygotowywali, pływając na różne rejsy, zarówno na Bałtyku, jak i na ciepłych morzach i biorąc udział w regatach. W końcu nadszedł dzień, kiedy wszystko zostało zapięte na ostatni guzik i pierwsza załoga złożona z uczniów Zespołu Szkół Morskich pod dowództwem Zenona Lesnera i z pomocą Grzegorza i Karola wyruszyła w pierwszy etap. Dla młodych ludzi była to pierwsza taka przygoda w życiu. Emocje były różne- od strachu, przez zadowolenie aż do zachwytu. Popłynęli oni z Darłowa przez Ustkę, Władysławowo do Helu. Tutaj pod słynnym helskim „jajem”, czyli Bosmanatem portu, dokonano zmiany załóg.\n\nII etap pod dowództwem Pawła Krakowiaka rozpoczęła doświadczona załoga. Mieliśmy na pokładzie czterech sterników morskich i najstarszego uczestnika, czyli Leszka Walkiewicza, słynnego podróżnika i człowieka, który opłynął świat. Ta cześć rejsu zaczęła się od przepłynięcia wzdłuż rosyjskiej strefy granicznej, w której naszej załodze towarzyszył najpierw rosyjski okręt patrolowy, a potem żaglowiec Siedow. Bez przeszkód dotarliśmy na Litwę do Kłajpedy- jedynego w tym kraju portu morskiego. Potem były kolejne kraje nadbałtyckie, czyli Łotwa, w której odwiedziliśmy trzy porty, i Estonia, która ma bardzo dużo portów. Nikt z nas nie był w tej części Bałtyku, zatem staliśmy się odkrywcami. A kraje nadbałtyckie są ciekawe i interesujące, np. Estonia i jej porty przypominają często nasze jeziora, jest tam płytko, brzegi porośnięte są trzcinami, a plaże są trawiaste. Zaskoczyły nas prawie tropikalne upały i temperatura wody sięgająca 26 stopni. Następnie przepłynęliśmy Zatokę Fińską i wpłynęliśmy w szkiery koło Turku. Finlandia wygląda miejscami jak baśniowy świat Muminków z kolorowymi domkami na tysiącu wysepek. Tutaj zeszły się drogi, to znaczy nasza załoga spotkała załogi z Kołobrzegu na dwóch innych jachtach. To nasi znajomi z Regat Trzy Perły. Zaśpiewaliśmy razem parę szant i wznieśliśmy kilka toastów. W Turku nastąpiła kolejna wymiana załóg, a kapitanem został Damian Miszke.\n\nTym razem w składzie damsko- męskim i rodzinnym (trzy małżeństwa) wyruszyliśmy zwiedzać Alandy, czyli krainę tysięcy wysp. Jak opisują, tak jest naprawdę, jest to miejsce mistyczne, magiczne i cudowne. My trafiliśmy tu w okresie, kiedy noc jest najkrótsza i zmierzch przechodzi płynnie w świt. Odwiedziliśmy wiele wspaniałych, uroczych i różnorodnych marin- od malutkich na kilka jachtów po największą w stolicy archipelagu Mariehamn. A Archipelag Alandzki i Szkiery Turku zostaną na zawsze w naszej pamięci. Ostatnią częścią tego etapu było przekroczenie bram Zatoki Botnickiej i lądowanie w Sztokholmie, który urzeka swoim pięknem, ale straszy swoimi cenami. Tu pod muzeum Wazy, gdzie zacumowaliśmy Sekstanta, doszło do kolejnej wymiany załogi. Kapitan Gerard Tocha dowodził 5-osobowym składem panów z Jacht Klubu i gości z Krakowa. Na początku szło świetnie i bez przeszkód udało się przejść urokliwe szkiery i wypłynąć na pełne morze. Niestety w drodze na Gotlandię dopadła załogę burza, w czasie której uszkodzony został przedni żagiel. W nocy musieli zawrócić do najbliższego portu schronienia. Po odpoczynku i oszacowaniu strat ponownie wypłynęli, tym razem jedynie na grocie. Nie było już mowy o eksploracji Gotlandii i Olandii, które były w planach, trzeba było płynąć przez Kalmar do Karlskrony. Na szczęście wiatry były sprzyjające, a burze ich omijały. W międzyczasie udało się pożyczyć zapasowy żagiel i kolejna załoga zabrała go na V już etap, który rozpoczął się w Karlskronie. Kapitanem został Robert Bukowski, który w załodze miał trzech członków Jacht Klubu i dwoje dzieci klubowiczów. W planach były porty południowej Szwecji i dwa z nich zostały odwiedzone.\n\nPotem długi przeskok na Bornholm i ciągle niesprzyjający wiatr, ale tak często się dzieje na Bałtyku, kiedy płynie się na zachód. Dalsza podróż była jeszcze bardziej na zachód- do Sassnitz na niemieckiej wyspie Rugia. Stąd ostatni skok tej załogi, już w sprzyjającym wietrze, doprowadził ich do mariny w Świnoujściu. Tu szczęśliwie zakończył się etap V i rozpoczął etap VI. Na ostatnim etapie kapitanem ponownie został Zenon Lesner i domknęło się koło – ponieważ on również zaczynał rejs. Załoga to mieszanka doświadczenia i młodości: dwóch panów w dojrzałym wieku, trzech w średnim i jeden junior. Na pierwszy port wybrali nieodległy Dziwnów, do którego dopłynęli ekspresowo i zdążyli się schronić przed burzami. Kolejnego dnia wybrali się na Bornholm i po nocnym rejsie, gdzie wiatr dochodził do 7 w skali Beauforta, dotarli do Nexø około 5 nad ranem. Spotkali tu polskie załogi, a kolejnego dnia wypłynęli na Christiansø, które jest niezwykle urokliwą wysepką, po to, by wieczorem dopłynąć do Gudhjem. I po takim bornholmskim tournee wrócili całodziennym rejsem do Kołobrzegu. Tu czekała na nich darmowa marina, bo zapisali się na regaty o Srebrny Dzwon. Ostatnim dniem rejsu dookoła Bałtyku było przepłyniecie z Kołobrzegu do Darłowa i dopięcie pętli. Pod prawym salingiem wiszą wszystkie bandery odwiedzonych państw (jest ich dziewięć), a na topie grotmasztu powiewa błękitna wstążka o długości 1465 mm, każdy milimetr na jedną przepłyniętą milę. Rejs Jacht Klubu Królewskiego Miasta Darłowo na jachcie SY SEKSTANT przeszedł do historii, ale na bardzo długo, a może na zawsze, zostanie w pamięci jego uczestników. Ahoj kapitanowie, ahoj załogi. Bardzo Wam dziękuję za udział w tym moim pomyśle.	gallery/rejs_dookola_baltyku/0.webp	2023-12-10 22:37:46.779238+01
1	Regaty Trzy Perły 2023	Zarządu Jacht Klubu rozpocząl przygotowania do Regat "Trzy Perły". Podzieliliśmy role, przydzieliliśmy zadania, ustaliliśmy terminy. Edycja majowa odbędzie się w dniach 27-28.05.2023r.\n\nNajważniejsza decyzja - zmiana formuły regat. Pierwszego dnia będziemy ścigać się na trasie Kołobrzeg - Darłowo, a drugiego na redzie Portu Darłowo. Wstępne założenia są takie, że etap redowy będzie rozciągać się od Dąbkek do Wicia, więc będzie pięknie widowisko dla fanów fotografii. O zwycięstwie zdecyduje suma wyników z obu dni.\n\nTermin edycji wrześniowej to 09-10.09.2023r. Tym razem wyścig z Ustki do Darłowa, a drugiego dnia - reda Darłowa.\n\nO zajętym miejscu w całych regatach zdecydują wyniki obu edycji - majowej i wwrześniowej. Zapraszamy wszystkich pasjonatów żeglarstwa do udziału w regatach. Więcej szczegółów znajduje się regulaminie regat w zakładce dokumenty.	gallery/regaty2023/0.webp	2023-12-08 15:22:33.451363+01
\.


--
-- TOC entry 4877 (class 0 OID 24590)
-- Dependencies: 224
-- Data for Name: crew; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.crew (id, vessel_name, vessel_type, mark, lenght, captain, qualifications, date_of_birth, address, phone, club, crewmen) FROM stdin;
\.


--
-- TOC entry 4871 (class 0 OID 16417)
-- Dependencies: 218
-- Data for Name: gallery_albums; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gallery_albums (id, title, folder_path) FROM stdin;
1	Regaty Trzy Perły 2021	gallery/regaty2021
2	Regaty Trzy Perły 2022	gallery/regaty2022
3	Regaty Trzy Perły 2023	gallery/regaty2023
4	Rejs Dookoła Bałtyku	gallery/rejs_dookola_baltyku
\.


--
-- TOC entry 4873 (class 0 OID 16424)
-- Dependencies: 220
-- Data for Name: regatta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regatta (id, event_year, run, content, gallery_album) FROM stdin;
\.


--
-- TOC entry 4875 (class 0 OID 16438)
-- Dependencies: 222
-- Data for Name: regatta_results_yera_run; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regatta_results_yera_run (id, vessel_name, captain, less10, less12, more12, general) FROM stdin;
\.


--
-- TOC entry 4889 (class 0 OID 0)
-- Dependencies: 215
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.articles_id_seq', 2, true);


--
-- TOC entry 4890 (class 0 OID 0)
-- Dependencies: 223
-- Name: crew_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.crew_id_seq', 1, false);


--
-- TOC entry 4891 (class 0 OID 0)
-- Dependencies: 217
-- Name: gallery_albums_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gallery_albums_id_seq', 4, true);


--
-- TOC entry 4892 (class 0 OID 0)
-- Dependencies: 219
-- Name: regatta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.regatta_id_seq', 2, true);


--
-- TOC entry 4893 (class 0 OID 0)
-- Dependencies: 221
-- Name: regatta_results_yera_run_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.regatta_results_yera_run_id_seq', 1, false);


--
-- TOC entry 4715 (class 2606 OID 16406)
-- Name: articles articles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- TOC entry 4723 (class 2606 OID 24597)
-- Name: crew crew_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.crew
    ADD CONSTRAINT crew_pkey PRIMARY KEY (id);


--
-- TOC entry 4717 (class 2606 OID 16422)
-- Name: gallery_albums gallery_albums_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery_albums
    ADD CONSTRAINT gallery_albums_pkey PRIMARY KEY (id);


--
-- TOC entry 4719 (class 2606 OID 16431)
-- Name: regatta regatta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regatta
    ADD CONSTRAINT regatta_pkey PRIMARY KEY (id);


--
-- TOC entry 4721 (class 2606 OID 16443)
-- Name: regatta_results_yera_run regatta_results_yera_run_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regatta_results_yera_run
    ADD CONSTRAINT regatta_results_yera_run_pkey PRIMARY KEY (id);


--
-- TOC entry 4724 (class 2606 OID 16432)
-- Name: regatta regatta_gallery_album_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regatta
    ADD CONSTRAINT regatta_gallery_album_fkey FOREIGN KEY (gallery_album) REFERENCES public.gallery_albums(id);


-- Completed on 2023-12-11 03:41:27

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

-- Started on 2023-12-11 03:41:27

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4832 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


-- Completed on 2023-12-11 03:41:27

--
-- PostgreSQL database dump complete
--

-- Completed on 2023-12-11 03:41:27

--
-- PostgreSQL database cluster dump complete
--

