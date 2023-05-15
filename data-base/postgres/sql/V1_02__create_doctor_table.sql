CREATE TABLE IF NOT EXISTS bd_schema.doctor (
       id text PRIMARY KEY,
       name text NOT NULL,
       first_name text NOT NULL,
       last_name text NOT NULL,
       cellphone text NOT NULL,
       speciality text,
       email text
) TABLESPACE pg_default;