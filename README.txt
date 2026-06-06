# Todo List App — Full Stack

A full-stack Todo List application built with **React.js**, **Express.js**, and **MongoDB**. The application allows users to create, update, complete, and delete tasks through a modern web interface.

---

## Tech Stack

| Layer    | Technology             |
| -------- | ---------------------- |
| Frontend | React.js, Vite, CSS    |
| Backend  | Node.js, Express.js    |
| Database | MongoDB, Mongoose      |
| DevOps   | Docker, Docker Compose |

---

## Project Structure

```text
todo-list-app/
├── backend/
│   ├── models/
│   │   └── task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── TodoApp/
│   │   │   ├── TodoApp.jsx
│   │   │   └── TodoApp.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## REST API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Retrieve all tasks      |
| POST   | `/tasks`     | Create a new task       |
| PUT    | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task           |

---

## Getting Started

### Prerequisites

* Node.js (v18 or later)
* Docker & Docker Compose
* MongoDB (or Dockerized MongoDB)

---

### 1. Start MongoDB

```bash
docker-compose up -d
```

---

### 2. Start the Backend

```bash
cd backend
npm install
npm start
```

Backend server runs at:

```text
http://localhost:3000
```

---

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend application runs at:

```text
http://localhost:5173
```

---

## Features

* Create new tasks
* Update existing tasks
* Mark tasks as completed
* Delete tasks
* Store data persistently using MongoDB
* RESTful API architecture
* Responsive React user interface
* Dockerized MongoDB environment


---
