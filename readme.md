# CreditSea Offline-First User Journey & Analytics Portal

A full-stack project built for the CreditSea Full Stack Intern Challenge.  
It tracks user activity across multiple pages — including form interactions — even while offline, and syncs data to the backend once reconnected.

---

## Features

1. Track user interactions  
   - Page views  
   - Button clicks  
   - Form submissions  

2. Offline-first experience  
   - Stores events in localStorage while offline  
   - Automatically syncs to backend when back online  

3. Prevent unsynced data  
   - Warns before leaving the page if data is unsynced and user is offline  

4. Form experience  
   - Input field values (like name, email) are remembered even after refresh  
   - Restored automatically if page is revisited  
   - Data is cleared only after successful form submission  

5. Admin dashboard  
   - View all user events in real time  
   - Filtered analytics using query parameters  
   - Summary: shows counts of event types (e.g., how many clicks, submissions)

---

## Tech Stack

| Layer     | Technologies                          |
|-----------|----------------------------------------|
| Frontend  | React (Vite), Axios, localStorage      |
| Backend   | Node.js, Express, TypeScript, Mongoose |
| Database  | MongoDB Atlas                          |

---

## Screenshots

### 🧳 **Home Page**
![Home Page](https://github.com/suraj-78/creditsea-offline-portal/blob/main/Screenshot%20(23).png)

### 🧳 **Admin Dashboard**
![Admin Dashboard](https://github.com/suraj-78/creditsea-offline-portal/blob/main/Screenshot%20(25).png)

### 🧳 **Form Page**
![Form Page](https://github.com/suraj-78/creditsea-offline-portal/blob/main/Screenshot%20(24).png)

### 🧳 **Console Page**
![Console Page](https://github.com/suraj-78/creditsea-offline-portal/blob/main/Screenshot%202025-07-01%20200822.png)

---


## How to Run the Project Locally

Make sure Node.js and npm are installed.

### 1. Clone the Repository

```bash
git clone https://github.com/suraj-78/creditsea-offline-portal.git
cd creditsea-offline-portal

```
### 2. Install Dependencies

```bash
npm install

```
### 3. Create .env file in /creditsea-backend
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/creditsea?retryWrites=true&w=majority

    Replace <username> and <password> with your MongoDB Atlas credentials.

### 4. Run the Backend Server
```bash
cd creditsea-backend
npm run start
```

### 5. Run the Frontend
```bash
cd creditsea-frontend
npm run dev

```

---


