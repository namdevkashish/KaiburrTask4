# Task 4: Web UI forms

This repository contains a basic web user interface (UI) frontend for an application that provides a REST API for managing "server" objects. The REST API is implemented in Java and uses MongoDB as the database for storing server objects. The web UI allows users to interact with the API by performing actions such as searching, creating, and deleting server records.

## Screenshots

Here are some screenshots of the web UI:

### Home Page
![Home Page](kaiburr_task4/screenshots/Home.png)

### Server Form
![Server Form](kaiburr_task4/screenshots/ServerForm.png)

### Servers
![Servers](kaiburr_task4/screenshots/Servers.png)

## Features

- **GET Servers**: Retrieves all server records from the database. If no parameters are passed, it returns all servers. When a server ID is passed as a parameter, it returns a single server or a 404 error if the server does not exist.

- **PUT a Server**: Allows users to create a new server by providing the server details as a JSON-encoded message body. Example JSON structure:
  ```json
  {
    "name": "my centos",
    "id": "123",
    "language": "java",
    "framework": "django"
  }
  ```

- **DELETE a Server**: Deletes a server record based on the server ID provided as a parameter.

- **GET (Find) Servers by Name**: Searches for server records that contain the provided string in their names. It returns one or more servers found or a 404 error if nothing is found.
