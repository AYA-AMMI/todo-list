# Todo List App — Full Stack

A full-stack Todo List application built with **Express.js**, **React.js**, and **MongoDB**.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Vite, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| DevOps | Docker, Docker Compose |

---

todo-list-app/
├── backend/
│   ├── models/
│   │   └── task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── app.js
│   ├── docker-compose.yml
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── TodoApp/
│   │   │   ├── TodoApp.jsx
│   │   │   └── TodoApp.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md

---

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

---

## Getting Started

### Prerequisites
- Node.js
- Docker & Docker Compose

### 1. Start MongoDB
```bash
cd backend
docker-compose up -d
```

### 2. Start Backend
```bash
cd backend
npm install
npm run start
```
Server runs on **http://localhost:3000**

### 3. Start Frontend
```bash
cd frontend
npm install
npm run dev
```
App runs on **http://localhost:5173**

---

## Features

-  Add tasks with title and description
-  Mark tasks as completed
-  Delete tasks
-  Persistent storage with MongoDB