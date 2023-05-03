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



##  Features

- [ ] Módulo de registro e inicio de sesión
    - [x] Tarea: Implementar formulario de registro (usuarios, profesionales de salud)
    - [ ] Tarea: Implementar formulario de inicio de sesión
- [x]  Módulo de registro de citas
    - [x] Tarea: Implementar una página de vista de todos los profesionales de salud registrados
    - [x] Tarea: Implementar  una  página  para  un  profesional  de  la  salud  con  su  información  básica
- [ ]  Módulo de programación de citas
    - [ ]  Tarea: Implementar función para buscar y programar citas con profesionales de la salud
    - [ ]  Tarea: Permitir a los usuarios cancelar o reprogramar citas existentes
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
