# Development and Explanation – Cab Booking System

## Overview

The backend of the Cab Booking System is organized into separate modules to improve maintainability, scalability, and readability. Each folder has a specific responsibility and works together to provide a complete backend solution using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

---

# 1. controllers/

### Purpose

The **controllers** folder contains the business logic of the application. Controllers receive requests from routes, process the request, communicate with the database through models, and return appropriate responses.

### Files

#### adminController.js

**Responsibilities**

* Admin login and authentication.
* Manage users and drivers.
* Add, update, and delete vehicles.
* Monitor bookings and system activities.

---

#### bookingController.js

**Responsibilities**

* Book a cab.
* Cancel bookings.
* Retrieve booking history.
* Update booking status.

---

#### carController.js

**Responsibilities**

* Add new vehicles.
* Update cab details.
* Delete vehicle records.
* Display available cabs.

---

#### userController.js

**Responsibilities**

* User registration.
* User login.
* View user profile.
* Update profile information.

---

# 2. db/config.js

### Purpose

The **config.js** file is responsible for establishing a connection between the application and the MongoDB database using **Mongoose**.

### Responsibilities

* Connect to MongoDB.
* Handle connection errors.
* Export the database connection.
* Maintain database availability.

### Real-Life Example

Whenever the server starts, it first connects to MongoDB before accepting any client requests.

---

# 3. middlewares/

### Purpose

Middleware functions execute before controller functions and perform common operations such as authentication and file uploading.

### Files

#### authMiddleware.js

**Responsibilities**

* Verify JWT tokens.
* Authenticate users and administrators.
* Protect private API routes.

---

#### multer.js

**Responsibilities**

* Upload vehicle images.
* Upload required documents.
* Validate uploaded files.
* Store uploaded files in the uploads folder.

---

# 4. models/

### Purpose

The **models** folder contains Mongoose schemas that define the structure of MongoDB collections.

### Files

#### AdminSchema.js

Stores administrator details.

#### UserSchema.js

Stores customer information.

#### CarSchema.js

Stores cab information including vehicle model, type, number, and image.

#### MyBookingSchema.js

Stores booking details and maintains the relationship between users and booked vehicles.

---

# 5. routes/

### Purpose

Routes define REST API endpoints and connect HTTP requests to their corresponding controller functions.

### Files

#### adminRoutes.js

Provides APIs for:

* Admin login.
* User management.
* Vehicle management.

---

#### userRoutes.js

Provides APIs for:

* User registration.
* User login.
* User profile.

---

#### carRoutes.js

Provides APIs for:

* View available cabs.
* Add vehicles.
* Edit vehicle details.
* Delete vehicles.

---

#### bookingRoutes.js

Provides APIs for:

* Book a cab.
* Cancel bookings.
* Retrieve booking history.

---

# 6. uploads/

### Purpose

The **uploads** folder stores files uploaded by users or administrators.

### Responsibilities

* Store vehicle images.
* Store user documents.
* Work together with **multer.js** for file management.

---

# Entry Point – server.js

### Purpose

The **server.js** file is the main entry point of the backend application.

### Responsibilities

* Initialize the Express server.
* Connect to MongoDB using **db/config.js**.
* Configure middleware such as **express.json()** and **cors**.
* Register all route files.
* Start the server on a specified port (for example, **8000**).

---

# Backend Request Flow

```text
Client Request
       │
       ▼
Routes
       │
       ▼
Controllers
       │
       ▼
Models
       │
       ▼
MongoDB Database
       │
       ▼
Response Sent to Client
```

---

# Backend Folder Structure

```text
server/
│
├── controllers/
│   ├── adminController.js
│   ├── bookingController.js
│   ├── carController.js
│   └── userController.js
│
├── db/
│   └── config.js
│
├── middlewares/
│   ├── authMiddleware.js
│   └── multer.js
│
├── models/
│   ├── AdminSchema.js
│   ├── UserSchema.js
│   ├── CarSchema.js
│   └── MyBookingSchema.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── bookingRoutes.js
│   ├── carRoutes.js
│   └── userRoutes.js
│
├── uploads/
│
├── server.js
└── package.json
```

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Git
* GitHub

---

# Conclusion

The backend of the Cab Booking System follows a modular architecture by separating controllers, models, routes, middleware, database configuration, and uploads into dedicated folders. This structure improves code readability, simplifies maintenance, supports scalability, and allows developers to work efficiently on different components of the application.
