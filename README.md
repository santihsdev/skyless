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


## Deployment

To deploy this project run

```bash

npm install

npm install zod

sudo docker-compose up

```


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


With all this information charge by this json file when you create the new realm test, all this information is also located on the data-base/keycloak/realm-export.json path.

```bash
{
  "id": "45af15ba-a9f6-406b-a840-68ad32bef60e",
  "realm": "test",
  "notBefore": 0,
  "defaultSignatureAlgorithm": "RS256",
  "revokeRefreshToken": false,
  "refreshTokenMaxReuse": 0,
  "accessTokenLifespan": 300,
  "accessTokenLifespanForImplicitFlow": 900,
  "ssoSessionIdleTimeout": 1800,
  "ssoSessionMaxLifespan": 36000,
  "ssoSessionIdleTimeoutRememberMe": 0,
  "ssoSessionMaxLifespanRememberMe": 0,
  "offlineSessionIdleTimeout": 2592000,
  "offlineSessionMaxLifespanEnabled": false,
  "offlineSessionMaxLifespan": 5184000,
  "clientSessionIdleTimeout": 0,
  "clientSessionMaxLifespan": 0,
  "clientOfflineSessionIdleTimeout": 0,
  "clientOfflineSessionMaxLifespan": 0,
  "accessCodeLifespan": 60,
  "accessCodeLifespanUserAction": 300,
  "accessCodeLifespanLogin": 1800,
  "actionTokenGeneratedByAdminLifespan": 43200,
  "actionTokenGeneratedByUserLifespan": 300,
  "oauth2DeviceCodeLifespan": 600,
  "oauth2DevicePollingInterval": 5,
  "enabled": true,
  "sslRequired": "external",
  "registrationAllowed": true,
  "registrationEmailAsUsername": false,
  "rememberMe": false,
  "verifyEmail": false,
  "loginWithEmailAllowed": true,
  "duplicateEmailsAllowed": false,
  "resetPasswordAllowed": false,
  "editUsernameAllowed": false,
  "bruteForceProtected": false,
  "permanentLockout": false,
  "maxFailureWaitSeconds": 900,
  "minimumQuickLoginWaitSeconds": 60,
  "waitIncrementSeconds": 60,
  "quickLoginCheckMilliSeconds": 1000,
  "maxDeltaTimeSeconds": 43200,
  "failureFactor": 30,
  "roles": {
    "realm": [
      {
        "id": "360ac080-fd67-4d20-9554-9f5d34bbfe6c",
        "name": "offline_access",
        "description": "${role_offline-access}",
        "composite": false,
        "clientRole": false,
        "containerId": "45af15ba-a9f6-406b-a840-68ad32bef60e",
        "attributes": {}
      },
      {
        "id": "2ae2880e-39af-4991-b0dd-cfc19ccfe2b7",
        "name": "default-roles-test",
        "description": "${role_default-roles}",
        "composite": true,
        "composites": {
          "realm": [
            "offline_access",
            "uma_authorization"
          ],
          "client": {
            "realm-management": [
              "query-groups"
            ],
            "broker": [
              "read-token"
            ],
            "account": [
              "manage-account",
              "view-groups",
              "view-profile"
            ]
          }
        },
        "clientRole": false,
        "containerId": "45af15ba-a9f6-406b-a840-68ad32bef60e",
        "attributes": {}
      },
      {
        "id": "2dc95381-c7e2-43d9-9ce6-5c6f0c9a9fa8",
        "name": "uma_authorization",
        "description": "${role_uma_authorization}",
        "composite": false,
        "clientRole": false,
        "containerId": "45af15ba-a9f6-406b-a840-68ad32bef60e",
        "attributes": {}
      }
    ],
    "client": {
      "client-test": [],
      "realm-management": [
        {
          "id": "2ba69857-c34c-463e-808d-f2c4fef2707a",
          "name": "view-identity-providers",
          "description": "${role_view-identity-providers}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "e1458f38-33ed-45b1-b40e-836a0ba4997a",
          "name": "query-groups",
          "description": "${role_query-groups}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "fa07b02e-96e3-44d0-938e-be7f05c56ac5",
          "name": "realm-admin",
          "description": "${role_realm-admin}",
          "composite": true,
          "composites": {
            "client": {
              "realm-management": [
                "view-identity-providers",
                "query-groups",
                "view-realm",
                "manage-identity-providers",
                "view-authorization",
                "query-realms",
                "view-events",
                "manage-events",
                "manage-clients",
                "create-client",
                "view-clients",
                "manage-users",
                "manage-authorization",
                "impersonation",
                "view-users",
                "manage-realm",
                "query-users",
                "query-clients"
              ]
            }
          },
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "781cd8b3-ed7a-4402-b38a-de95727314c2",
          "name": "view-realm",
          "description": "${role_view-realm}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "338a55ef-96a3-49d8-b335-76bcca1e3237",
          "name": "manage-identity-providers",
          "description": "${role_manage-identity-providers}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "2ba53925-46bf-4b7d-a332-66bfeafb3413",
          "name": "view-authorization",
          "description": "${role_view-authorization}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "8322e34a-fb25-4bd7-90f9-d46beb65e004",
          "name": "query-realms",
          "description": "${role_query-realms}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "3c24bd75-3bf1-42b1-b919-4dfc46bfb077",
          "name": "manage-events",
          "description": "${role_manage-events}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "01670de4-d894-44c8-9654-74f7af9e2382",
          "name": "view-events",
          "description": "${role_view-events}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "22a8d433-199b-4583-862b-6faf6e208453",
          "name": "manage-clients",
          "description": "${role_manage-clients}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "83791411-6fb9-4873-958a-0aaf56a7197f",
          "name": "create-client",
          "description": "${role_create-client}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "f144a8ed-208e-445b-9c43-410567d07da4",
          "name": "manage-users",
          "description": "${role_manage-users}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "3f387518-1398-4cca-9aba-220df6234143",
          "name": "view-clients",
          "description": "${role_view-clients}",
          "composite": true,
          "composites": {
            "client": {
              "realm-management": [
                "query-clients"
              ]
            }
          },
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "7a31d428-95f8-43a3-be6c-36f3deffd127",
          "name": "impersonation",
          "description": "${role_impersonation}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "d70893d3-2fd0-4460-a526-1ea3db4dfc0e",
          "name": "manage-authorization",
          "description": "${role_manage-authorization}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "9fba2f5c-2c26-4cb0-b6df-3a509b6f5b4e",
          "name": "view-users",
          "description": "${role_view-users}",
          "composite": true,
          "composites": {
            "client": {
              "realm-management": [
                "query-groups",
                "query-users"
              ]
            }
          },
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "34695dfe-554e-4c60-8a69-f38b2ad62f89",
          "name": "manage-realm",
          "description": "${role_manage-realm}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "e05621f4-aca9-4475-9d40-d0d185a59a74",
          "name": "query-users",
          "description": "${role_query-users}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        },
        {
          "id": "c7373fc0-b01c-476d-bf12-46e1f9df62ca",
          "name": "query-clients",
          "description": "${role_query-clients}",
          "composite": false,
          "clientRole": true,
          "containerId": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
          "attributes": {}
        }
      ],
      "security-admin-console": [],
      "admin-cli": [],
      "account-console": [],
      "broker": [
        {
          "id": "45341908-1820-4321-a3cb-3f7d2aa5bbf7",
          "name": "read-token",
          "description": "${role_read-token}",
          "composite": false,
          "clientRole": true,
          "containerId": "f1422b39-b2d7-4d64-aa52-18e2a7e5d431",
          "attributes": {}
        }
      ],
      "account": [
        {
          "id": "13317eff-c493-468e-b0b2-0a69f4fac383",
          "name": "manage-consent",
          "description": "${role_manage-consent}",
          "composite": true,
          "composites": {
            "client": {
              "account": [
                "view-consent"
              ]
            }
          },
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        },
        {
          "id": "e67c3a7d-4a12-43d3-bbda-22ed72d89ff5",
          "name": "manage-account",
          "description": "${role_manage-account}",
          "composite": true,
          "composites": {
            "client": {
              "account": [
                "manage-account-links"
              ]
            }
          },
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        },
        {
          "id": "a24731b4-1dc0-4d09-a634-1705ad349311",
          "name": "view-applications",
          "description": "${role_view-applications}",
          "composite": false,
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        },
        {
          "id": "47813acc-3da2-4938-9ec5-d15798653b5d",
          "name": "view-consent",
          "description": "${role_view-consent}",
          "composite": false,
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        },
        {
          "id": "bebdc2b8-91ba-480d-b25d-ee5b1fdd8372",
          "name": "view-groups",
          "description": "${role_view-groups}",
          "composite": false,
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        },
        {
          "id": "70d82c57-2698-4a64-905e-21058f22d132",
          "name": "delete-account",
          "description": "${role_delete-account}",
          "composite": false,
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        },
        {
          "id": "0aba9069-8719-470b-8466-4e39ca759dce",
          "name": "manage-account-links",
          "description": "${role_manage-account-links}",
          "composite": false,
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        },
        {
          "id": "d8639572-0b78-4a72-b5b0-42526eb6a86f",
          "name": "view-profile",
          "description": "${role_view-profile}",
          "composite": false,
          "clientRole": true,
          "containerId": "7d597013-3914-4d53-802a-2f5b860cb9fd",
          "attributes": {}
        }
      ]
    }
  },
  "groups": [
    {
      "id": "f56ee05c-4044-4e42-b27a-43aff9897860",
      "name": "doctor",
      "path": "/doctor",
      "attributes": {},
      "realmRoles": [],
      "clientRoles": {
        "realm-management": [
          "manage-users",
          "create-client",
          "query-groups",
          "view-users",
          "query-users"
        ],
        "account": [
          "view-groups"
        ]
      },
      "subGroups": []
    },
    {
      "id": "8489a034-8f76-4063-a318-81a7da028c29",
      "name": "patient",
      "path": "/patient",
      "attributes": {},
      "realmRoles": [],
      "clientRoles": {
        "realm-management": [
          "manage-clients",
          "manage-users",
          "view-clients",
          "query-groups",
          "view-users",
          "query-users"
        ],
        "account": [
          "manage-account"
        ]
      },
      "subGroups": []
    }
  ],
  "defaultRole": {
    "id": "2ae2880e-39af-4991-b0dd-cfc19ccfe2b7",
    "name": "default-roles-test",
    "description": "${role_default-roles}",
    "composite": true,
    "clientRole": false,
    "containerId": "45af15ba-a9f6-406b-a840-68ad32bef60e"
  },
  "defaultGroups": [
    "/patient"
  ],
  "requiredCredentials": [
    "password"
  ],
  "otpPolicyType": "totp",
  "otpPolicyAlgorithm": "HmacSHA1",
  "otpPolicyInitialCounter": 0,
  "otpPolicyDigits": 6,
  "otpPolicyLookAheadWindow": 1,
  "otpPolicyPeriod": 30,
  "otpPolicyCodeReusable": false,
  "otpSupportedApplications": [
    "totpAppGoogleName",
    "totpAppMicrosoftAuthenticatorName",
    "totpAppFreeOTPName"
  ],
  "webAuthnPolicyRpEntityName": "keycloak",
  "webAuthnPolicySignatureAlgorithms": [
    "ES256"
  ],
  "webAuthnPolicyRpId": "",
  "webAuthnPolicyAttestationConveyancePreference": "not specified",
  "webAuthnPolicyAuthenticatorAttachment": "not specified",
  "webAuthnPolicyRequireResidentKey": "not specified",
  "webAuthnPolicyUserVerificationRequirement": "not specified",
  "webAuthnPolicyCreateTimeout": 0,
  "webAuthnPolicyAvoidSameAuthenticatorRegister": false,
  "webAuthnPolicyAcceptableAaguids": [],
  "webAuthnPolicyPasswordlessRpEntityName": "keycloak",
  "webAuthnPolicyPasswordlessSignatureAlgorithms": [
    "ES256"
  ],
  "webAuthnPolicyPasswordlessRpId": "",
  "webAuthnPolicyPasswordlessAttestationConveyancePreference": "not specified",
  "webAuthnPolicyPasswordlessAuthenticatorAttachment": "not specified",
  "webAuthnPolicyPasswordlessRequireResidentKey": "not specified",
  "webAuthnPolicyPasswordlessUserVerificationRequirement": "not specified",
  "webAuthnPolicyPasswordlessCreateTimeout": 0,
  "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": false,
  "webAuthnPolicyPasswordlessAcceptableAaguids": [],
  "scopeMappings": [
    {
      "clientScope": "offline_access",
      "roles": [
        "offline_access"
      ]
    }
  ],
  "clientScopeMappings": {
    "account": [
      {
        "client": "account-console",
        "roles": [
          "manage-account",
          "view-groups"
        ]
      }
    ]
  },
  "clients": [
    {
      "id": "7d597013-3914-4d53-802a-2f5b860cb9fd",
      "clientId": "account",
      "name": "${client_account}",
      "rootUrl": "${authBaseUrl}",
      "baseUrl": "/realms/test/account/",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [
        "/realms/test/account/*"
      ],
      "webOrigins": [],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": false,
      "publicClient": true,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {
        "post.logout.redirect.uris": "+"
      },
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": false,
      "nodeReRegistrationTimeout": 0,
      "defaultClientScopes": [
        "web-origins",
        "acr",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    },
    {
      "id": "239cbc13-6a0a-4e76-90b4-bc7f0fb88484",
      "clientId": "account-console",
      "name": "${client_account-console}",
      "rootUrl": "${authBaseUrl}",
      "baseUrl": "/realms/test/account/",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [
        "/realms/test/account/*"
      ],
      "webOrigins": [],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": false,
      "publicClient": true,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {
        "post.logout.redirect.uris": "+",
        "pkce.code.challenge.method": "S256"
      },
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": false,
      "nodeReRegistrationTimeout": 0,
      "protocolMappers": [
        {
          "id": "84ff6c5f-44ab-4cb3-909e-5d84f229e97e",
          "name": "audience resolve",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-audience-resolve-mapper",
          "consentRequired": false,
          "config": {}
        }
      ],
      "defaultClientScopes": [
        "web-origins",
        "acr",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    },
    {
      "id": "e51065bd-4dd9-47f3-880e-f711e1800cc1",
      "clientId": "admin-cli",
      "name": "${client_admin-cli}",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [],
      "webOrigins": [],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": false,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": true,
      "serviceAccountsEnabled": false,
      "publicClient": true,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": false,
      "nodeReRegistrationTimeout": 0,
      "defaultClientScopes": [
        "web-origins",
        "acr",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    },
    {
      "id": "f1422b39-b2d7-4d64-aa52-18e2a7e5d431",
      "clientId": "broker",
      "name": "${client_broker}",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [],
      "webOrigins": [],
      "notBefore": 0,
      "bearerOnly": true,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": false,
      "publicClient": false,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": false,
      "nodeReRegistrationTimeout": 0,
      "defaultClientScopes": [
        "web-origins",
        "acr",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    },
    {
      "id": "f0427f3d-8f63-44fb-97f4-1e3db1407b04",
      "clientId": "client-test",
      "name": "",
      "description": "",
      "rootUrl": "http://localhost:5173",
      "adminUrl": "http://localhost:5173",
      "baseUrl": "",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [
        "http://localhost:5173/*"
      ],
      "webOrigins": [
        "http://localhost:5173"
      ],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": true,
      "serviceAccountsEnabled": false,
      "publicClient": true,
      "frontchannelLogout": true,
      "protocol": "openid-connect",
      "attributes": {
        "oidc.ciba.grant.enabled": "false",
        "oauth2.device.authorization.grant.enabled": "false",
        "backchannel.logout.session.required": "true",
        "backchannel.logout.revoke.offline.tokens": "false"
      },
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": true,
      "nodeReRegistrationTimeout": -1,
      "defaultClientScopes": [
        "web-origins",
        "acr",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    },
    {
      "id": "b944c7a5-9fbb-483c-8566-dbf112ea88e4",
      "clientId": "realm-management",
      "name": "${client_realm-management}",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [],
      "webOrigins": [],
      "notBefore": 0,
      "bearerOnly": true,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": false,
      "publicClient": false,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {},
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": false,
      "nodeReRegistrationTimeout": 0,
      "defaultClientScopes": [
        "web-origins",
        "acr",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    },
    {
      "id": "23b40e32-a271-4ea1-8347-b09395ced30f",
      "clientId": "security-admin-console",
      "name": "${client_security-admin-console}",
      "rootUrl": "${authAdminUrl}",
      "baseUrl": "/admin/test/console/",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "redirectUris": [
        "/admin/test/console/*"
      ],
      "webOrigins": [
        "+"
      ],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": false,
      "publicClient": true,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {
        "post.logout.redirect.uris": "+",
        "pkce.code.challenge.method": "S256"
      },
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": false,
      "nodeReRegistrationTimeout": 0,
      "protocolMappers": [
        {
          "id": "0b3efc77-9b6e-4424-a304-5193ff1b859e",
          "name": "locale",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "locale",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "locale",
            "jsonType.label": "String"
          }
        }
      ],
      "defaultClientScopes": [
        "web-origins",
        "acr",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    }
  ],
  "clientScopes": [
    {
      "id": "2038defe-baa3-4fdc-8e59-d70ecfffb71c",
      "name": "phone",
      "description": "OpenID Connect built-in scope: phone",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "${phoneScopeConsentText}"
      },
      "protocolMappers": [
        {
          "id": "61685641-9fed-4e1e-8f50-419b3b992d54",
          "name": "phone number",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "phoneNumber",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "phone_number",
            "jsonType.label": "String"
          }
        },
        {
          "id": "ff1d51ae-3722-499e-8815-244cc3a58d67",
          "name": "phone number verified",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "phoneNumberVerified",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "phone_number_verified",
            "jsonType.label": "boolean"
          }
        }
      ]
    },
    {
      "id": "0eb5c4b0-ea5b-416e-b16c-19f0b60af26d",
      "name": "profile",
      "description": "OpenID Connect built-in scope: profile",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "${profileScopeConsentText}"
      },
      "protocolMappers": [
        {
          "id": "105347fa-ab68-41f1-ae50-0665754288f2",
          "name": "family name",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-property-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "lastName",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "family_name",
            "jsonType.label": "String"
          }
        },
        {
          "id": "908440f1-58cf-445e-87d5-db0cbd7112c3",
          "name": "updated at",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "updatedAt",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "updated_at",
            "jsonType.label": "long"
          }
        },
        {
          "id": "ee7bee13-4541-42c5-bdf7-d960463e5faa",
          "name": "gender",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "gender",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "gender",
            "jsonType.label": "String"
          }
        },
        {
          "id": "312a848c-217f-4cff-8639-000d31ee82ac",
          "name": "website",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "website",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "website",
            "jsonType.label": "String"
          }
        },
        {
          "id": "f7a2ce83-3491-4f66-a642-a7dd34376669",
          "name": "birthdate",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "birthdate",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "birthdate",
            "jsonType.label": "String"
          }
        },
        {
          "id": "a369a710-e87f-4b32-b996-dcea103094fc",
          "name": "locale",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "locale",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "locale",
            "jsonType.label": "String"
          }
        },
        {
          "id": "419f1c7b-f0c1-45a8-b13a-a9b822762de2",
          "name": "picture",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "picture",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "picture",
            "jsonType.label": "String"
          }
        },
        {
          "id": "4650c310-460e-440d-aee2-4c9e03c4e460",
          "name": "full name",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-full-name-mapper",
          "consentRequired": false,
          "config": {
            "id.token.claim": "true",
            "access.token.claim": "true",
            "userinfo.token.claim": "true"
          }
        },
        {
          "id": "6e95d8b4-351b-40ff-860e-559824723a41",
          "name": "nickname",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "nickname",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "nickname",
            "jsonType.label": "String"
          }
        },
        {
          "id": "9737ccc8-218c-4e62-b2ce-ea74ebfdb57e",
          "name": "username",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-property-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "username",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "preferred_username",
            "jsonType.label": "String"
          }
        },
        {
          "id": "5e3e992a-e480-4414-b113-59c02d0b3529",
          "name": "middle name",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "middleName",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "middle_name",
            "jsonType.label": "String"
          }
        },
        {
          "id": "5562af9b-5cac-466e-8db0-276a32949298",
          "name": "zoneinfo",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "zoneinfo",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "zoneinfo",
            "jsonType.label": "String"
          }
        },
        {
          "id": "289cee40-e040-41f6-a183-f355142614e6",
          "name": "given name",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-property-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "firstName",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "given_name",
            "jsonType.label": "String"
          }
        },
        {
          "id": "fb7185a4-15a4-4eb6-897c-047992ffe8cc",
          "name": "profile",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "profile",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "profile",
            "jsonType.label": "String"
          }
        }
      ]
    },
    {
      "id": "0ba96f50-a3bb-416a-b5b1-939addfd9778",
      "name": "roles",
      "description": "OpenID Connect scope for add user roles to the access token",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "false",
        "display.on.consent.screen": "true",
        "consent.screen.text": "${rolesScopeConsentText}"
      },
      "protocolMappers": [
        {
          "id": "7ddb7b15-e745-4a84-8c94-104037b0891d",
          "name": "realm roles",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "user.attribute": "foo",
            "access.token.claim": "true",
            "claim.name": "realm_access.roles",
            "jsonType.label": "String",
            "multivalued": "true"
          }
        },
        {
          "id": "dda43bc0-fc2c-4d6b-8dc9-7ba0c3f6ad20",
          "name": "client roles",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-client-role-mapper",
          "consentRequired": false,
          "config": {
            "user.attribute": "foo",
            "access.token.claim": "true",
            "claim.name": "resource_access.${client_id}.roles",
            "jsonType.label": "String",
            "multivalued": "true"
          }
        },
        {
          "id": "ff61b366-009c-4966-b132-a328877b6f5c",
          "name": "audience resolve",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-audience-resolve-mapper",
          "consentRequired": false,
          "config": {}
        }
      ]
    },
    {
      "id": "ba862648-6161-462a-b7f7-c9770de40c8b",
      "name": "microprofile-jwt",
      "description": "Microprofile - JWT built-in scope",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "false"
      },
      "protocolMappers": [
        {
          "id": "dc17656f-beba-45d4-a11d-5befa62d1360",
          "name": "upn",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-property-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "username",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "upn",
            "jsonType.label": "String"
          }
        },
        {
          "id": "3dc21136-fe5a-45e4-998b-f9eeef6376e4",
          "name": "groups",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "user.attribute": "foo",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "groups",
            "jsonType.label": "String"
          }
        }
      ]
    },
    {
      "id": "6252f309-2f50-4fd3-b2ce-5836b2a8e307",
      "name": "role_list",
      "description": "SAML role list",
      "protocol": "saml",
      "attributes": {
        "consent.screen.text": "${samlRoleListScopeConsentText}",
        "display.on.consent.screen": "true"
      },
      "protocolMappers": [
        {
          "id": "010bb99c-d7d7-4d1d-bb0d-e23ca7adb443",
          "name": "role list",
          "protocol": "saml",
          "protocolMapper": "saml-role-list-mapper",
          "consentRequired": false,
          "config": {
            "single": "false",
            "attribute.nameformat": "Basic",
            "attribute.name": "Role"
          }
        }
      ]
    },
    {
      "id": "d15ed889-5d55-45d7-9b13-e97e3f9f4cf2",
      "name": "offline_access",
      "description": "OpenID Connect built-in scope: offline_access",
      "protocol": "openid-connect",
      "attributes": {
        "consent.screen.text": "${offlineAccessScopeConsentText}",
        "display.on.consent.screen": "true"
      }
    },
    {
      "id": "308f4c71-1da6-4876-88c4-797eae6ff7f6",
      "name": "web-origins",
      "description": "OpenID Connect scope for add allowed web origins to the access token",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "false",
        "display.on.consent.screen": "false",
        "consent.screen.text": ""
      },
      "protocolMappers": [
        {
          "id": "1a74bd7e-790c-45d9-86a4-38c8bb77bb97",
          "name": "allowed web origins",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-allowed-origins-mapper",
          "consentRequired": false,
          "config": {}
        }
      ]
    },
    {
      "id": "0bdc7828-e7c1-4a47-a25f-4bf64b100443",
      "name": "address",
      "description": "OpenID Connect built-in scope: address",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "${addressScopeConsentText}"
      },
      "protocolMappers": [
        {
          "id": "c624ddd0-5209-4200-b324-5bb9471c22f4",
          "name": "address",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-address-mapper",
          "consentRequired": false,
          "config": {
            "user.attribute.formatted": "formatted",
            "user.attribute.country": "country",
            "user.attribute.postal_code": "postal_code",
            "userinfo.token.claim": "true",
            "user.attribute.street": "street",
            "id.token.claim": "true",
            "user.attribute.region": "region",
            "access.token.claim": "true",
            "user.attribute.locality": "locality"
          }
        }
      ]
    },
    {
      "id": "ced26a1b-f874-43ea-b00e-15469fc4bbfa",
      "name": "email",
      "description": "OpenID Connect built-in scope: email",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "${emailScopeConsentText}"
      },
      "protocolMappers": [
        {
          "id": "350163fd-ad5c-4703-b8b4-cebc6cbc2f4e",
          "name": "email verified",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-property-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "emailVerified",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "email_verified",
            "jsonType.label": "boolean"
          }
        },
        {
          "id": "52f89485-268d-42f6-8df6-310d1cbfa78e",
          "name": "email",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-property-mapper",
          "consentRequired": false,
          "config": {
            "userinfo.token.claim": "true",
            "user.attribute": "email",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "email",
            "jsonType.label": "String"
          }
        }
      ]
    },
    {
      "id": "f14373a9-1727-4472-94a3-a98d95044808",
      "name": "acr",
      "description": "OpenID Connect scope for add acr (authentication context class reference) to the token",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "false",
        "display.on.consent.screen": "false"
      },
      "protocolMappers": [
        {
          "id": "ef5732e3-34dc-41a4-8075-b93d65e7bebc",
          "name": "acr loa level",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-acr-mapper",
          "consentRequired": false,
          "config": {
            "id.token.claim": "true",
            "access.token.claim": "true"
          }
        }
      ]
    }
  ],
  "defaultDefaultClientScopes": [
    "role_list",
    "profile",
    "email",
    "roles",
    "web-origins",
    "acr"
  ],
  "defaultOptionalClientScopes": [
    "offline_access",
    "address",
    "phone",
    "microprofile-jwt"
  ],
  "browserSecurityHeaders": {
    "contentSecurityPolicyReportOnly": "",
    "xContentTypeOptions": "nosniff",
    "xRobotsTag": "none",
    "xFrameOptions": "SAMEORIGIN",
    "contentSecurityPolicy": "frame-src 'self'; frame-ancestors 'self'; object-src 'none';",
    "xXSSProtection": "1; mode=block",
    "strictTransportSecurity": "max-age=31536000; includeSubDomains"
  },
  "smtpServer": {},
  "eventsEnabled": false,
  "eventsListeners": [
    "jboss-logging"
  ],
  "enabledEventTypes": [],
  "adminEventsEnabled": false,
  "adminEventsDetailsEnabled": false,
  "identityProviders": [],
  "identityProviderMappers": [],
  "components": {
    "org.keycloak.services.clientregistration.policy.ClientRegistrationPolicy": [
      {
        "id": "4eb7ee4c-782c-47c3-b83f-8f0b2bf10a60",
        "name": "Full Scope Disabled",
        "providerId": "scope",
        "subType": "anonymous",
        "subComponents": {},
        "config": {}
      },
      {
        "id": "032b9407-0222-4b5d-ac0d-e8d2432cd097",
        "name": "Max Clients Limit",
        "providerId": "max-clients",
        "subType": "anonymous",
        "subComponents": {},
        "config": {
          "max-clients": [
            "200"
          ]
        }
      },
      {
        "id": "60bb0165-ca16-4b17-8f77-b3e07cf64cd1",
        "name": "Allowed Client Scopes",
        "providerId": "allowed-client-templates",
        "subType": "anonymous",
        "subComponents": {},
        "config": {
          "allow-default-scopes": [
            "true"
          ]
        }
      },
      {
        "id": "615d5f4c-a4db-4d97-8007-07d68998375a",
        "name": "Allowed Protocol Mapper Types",
        "providerId": "allowed-protocol-mappers",
        "subType": "anonymous",
        "subComponents": {},
        "config": {
          "allowed-protocol-mapper-types": [
            "oidc-usermodel-property-mapper",
            "oidc-usermodel-attribute-mapper",
            "oidc-sha256-pairwise-sub-mapper",
            "oidc-address-mapper",
            "saml-role-list-mapper",
            "saml-user-property-mapper",
            "oidc-full-name-mapper",
            "saml-user-attribute-mapper"
          ]
        }
      },
      {
        "id": "dadfd16a-3e99-405f-aaca-8301fcdcc45f",
        "name": "Consent Required",
        "providerId": "consent-required",
        "subType": "anonymous",
        "subComponents": {},
        "config": {}
      },
      {
        "id": "65063830-588a-413c-8bfc-5fcee894dca4",
        "name": "Trusted Hosts",
        "providerId": "trusted-hosts",
        "subType": "anonymous",
        "subComponents": {},
        "config": {
          "host-sending-registration-request-must-match": [
            "true"
          ],
          "client-uris-must-match": [
            "true"
          ]
        }
      },
      {
        "id": "c0e3e60a-51de-44d6-ad60-c5338779bace",
        "name": "Allowed Protocol Mapper Types",
        "providerId": "allowed-protocol-mappers",
        "subType": "authenticated",
        "subComponents": {},
        "config": {
          "allowed-protocol-mapper-types": [
            "saml-role-list-mapper",
            "saml-user-attribute-mapper",
            "oidc-full-name-mapper",
            "oidc-sha256-pairwise-sub-mapper",
            "oidc-usermodel-attribute-mapper",
            "oidc-address-mapper",
            "saml-user-property-mapper",
            "oidc-usermodel-property-mapper"
          ]
        }
      },
      {
        "id": "723b5129-2b1f-4040-83b2-2bb9cf6ec0b9",
        "name": "Allowed Client Scopes",
        "providerId": "allowed-client-templates",
        "subType": "authenticated",
        "subComponents": {},
        "config": {
          "allow-default-scopes": [
            "true"
          ]
        }
      }
    ],
    "org.keycloak.userprofile.UserProfileProvider": [
      {
        "id": "bf8c9ea1-00f5-436d-922a-16a911685274",
        "providerId": "declarative-user-profile",
        "subComponents": {},
        "config": {}
      }
    ],
    "org.keycloak.keys.KeyProvider": [
      {
        "id": "fe87e682-8e8a-4d8a-965f-8fd55ecc755a",
        "name": "rsa-enc-generated",
        "providerId": "rsa-enc-generated",
        "subComponents": {},
        "config": {
          "priority": [
            "100"
          ],
          "algorithm": [
            "RSA-OAEP"
          ]
        }
      },
      {
        "id": "6c748619-0a4d-4dca-b81a-163b438b8ffd",
        "name": "aes-generated",
        "providerId": "aes-generated",
        "subComponents": {},
        "config": {
          "priority": [
            "100"
          ]
        }
      },
      {
        "id": "cb072e80-bb37-43c4-b818-30e07d3c98ac",
        "name": "rsa-generated",
        "providerId": "rsa-generated",
        "subComponents": {},
        "config": {
          "priority": [
            "100"
          ]
        }
      },
      {
        "id": "318235a8-141e-49b0-b859-4f531bcb2bbe",
        "name": "hmac-generated",
        "providerId": "hmac-generated",
        "subComponents": {},
        "config": {
          "priority": [
            "100"
          ],
          "algorithm": [
            "HS256"
          ]
        }
      }
    ]
  },
  "internationalizationEnabled": false,
  "supportedLocales": [],
  "authenticationFlows": [
    {
      "id": "722d2a3f-68d8-4e18-a632-d0e5f2a4eabf",
      "alias": "Account verification options",
      "description": "Method with which to verity the existing account",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "idp-email-verification",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "ALTERNATIVE",
          "priority": 20,
          "autheticatorFlow": true,
          "flowAlias": "Verify Existing Account by Re-authentication",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "de77ac53-1ea8-4a38-8c1d-e157fae8e738",
      "alias": "Authentication Options",
      "description": "Authentication options.",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "basic-auth",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "basic-auth-otp",
          "authenticatorFlow": false,
          "requirement": "DISABLED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "auth-spnego",
          "authenticatorFlow": false,
          "requirement": "DISABLED",
          "priority": 30,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "9e139ae0-b4ac-4068-8abe-f80af9da8276",
      "alias": "Browser - Conditional OTP",
      "description": "Flow to determine if the OTP is required for the authentication",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "conditional-user-configured",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "auth-otp-form",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "e7395231-c20d-4502-9049-262f48214317",
      "alias": "Direct Grant - Conditional OTP",
      "description": "Flow to determine if the OTP is required for the authentication",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "conditional-user-configured",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "direct-grant-validate-otp",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "fcc6c96e-9498-433f-b505-dcee5195cfce",
      "alias": "First broker login - Conditional OTP",
      "description": "Flow to determine if the OTP is required for the authentication",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "conditional-user-configured",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "auth-otp-form",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "6b426d70-7f21-4960-b833-10e1e4a03039",
      "alias": "Handle Existing Account",
      "description": "Handle what to do if there is existing account with same email/username like authenticated identity provider",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "idp-confirm-link",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": true,
          "flowAlias": "Account verification options",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "4c062840-ae7d-4796-b836-4b0724dac901",
      "alias": "Reset - Conditional OTP",
      "description": "Flow to determine if the OTP should be reset or not. Set to REQUIRED to force.",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "conditional-user-configured",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "reset-otp",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "7f44c849-651f-442a-a0b2-b81b0d914a17",
      "alias": "User creation or linking",
      "description": "Flow for the existing/non-existing user alternatives",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticatorConfig": "create unique user config",
          "authenticator": "idp-create-user-if-unique",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "ALTERNATIVE",
          "priority": 20,
          "autheticatorFlow": true,
          "flowAlias": "Handle Existing Account",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "02260cd0-ecd1-4a58-8b79-702c08800161",
      "alias": "Verify Existing Account by Re-authentication",
      "description": "Reauthentication of existing account",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "idp-username-password-form",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "CONDITIONAL",
          "priority": 20,
          "autheticatorFlow": true,
          "flowAlias": "First broker login - Conditional OTP",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "69395d91-c901-48d2-a398-03a8a21f856a",
      "alias": "browser",
      "description": "browser based authentication",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "auth-cookie",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "auth-spnego",
          "authenticatorFlow": false,
          "requirement": "DISABLED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "identity-provider-redirector",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 25,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "ALTERNATIVE",
          "priority": 30,
          "autheticatorFlow": true,
          "flowAlias": "forms",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "0f1f98a4-f705-4420-a18e-009267d4fdb8",
      "alias": "clients",
      "description": "Base authentication for clients",
      "providerId": "client-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "client-secret",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "client-jwt",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "client-secret-jwt",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 30,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "client-x509",
          "authenticatorFlow": false,
          "requirement": "ALTERNATIVE",
          "priority": 40,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "b5d7ef84-cd59-4bc2-be3d-5ca94aca2191",
      "alias": "direct grant",
      "description": "OpenID Connect Resource Owner Grant",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "direct-grant-validate-username",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "direct-grant-validate-password",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "CONDITIONAL",
          "priority": 30,
          "autheticatorFlow": true,
          "flowAlias": "Direct Grant - Conditional OTP",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "54c96638-9022-4a36-97cf-05887dd2c7ba",
      "alias": "docker auth",
      "description": "Used by Docker clients to authenticate against the IDP",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "docker-http-basic-authenticator",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "bd19df49-e383-4934-a5eb-062916a97713",
      "alias": "first broker login",
      "description": "Actions taken after first broker login with identity provider account, which is not yet linked to any Keycloak account",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticatorConfig": "review profile config",
          "authenticator": "idp-review-profile",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": true,
          "flowAlias": "User creation or linking",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "c807846d-bca3-4199-8668-936ab37255a4",
      "alias": "forms",
      "description": "Username, password, otp and other auth forms.",
      "providerId": "basic-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "auth-username-password-form",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "CONDITIONAL",
          "priority": 20,
          "autheticatorFlow": true,
          "flowAlias": "Browser - Conditional OTP",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "5bbeb064-c252-4018-9012-831b2d2a3bf2",
      "alias": "http challenge",
      "description": "An authentication flow based on challenge-response HTTP Authentication Schemes",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "no-cookie-redirect",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": true,
          "flowAlias": "Authentication Options",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "2d2d5aa8-4e14-4b70-80a1-3ae85eed237b",
      "alias": "registration",
      "description": "registration flow",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "registration-page-form",
          "authenticatorFlow": true,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": true,
          "flowAlias": "registration form",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "9391170e-5dec-4b3d-90d7-c7eebe48ef32",
      "alias": "registration form",
      "description": "registration form",
      "providerId": "form-flow",
      "topLevel": false,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "registration-user-creation",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "registration-profile-action",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 40,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "registration-password-action",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 50,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "registration-recaptcha-action",
          "authenticatorFlow": false,
          "requirement": "DISABLED",
          "priority": 60,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "47058bcd-68df-44b3-b358-e64e28914434",
      "alias": "reset credentials",
      "description": "Reset credentials for a user if they forgot their password or something",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "reset-credentials-choose-user",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "reset-credential-email",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 20,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticator": "reset-password",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 30,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        },
        {
          "authenticatorFlow": true,
          "requirement": "CONDITIONAL",
          "priority": 40,
          "autheticatorFlow": true,
          "flowAlias": "Reset - Conditional OTP",
          "userSetupAllowed": false
        }
      ]
    },
    {
      "id": "107d4293-86c0-412f-bfcc-eb4cec5f3fd6",
      "alias": "saml ecp",
      "description": "SAML ECP Profile Authentication Flow",
      "providerId": "basic-flow",
      "topLevel": true,
      "builtIn": true,
      "authenticationExecutions": [
        {
          "authenticator": "http-basic-authenticator",
          "authenticatorFlow": false,
          "requirement": "REQUIRED",
          "priority": 10,
          "autheticatorFlow": false,
          "userSetupAllowed": false
        }
      ]
    }
  ],
  "authenticatorConfig": [
    {
      "id": "09f5c32e-d713-4bb8-b275-7f729e9d8e50",
      "alias": "create unique user config",
      "config": {
        "require.password.update.after.registration": "false"
      }
    },
    {
      "id": "9a126ce6-ef04-4101-bf3a-dce87d7c42d7",
      "alias": "review profile config",
      "config": {
        "update.profile.on.first.login": "missing"
      }
    }
  ],
  "requiredActions": [
    {
      "alias": "CONFIGURE_TOTP",
      "name": "Configure OTP",
      "providerId": "CONFIGURE_TOTP",
      "enabled": true,
      "defaultAction": false,
      "priority": 10,
      "config": {}
    },
    {
      "alias": "TERMS_AND_CONDITIONS",
      "name": "Terms and Conditions",
      "providerId": "TERMS_AND_CONDITIONS",
      "enabled": false,
      "defaultAction": false,
      "priority": 20,
      "config": {}
    },
    {
      "alias": "UPDATE_PASSWORD",
      "name": "Update Password",
      "providerId": "UPDATE_PASSWORD",
      "enabled": true,
      "defaultAction": false,
      "priority": 30,
      "config": {}
    },
    {
      "alias": "UPDATE_PROFILE",
      "name": "Update Profile",
      "providerId": "UPDATE_PROFILE",
      "enabled": true,
      "defaultAction": false,
      "priority": 40,
      "config": {}
    },
    {
      "alias": "VERIFY_EMAIL",
      "name": "Verify Email",
      "providerId": "VERIFY_EMAIL",
      "enabled": true,
      "defaultAction": false,
      "priority": 50,
      "config": {}
    },
    {
      "alias": "delete_account",
      "name": "Delete Account",
      "providerId": "delete_account",
      "enabled": false,
      "defaultAction": false,
      "priority": 60,
      "config": {}
    },
    {
      "alias": "webauthn-register",
      "name": "Webauthn Register",
      "providerId": "webauthn-register",
      "enabled": true,
      "defaultAction": false,
      "priority": 70,
      "config": {}
    },
    {
      "alias": "webauthn-register-passwordless",
      "name": "Webauthn Register Passwordless",
      "providerId": "webauthn-register-passwordless",
      "enabled": true,
      "defaultAction": false,
      "priority": 80,
      "config": {}
    },
    {
      "alias": "update_user_locale",
      "name": "Update User Locale",
      "providerId": "update_user_locale",
      "enabled": true,
      "defaultAction": false,
      "priority": 1000,
      "config": {}
    },
    {
      "alias": "VERIFY_PROFILE",
      "name": "Verify Profile",
      "providerId": "VERIFY_PROFILE",
      "enabled": true,
      "defaultAction": false,
      "priority": 1001,
      "config": {}
    }
  ],
  "browserFlow": "browser",
  "registrationFlow": "registration",
  "directGrantFlow": "direct grant",
  "resetCredentialsFlow": "reset credentials",
  "clientAuthenticationFlow": "clients",
  "dockerAuthenticationFlow": "docker auth",
  "attributes": {
    "cibaBackchannelTokenDeliveryMode": "poll",
    "cibaExpiresIn": "120",
    "cibaAuthRequestedUserHint": "login_hint",
    "oauth2DeviceCodeLifespan": "600",
    "oauth2DevicePollingInterval": "5",
    "clientOfflineSessionMaxLifespan": "0",
    "clientSessionIdleTimeout": "0",
    "parRequestUriLifespan": "60",
    "clientSessionMaxLifespan": "0",
    "clientOfflineSessionIdleTimeout": "0",
    "cibaInterval": "5",
    "realmReusableOtpCode": "false"
  },
  "keycloakVersion": "21.1.0",
  "userManagedAccessAllowed": false,
  "clientProfiles": {
    "profiles": []
  },
  "clientPolicies": {
    "policies": []
  }
}
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
