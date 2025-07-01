# CreditSea Offline-First User Journey & Analytics Portal

A full-stack project built for the CreditSea Full Stack Intern Challenge.  
It tracks user activity across multiple pages — including form interactions — even while offline, and syncs data to the backend once reconnected.


##  Features

1) Track user interactions:
- Page views  
- Button clicks  
- Form submissions  

2) Offline-first experience:
- Stores events in localStorage while offline  
- Automatically syncs to backend when back online 

3) Prevent unsynced data:
- Warns before leaving page if data is unsynced and user is offline  

3) Form experience:
- Input field values (like name, email) are remembered even after refresh  
- Restored automatically if page is revisited  
- Data is cleared only after successful form submission  

4) Admin dashboard:
- View all user events in real time  
- Filtered analytics using query parameters  
- Summary: shows counts of event types (e.g., how many clicks, submissions)


## Tech Stack


 Frontend   | React (Vite), Axios, localStorage 
 Backend    | Node.js, Express, TypeScript, Mongoose 
 Database   | MongoDB Atlas     


##  How to Run the Project Locally

> Make sure Node.js and npm are installed.


# 1) Clone the Repository

git clone https://github.com/suraj-78/creditsea-offline-portal.git
cd creditsea-offline-portal

# 2️) Install Dependencies
npm install


# 3) Create a .env file

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/creditsea?retryWrites=true&w=majority
Replace <username> and <password> with your real MongoDB Atlas credentials.

# 4) Run the backend
npm run dev

# 5) Setup Frontend
cd ../frontend
npm install

# 6) Run the frontend
npm run dev



### SCREENSHOTS ###

# Home Page
[Home Page](./Screenshot%20(23).png)

# Form Page
[Form Page](./Screenshot%20(24).png)

# Admin Page
[Admin Page](./Screenshot%20(25).png)

# Console Page
[Console Page](./Screenshot%202025-07-01%20200822.png)