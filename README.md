# Skyless Medical Appointment Management Platform

![Logo](src/lib/images/MedicalCheckLogo.png)

The platform allows users to schedule appointments with doctors, dentists or other healthcare professionals, as well as receive appointment reminders, reschedule appointments, control and avoid appointment scheduling conflicts.

The platform has an authentication module that is available to all users, there are at least two types of users (patients and doctors). Users must authenticate to use the platform.

The platform includes features such as patient registration, doctor registration. The platform also has appointment reminders for patient and doctor notifications, billing and payments, online communication.

## Appendix

For the project the following APIs were used:

- DaisyUI

- PG npm

Tools:

- PostgreSQL

- Keycloack

## Deployment

To deploy this project run

```bash

npm install

sudo docker-compose up

```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`docker`

`postgres`

`keycloack`

## Authors

- [@santihsdev](https://github.com/santihsdev)

- [@gabrielagonzalesv7](https://github.com/gabrielagonzalesv7)

- [@agonzalesb107](https://github.com/agonzalesb107)

- [@AlejandroEspinozaT](https://github.com/AlejandroEspinozaT)

- [@MariaReneH](https://github.com/MariaReneH)

- [@cris]()

## Features

- [x] Módulo de registro e inicio de sesión

  - [x] Tarea: Implementar formulario de registro (usuarios, profesionales de salud)

  - [x] Tarea: Implementar formulario de inicio de sesión

- [x] Módulo de registro de citas

  - [x] Tarea: Implementar una página de vista de todos los profesionales de salud registrados

  - [x] Tarea: Implementar una página para un profesional de la salud con su información básica

- [ ] Módulo de programación de citas

  - [x] Tarea: Implementar función para buscar y programar citas con profesionales de la salud

  - [x] Tarea: Permitir a los usuarios cancelar citas
  - [ ] Tarea: Permitir a los usuarios reprogramar citas existentes

- [ ] Módulo de recordatorios

  - [ ] Tarea: Implementar función para enviar recordatorios de citas por correo electrónico o SMS

  - [ ] Tarea: Permitir a los usuarios configurar sus preferencias de recordatorios

## Run Locally

Clone the project

```bash

git https://github.com/santihsdev/skyless

```

Install dependencies

```bash
npm install
```

Start the services

```bash
sudo docker-compose up
```

Start the page

```bash
npm run dev
```

### Course

Course: https://www.notion.so/Desarrollo-Software-V-3afae970164e4aac92ff82eea7d79116

Status: In progress

# Keycloak

## Realm

To use the application we use a realm called `test` , so it has to be created.

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled.png)

## Client

Also is necessary a client the name of the client is `client-test`

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%201.png)

## Set up the user registration and their roles

To start using the project is necessary to configure the Keycloak, in this case the roles are important, they allow the user to take actions on Keycloak.

When entering the application it is necessary

- Click on realm `test`
- To go to `Realm settings` here in user registration will be established the configurations

  ![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%202.png)

- Here in user registration select `Assign role` , filter by clients and select all roles (it is not recommended in production)

  ![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%203.png)

- The last step is go to `Authentication` and select `Required Actions`

  ![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%204.png)

  - Here is necessary to enable the `Update profile` and `Update user locale`

With all this set up is possible to use the Keycloak.

# Database Postgresql

It is also necessary to create 2 tables in postgres in the `keycloak` database, `appointment_form` and `doctor` tables are required to use the app

```sql
-- Table: public.appointment_form

-- DROP TABLE IF EXISTS public.appointment_form;

CREATE TABLE IF NOT EXISTS public.appointment_form
(
    id_appointment integer NOT NULL DEFAULT
		nextval('appointment_form_id_appointment_seq'::regclass),
    hour time with time zone,
    description text COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    id_doctor text COLLATE pg_catalog."default" NOT NULL,
    id_user text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT appointment_form_pkey PRIMARY KEY (id_appointment)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.appointment_form
    OWNER to keycloak;
```

```sql
-- Table: public.doctor

-- DROP TABLE IF EXISTS public.doctor;

CREATE TABLE IF NOT EXISTS public.doctor
(
    id text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    first_name text COLLATE pg_catalog."default" NOT NULL,
    last_name text COLLATE pg_catalog."default" NOT NULL,
    cellphone text COLLATE pg_catalog."default" NOT NULL,
    speciality text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    CONSTRAINT doctor_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.doctor
    OWNER to keycloak;
```

# How use the app

The app in the first view will show the home

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%205.png)

## Log in or create an account

To log or register a user click in the button `login`

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%206.png)

It is possible to create or register a user

Once logged the user by default is a patient, but a user can request to become a doctor by clicking in the button `Are you a doctor?`

## Bugs and problems related to login

If for some reason (including refresh the page) you don’t see the menu in the path `/patient/id` is because you aren’t logged in. The solution at the moment is click again in Log in button.

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%207.png)

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%208.png)

## Become a doctor

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%209.png)

Once here it is possible to become a doctor if the user has all a valid code that certify she/he is a doctor

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%2010.png)

After that, the user will be a doctor and the information will be stored in the database in the doctor table, the user will be added to the group doctor in keycloak

## Create reminders

It is possible to create reminders by see all the doctors in the page `/doctor-list` . Here are showed all the doctors (if there are no any doctor, add a few doctors)

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%2011.png)

Here is possible to add reminder with this doctor at the moment in any date or hour.

## See reminders

the reminders are in the page `/patient/id/reminder`

![Untitled](README%20215ebc0551504b14b1c67e82333a7e40/Untitled%2012.png)

At the moment is possible to add and delete reminders.
