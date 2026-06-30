# MVC Pattern – Cab Booking System

## Overview

The Cab Booking System follows the **Model-View-Controller (MVC)** architectural pattern. MVC is a software design pattern that separates the application into three independent layers: **Model**, **View**, and **Controller**. This separation improves code organization, maintainability, scalability, and team collaboration.

---

# Model Layer (Data Layer)

### Purpose

The Model Layer is responsible for managing the application's data and interacting with the MongoDB database. It defines the structure of the data using **Mongoose Schemas** and performs all database operations.

### Responsibilities

* Define database schemas.
* Create Mongoose models.
* Insert, update, retrieve, and delete data.
* Maintain relationships between collections.
* Validate data before storing it.

### Real-Life Example

When a user books a cab, the Ride model stores details such as pickup location, destination, fare, driver information, and booking status in the MongoDB database.

---

# Controller Layer

### Purpose

The Controller Layer acts as the bridge between the client requests and the database. It processes incoming requests, applies business logic, communicates with the Model Layer, and sends responses back to the client.

### Responsibilities

* Receive HTTP requests.
* Validate user input.
* Execute business logic.
* Call Model functions.
* Return appropriate responses.

### Real-Life Example

When a user clicks the **Book Cab** button, the controller receives the booking request, verifies the information, creates a new ride using the Ride model, and returns a booking confirmation.

---

# View Layer (Routing Layer)

### Purpose

In a REST API-based backend, the View Layer is represented by the routing layer. Routes define API endpoints and determine which controller function should be executed for each HTTP request.

### Responsibilities

* Define API endpoints.
* Receive client requests.
* Forward requests to the appropriate controller.
* Return responses to the frontend.

### Example API Routes

| HTTP Method | Endpoint        | Description        |
| ----------- | --------------- | ------------------ |
| POST        | /api/rides/book | Book a new ride    |
| GET         | /api/users/:id  | Fetch user profile |
| PUT         | /api/rides/:id  | Update ride status |
| DELETE      | /api/rides/:id  | Cancel a ride      |

### Real-Life Example

A user requests their booking history. The route receives the **GET** request and forwards it to the controller, which retrieves the data from the database and returns it to the frontend.

---

# MVC Workflow

```text
User
   │
   ▼
React Frontend (View)
   │
HTTP Request
   │
   ▼
Express Routes (View Layer)
   │
   ▼
Controller Layer
   │
   ▼
Model Layer (Mongoose)
   │
   ▼
MongoDB Database
   │
   ▼
Response
   │
   ▼
React Frontend
```

---

# Advantages of Using MVC

### Separation of Concerns

Each layer has a specific responsibility, making the application easier to understand and maintain.

### Scalability

New modules, features, and APIs can be added without affecting the existing application structure.

### Reusability

Controllers and Models can be reused across multiple routes, reducing code duplication.

### Easy Testing

Each layer can be tested independently, making debugging and maintenance more efficient.

### Team Collaboration

Frontend developers, backend developers, and database developers can work simultaneously on different layers with minimal conflicts.

---

# Conclusion

The MVC architecture provides a clean and organized structure for the Cab Booking System. By separating the application into Model, View, and Controller layers, the project becomes easier to develop, maintain, test, and scale. This architecture is widely adopted in modern web applications because it promotes modular development and improves overall software quality.
