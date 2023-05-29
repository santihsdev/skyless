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

npm install zod 

sudo docker-compose up

```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`docker`

`postgres`

`keycloack`

`flywat`


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

- [x] Módulo de programación de citas

  - [x] Tarea: Implementar función para buscar y programar citas con profesionales de la salud

  - [x] Tarea: Permitir a los usuarios cancelar citas
  - [x] Tarea: Permitir a los usuarios reprogramar citas existentes

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

```bash
npm install zod
```

Start the services

```bash
sudo docker-compose up
```
In order to load the data from the database we have to start the docker compose from the skyless/data-base/postgres/docker-compose.yml folder

```bash
sudo docker-compose up
```

Start the page

```bash
npm run dev
```

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
