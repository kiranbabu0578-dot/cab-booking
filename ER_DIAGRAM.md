# ER Diagram – Cab Booking System

## Overview

The Entity Relationship (ER) Diagram represents the database structure of the Cab Booking System. It defines the entities involved in the application and describes how they are connected to each other. The primary entities are **User**, **Ride**, **Driver**, and **Vehicle**.

---

# User – Ride Relationship

### Type

**One-to-Many (1:N)**

### Meaning

One user can book multiple rides, but each ride is booked by only one user.

### Database Implementation

The **Ride** collection contains a **UserID** as a foreign key that references the **User** collection.

### Real-Life Example

A customer uses the Cab Booking application several times. Every booking belongs to the same user account.

---

# Ride – Driver Relationship

### Type

**Many-to-One (N:1)**

### Meaning

Many rides can be assigned to one driver, but each ride is handled by only one driver.

### Database Implementation

The **Ride** collection stores the **DriverID** as a foreign key to identify the assigned driver.

### Real-Life Example

A driver completes many rides during the day, but each ride has only one assigned driver.

---

# Driver – Vehicle Relationship

### Type

**One-to-One (1:1)** *(or One-to-Many if vehicle sharing is implemented)*

### Meaning

A driver is assigned one vehicle. In advanced implementations, a vehicle may be shared by different drivers working different shifts.

### Database Implementation

The **Vehicle** collection stores the **DriverID** as a foreign key.

### Real-Life Example

Driver A drives Car X during the morning shift, while Driver B may drive the same car during the night shift.

---

# Entities and Attributes

## User

* UserID (Primary Key)
* Name
* Email
* Phone Number
* Password

## Ride

* RideID (Primary Key)
* UserID (Foreign Key)
* DriverID (Foreign Key)
* Pickup Location
* Drop Location
* Fare
* Ride Status

## Driver

* DriverID (Primary Key)
* Name
* Phone Number
* License Number
* Availability Status

## Vehicle

 VehicleID (Primary Key)
 DriverID (Foreign Key)
 Vehicle Number
 Vehicle Model
 Vehicle Type

---

 ER Diagram Relationships

```text
User (1)
   │
   ├───────────────< Books >───────────────┐
   │                                       │
   ▼                                       │
Ride (Many) ───────── Assigned To ───────► Driver (1)
                                              │
                                              │ Drives
                                              ▼
                                           Vehicle (1)
```

---

 Conclusion

The ER Diagram provides a clear representation of the relationships between Users, Rides, Drivers, and Vehicles. It ensures proper organization of data, reduces redundancy, and helps maintain consistency within the Cab Booking System database.
