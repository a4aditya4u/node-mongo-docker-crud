# CRUD App with MongoDB, Node.js, and Docker Compose

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and MongoDB, and containerized using Docker Compose. The application allows you to perform CRUD operations on a collection of data stored in MongoDB.

## Prerequisites

Before you can run this application, you will need to have the following installed on your system:

- Docker
- Docker Compose

## Getting started

To install and run the application, follow these steps:

1. Clone this repository to your local machine:

```sh
git clone https://github.com/a4aditya4u/node-mongo-docker-crud.git
```
2. Change into the project directory:

```sh
cd node-mongo-docker-crud
```
3. Build the Docker images and start the containers using Docker Compose:

```sh
docker-compose up --build
```
This will build the Docker images and start the containers.

4. Open your web browser and navigate to http://localhost:3000.

You should see the app running.

## Usage

The app allows you to perform the following actions:

- **Create:** Add a new record to the database.
- **Read:** Retrieve a record from the database.
- **Update:** Update an existing record in the database.
- **Delete:** Remove a record from the database.

To perform these actions, follow these steps:

1. Your app is listen at PORT 3000

2. Use the POSTMAN to interact with the app.

## API Endpoints
The following API endpoints are available:

- **GET users/**  Returns a list of all items in the collection.
- **GET users/:id** Returns the item with the specified ID.
- **POST users/** Adds a new item to the collection.
- **PUT users/:id** Updates the item with the specified ID.
- **DELETE users/:id** Deletes the item with the specified ID.
