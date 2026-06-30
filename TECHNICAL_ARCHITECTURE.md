# Technical Architecture – Cab Booking System

## Overview

The Cab Booking System follows a layered architecture using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Each layer has a specific responsibility, making the application modular, maintainable, and scalable.

---

## 1. Client Layer (React.js)

The Client Layer is the frontend of the application where users interact with the system.

### Features

* User Login and Signup
* Cab Selection
* Ride Booking Form
* Live Ride Tracking
* Booking History
* User Profile

### Responsibilities

* Display the user interface.
* Collect user input.
* Send API requests to the backend.
* Display responses received from the server.

---

## 2. API Layer (Express.js)

The API Layer acts as the communication bridge between the frontend and backend.

### Sample REST APIs

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| POST   | /api/rides/book | Book a new ride    |
| GET    | /api/users/:id  | Get user profile   |
| PUT    | /api/rides/:id  | Update ride status |
| DELETE | /api/rides/:id  | Cancel a ride      |

### Responsibilities

* Receive requests from the React frontend.
* Validate incoming data.
* Forward requests to the Service Layer.
* Return responses to the frontend.

---

## 3. Service Layer

The Service Layer contains the business logic of the application.

### Responsibilities

* Calculate ride fare based on distance and time.
* Match riders with the nearest available driver.
* Update ride status.
* Manage ride tracking.
* Apply business rules and workflows.

---

## 4. Data Access Layer (Mongoose ODM)

The Data Access Layer communicates with MongoDB using Mongoose.

### Responsibilities

* Create database schemas and models.
* Insert new records.
* Retrieve existing records.
* Update ride and user information.
* Delete records when required.

Collections include:

* Users
* Drivers
* Rides
* Bookings

---

# Data Flow

1. User opens the React application.
2. User selects pickup and destination locations.
3. React sends a **POST** request to **/api/rides/book**.
4. Express.js receives the request.
5. The Service Layer calculates the fare and finds the nearest available driver.
6. Mongoose stores the booking information in MongoDB.
7. The server returns a success response.
8. React displays the booking confirmation and ride status.

---

# Architecture Diagram

```text
             User
               │
               ▼
      React.js Frontend
               │
        HTTP/API Requests
               │
               ▼
        Express.js Server
               │
         Service Layer
               │
               ▼
      Mongoose (ODM)
               │
               ▼
          MongoDB Database
               │
               ▼
        Response to Client
```

---

## Technologies Used

* React.js
* Node.js
* Express.js
* MongoDB
* Mongoose
* Git
* GitHub

---

## Conclusion

The layered architecture separates the user interface, business logic, API communication, and database operations. This design improves maintainability, scalability, and code organization while making the Cab Booking System easier to develop and manage.
