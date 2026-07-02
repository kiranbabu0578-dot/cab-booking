# Frontend Development and Explanation – Cab Booking System

## Overview

The frontend of the Cab Booking System is developed using **React.js**. It provides an interactive and user-friendly interface for both customers and administrators. The frontend communicates with the backend using **Axios** and allows users to perform booking operations while enabling administrators to manage the entire system.

---

# 1. Home Component

### Purpose

The **Home** component is the landing page of the application. It introduces the Cab Booking System and provides navigation links for Login and Registration.

### Responsibilities

* Display application introduction.
* Provide navigation to Login and Register pages.
* Display available services.
* Improve user experience with a simple interface.

---

# 2. Login / Register Component

### Purpose

The **Login** and **Register** components handle user authentication.

### Responsibilities

* Register new users.
* Authenticate existing users.
* Validate user credentials.
* Send login and registration requests using Axios.
* Redirect authenticated users to the User Dashboard.

---

# 3. Uhome Component

### Purpose

The **Uhome** component serves as the dashboard for authenticated users.

### Responsibilities

* Display welcome information.
* Provide quick navigation.
* Show available user options.
* Access booking-related pages.

---

# 4. Cabs Component

### Purpose

The **Cabs** component displays all available vehicles.

### Responsibilities

* Fetch available cabs from the backend.
* Display cab details.
* Show vehicle category and price.
* Allow users to select a cab.

---

# 5. BookCab Component

### Purpose

The **BookCab** component allows users to book a selected vehicle.

### Responsibilities

* Receive selected cab ID.
* Collect pickup location.
* Collect destination.
* Select booking date.
* Submit booking request to the backend.

---

# 6. MyBookings Component

### Purpose

The **MyBookings** component displays all bookings made by the logged-in user.

### Responsibilities

* Retrieve booking history.
* Display booking status.
* Display ride details.
* View completed and pending bookings.

---

# 7. Unav Component

### Purpose

The **Unav** component provides navigation for user pages.

### Responsibilities

* Navigate to Home.
* Navigate to Cabs.
* Navigate to My Bookings.
* Logout from the application.

---

# 8. Alogin / Aregister Component

### Purpose

The **Admin Login** and **Admin Register** components provide administrator authentication.

### Responsibilities

* Register administrators.
* Authenticate administrators.
* Redirect to Admin Dashboard.
* Secure administrator access.

---

# 9. Ahome Component

### Purpose

The **Ahome** component serves as the administrator dashboard.

### Responsibilities

* Display dashboard summary.
* Navigate to Users.
* Navigate to Bookings.
* Navigate to Cabs.
* Navigate to Add Car.

---

# 10. Anav Component

### Purpose

The **Anav** component provides navigation for administrator pages.

### Responsibilities

* Navigate to Users.
* Navigate to Bookings.
* Navigate to Cabs.
* Navigate to Add Car.
* Logout.

---

# 11. Users Component

### Purpose

The **Users** component displays all registered users.

### Responsibilities

* Fetch user information.
* Display registered users.
* Edit user information.
* Delete user accounts.

---

# 12. UserEdit Component

### Purpose

The **UserEdit** component allows administrators to modify user details.

### Responsibilities

* Load user information.
* Update user details.
* Save updated information.
* Display confirmation after successful update.

---

# 13. Bookings Component

### Purpose

The **Bookings** component displays all ride bookings in the system.

### Responsibilities

* Display booking information.
* Monitor booking status.
* View customer booking history.
* Manage ride records.

---

# 14. Acabs Component

### Purpose

The **Acabs** component displays all vehicles available in the system.

### Responsibilities

* Retrieve vehicle information.
* Edit vehicle details.
* Delete vehicle records.
* Display cab availability.

---

# 15. Acabedit Component

### Purpose

The **Acabedit** component allows administrators to edit cab information.

### Responsibilities

* Load selected cab details.
* Update vehicle information.
* Save updated records.
* Display updated information.

---

# 16. Addcar Component

### Purpose

The **Addcar** component allows administrators to add new vehicles.

### Responsibilities

* Enter vehicle details.
* Upload vehicle image.
* Save vehicle information.
* Add new cabs to the database.

---

# Frontend Request Flow

```text
User
       │
       ▼
React Components
       │
       ▼
Axios Request
       │
       ▼
Express.js API
       │
       ▼
MongoDB Database
       │
       ▼
Response
       │
       ▼
React User Interface
```

---

# Frontend Folder Structure

```text
client/
│
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Uhome.jsx
│   │   ├── Cabs.jsx
│   │   ├── BookCab.jsx
│   │   ├── MyBookings.jsx
│   │   ├── Unav.jsx
│   │   ├── Alogin.jsx
│   │   ├── Aregister.jsx
│   │   ├── Ahome.jsx
│   │   ├── Anav.jsx
│   │   ├── Users.jsx
│   │   ├── UserEdit.jsx
│   │   ├── Bookings.jsx
│   │   ├── Acabs.jsx
│   │   ├── Acabedit.jsx
│   │   └── Addcar.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
│
├── public/
├── package.json
└── vite.config.js
```

---

# Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* React Router DOM
* Node.js
* Express.js
* MongoDB
* Git
* GitHub

---

# Conclusion

The frontend of the Cab Booking System is designed using React.js with reusable components for users and administrators. Each component has a dedicated responsibility, making the application modular, scalable, and easy to maintain. Axios enables seamless communication with the backend, while React Router provides smooth navigation throughout the application. This architecture delivers a responsive and efficient user experience.
