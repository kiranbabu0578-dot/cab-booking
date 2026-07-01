# Backend Structure – Cab Booking System

## Overview

The backend of the Cab Booking System is developed using **Node.js**, **Express.js**, and **MongoDB**. It follows a modular folder structure to improve code organization, maintainability, and scalability. Each folder has a specific responsibility within the application.

---

# 1. controllers/

### Purpose

The **controllers** folder contains the business logic for handling client requests. Each controller manages a specific feature of the application.

### Files

#### adminController.js

**Responsibilities**

* Admin login
* Manage users
* Manage drivers
* Add, update, or remove vehicles
* Monitor bookings

#### bookingController.js

**Responsibilities**

* Book a cab
* Cancel a booking
* Retrieve booking history
* Update booking status

#### carController.js

**Responsibilities**

* Add new cab details
* Update cab information
* Delete cab records
* Display available cabs

#### userController.js

**Responsibilities**

* User registration
* User login
* View and update user profile
* Manage user information

---

# 2. db/config.js

### Purpose

The **config.js** file establishes the connection between the application and the MongoDB database using Mongoose.

### Responsibilities

* Connect to MongoDB.
* Handle database connection errors.
* Export the database connection for use throughout the application.

### Real-Life Example

Whenever the server starts, it first connects to the MongoDB database before processing any requests.

---

# 3. middlewares/

### Purpose

Middleware functions execute before the request reaches the controller.

### Files

#### authMiddleware.js

**Responsibilities**

* Verify JWT tokens.
* Authenticate users and administrators.
* Protect private API routes.

#### multer.js

**Responsibilities**

* Handle image uploads.
* Store uploaded vehicle images.
* Validate uploaded files.

### Real-Life Example

Only authenticated users can book rides, and administrators can upload vehicle images securely.

---

# 4. models/

### Purpose

The **models** folder defines the MongoDB collections using Mongoose schemas.

### Files

#### AdminSchema.js

Stores administrator information.

#### UserSchema.js

Stores user account details.

#### CarSchema.js

Stores vehicle information such as model, number, type, and image.

#### MyBookingSchema.js

Stores booking information and connects users with their booked rides.

---

# 5. routes/

### Purpose

The **routes** folder defines API endpoints and maps them to the appropriate controller functions.

### Files

#### adminRoutes.js

Handles:

* Admin login
* User management
* Vehicle management

#### userRoutes.js

Handles:

* User registration
* User login
* User profile

#### carRoutes.js

Handles:

* View available cabs
* Add cab
* Edit cab
* Delete cab

#### bookingRoutes.js

Handles:

* Book a ride
* Cancel booking
* View booking history

---

# 6. uploads/

### Purpose

The **uploads** folder stores files uploaded by users or administrators.

### Responsibilities

* Store vehicle images.
* Store supporting documents.
* Work together with **multer.js** for file management.

---

# Entry Point – server.js

### Purpose

The **server.js** file is the main entry point of the backend application.

### Responsibilities

* Initialize the Express server.
* Connect to MongoDB using **db/config.js**.
* Configure middleware such as **express.json()** and **cors**.
* Register all application routes.
* Start the server on a specified port (for example, **8000**).

### Application Flow

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
Response to Client
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

# Conclusion

The backend structure of the Cab Booking System follows a modular architecture that separates controllers, models, routes, middleware, and database configuration into dedicated folders. This organization improves readability, simplifies maintenance, supports scalability, and allows multiple developers to work efficiently on different parts of the project.
