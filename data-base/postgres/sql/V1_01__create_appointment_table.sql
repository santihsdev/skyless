CREATE SCHEMA bd_schema;

CREATE TABLE IF NOT EXISTS bd_schema.appointment_form (
       id_appointment SERIAL PRIMARY KEY,
       hour time with time zone,
       description text NOT NULL,
       date date NOT NULL,
       id_doctor text NOT NULL,
       id_user text NOT NULL
) TABLESPACE pg_default;