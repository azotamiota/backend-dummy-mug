--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 14.7 (Homebrew)

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
-- Name: mugs; Type: TABLE; Schema: public; Owner: MAJERN01
--

CREATE TABLE public.mugs (
    id integer NOT NULL,
    name character varying(50),
    price numeric(5,2)
);


ALTER TABLE public.mugs OWNER TO "MAJERN01";

--
-- Data for Name: mugs; Type: TABLE DATA; Schema: public; Owner: MAJERN01
--

COPY public.mugs (id, name, price) FROM stdin;
1	pinky	3.50
2	blacky	4.10
3	whitey	4.50
\.


--
-- Name: mugs mugs_pkey; Type: CONSTRAINT; Schema: public; Owner: MAJERN01
--

ALTER TABLE ONLY public.mugs
    ADD CONSTRAINT mugs_pkey PRIMARY KEY (id);


--
-- Name: TABLE mugs; Type: ACL; Schema: public; Owner: MAJERN01
--

GRANT SELECT ON TABLE public.mugs TO azotamiota;


--
-- PostgreSQL database dump complete
--

