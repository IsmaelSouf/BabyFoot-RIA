PGDMP         )                x           bF_RIA    12.2    12.2     G           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            H           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            I           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            J           1262    24739    bF_RIA    DATABASE     f   CREATE DATABASE "bF_RIA" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE "bF_RIA";
                postgres    false                        2615    24740    babyfootmanager    SCHEMA        CREATE SCHEMA babyfootmanager;
    DROP SCHEMA babyfootmanager;
                postgres    false            K           0    0    SCHEMA babyfootmanager    COMMENT     ?   COMMENT ON SCHEMA babyfootmanager IS 'standard public schema';
                   postgres    false    7            �            1259    24741    games    TABLE     �   CREATE TABLE babyfootmanager.games (
    games_id integer NOT NULL,
    names_of_game character varying(50) NOT NULL,
    state_game boolean DEFAULT false NOT NULL
);
 "   DROP TABLE babyfootmanager.games;
       babyfootmanager         heap    postgres    false    7            �            1259    24745 	   games_seq    SEQUENCE     �   CREATE SEQUENCE babyfootmanager.games_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE babyfootmanager.games_seq;
       babyfootmanager          postgres    false    203    7            L           0    0 	   games_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE babyfootmanager.games_seq OWNED BY babyfootmanager.games.games_id;
          babyfootmanager          postgres    false    204            �           2604    24747    games games_id    DEFAULT     y   ALTER TABLE ONLY babyfootmanager.games ALTER COLUMN games_id SET DEFAULT nextval('babyfootmanager.games_seq'::regclass);
 F   ALTER TABLE babyfootmanager.games ALTER COLUMN games_id DROP DEFAULT;
       babyfootmanager          postgres    false    204    203            C          0    24741    games 
   TABLE DATA           M   COPY babyfootmanager.games (games_id, names_of_game, state_game) FROM stdin;
    babyfootmanager          postgres    false    203   �       M           0    0 	   games_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('babyfootmanager.games_seq', 4, true);
          babyfootmanager          postgres    false    204            �           2606    24749    games games_PK 
   CONSTRAINT     ]   ALTER TABLE ONLY babyfootmanager.games
    ADD CONSTRAINT "games_PK" PRIMARY KEY (games_id);
 C   ALTER TABLE ONLY babyfootmanager.games DROP CONSTRAINT "games_PK";
       babyfootmanager            postgres    false    203            �           2606    24751    games games_names_key 
   CONSTRAINT     b   ALTER TABLE ONLY babyfootmanager.games
    ADD CONSTRAINT games_names_key UNIQUE (names_of_game);
 H   ALTER TABLE ONLY babyfootmanager.games DROP CONSTRAINT games_names_key;
       babyfootmanager            postgres    false    203            C   Z   x�3���KN�+QV�M���M�L�2��M,)��L-	����%L8]�2S@�99��`�Ɯ�yU� QǢ�����=... vTX     