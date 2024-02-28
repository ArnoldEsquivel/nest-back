<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Introduction

Welcome to the documentation for our Nest.js backend project! This project serves as the backend API for our movie application frontend implemented in Next.js. Our backend is documented using Swagger, and you can access the documentation at the `/docs` endpoint. The backend consists of a main module and a movies module, where requests are handled by a controller and then processed by a service. Both the endpoints and entities are documented in Swagger for easy reference.


## Backend Features Validation and Justification

This repository contains the backend application developed in Node.js, utilizing the Nest.js framework. Nest.js was chosen for its comprehensive and scalable architecture, facilitating modularization of the application. This approach enhances the organization of logic by managing requirements across different layers such as controllers, services, modules, and DTOs for data integrity and validation. Additionally, it leverages typed variables for environment configurations to prevent silent errors.

## Features

- **Modular Architecture:** Utilizes Nest.js to modularize the application, enhancing maintainability and scalability.
- **DTOs for Data Integrity:** Implements Data Transfer Objects (DTOs) for ensuring data integrity and validation.
- **Automatic Documentation:** Utilizes Swagger for automatic and comprehensive API documentation.
- **Code Quality Assurance:** Incorporates Prettier, ESLint, and Commitlint to enforce code structure, formatting, and documentation standards.

This section outlines the validation and justification for the features implemented in the backend application.


## Installation

> Ensure that the backend server is running alongside the Next.js frontend. You can find the frontend repository [here](<https://github.com/ArnoldEsquivel/next-front.git>).

To set up the backend, follow these steps:

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/ArnoldEsquivel/nest-back.git
    ```

2. Navigate to the backend directory in your terminal.
    ```bash
    cd nest-back
    ```

3. Run `npm install` to install the necessary dependencies.
    ```bash
    npm install
    ```

4. Start the backend server by running `npm run start:dev`.
    ```bash
    npm run start:dev
    ```

## Usage

Once the server is up and running, you can access the API documentation at [http://localhost:3000/docs](http://localhost:3000/docs) in your web browser.

### Main Module

#### Endpoints
- The main module provides various endpoints for general functionality.

#### Entities
- Entities related to the main module are documented in Swagger.

### Movies Module

#### Endpoints
- The movies module handles endpoints related to movie data.

#### Entities
- Entities related to movie data are documented in Swagger.

## Note
- The backend server should be running in order to ensure proper functionality of the frontend application. Please ensure that the backend server is started before interacting with the frontend components.

> Ensure that the backend server is running alongside the Next.js frontend. You can find the frontend repository [here](<https://github.com/ArnoldEsquivel/next-front.git>).

That's it! You're now ready to use our Nest.js backend API for the movie application. If you have any further questions or encounter any issues, please refer to the documentation or reach out to our support team. Happy coding!
