# Todo App

A full-stack Todo application built with React and ASP.NET Core.

## Tech Stack

* React + JavaScript + Vite
* ASP.NET Core Web API (.NET 10)
* Entity Framework Core
* Microsoft SQL Server
* C#
* Git / GitHub
* Postman

## Features

* Create todos
* View todos
* Edit todos
* Delete todos
* Complete / uncomplete todos
* Store todos in SQL Server
* REST API
* DTOs for API requests and responses

## How it works

```text
React
  ↓ HTTP / JSON
ASP.NET Core Web API
  ↓ Entity Framework Core
SQL Server
```

The React frontend sends requests to the ASP.NET Core API. The API handles the requests and uses Entity Framework Core to read and modify the SQL Server database.

## Project Structure

```text
WebApplication_HBA/
├── Controllers/
├── Data/
├── DTOs/
├── Models/
└── todo-frontend/
    └── src/
        ├── components/
        ├── services/
        └── App.jsx
```

## Running locally

### Backend

Open the project in Visual Studio and run the ASP.NET Core API.

API:

```text
https://localhost:7189
```

### Frontend

Go to the frontend folder:

```bash
cd todo-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

The backend needs to be running for the frontend to work.

## API

| Method | Endpoint          | Action        |
| ------ | ----------------- | ------------- |
| GET    | `/api/Todos`      | Get all todos |
| GET    | `/api/Todos/{id}` | Get one todo  |
| POST   | `/api/Todos`      | Create todo   |
| PUT    | `/api/Todos/{id}` | Update todo   |
| DELETE | `/api/Todos/{id}` | Delete todo   |

## Database Model

A Todo contains:

* `Id`
* `Title`
* `Description`
* `IsCompleted`
* `CreatedAt`
* `UpdatedAt`

## Status

Currently working on the UI and final project polish.
