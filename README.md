# Authentication Module

A simple **Authentication Module** with **Signup, Login, and Dashboard** using **Node.js, Express, MongoDB Atlas, JWT**, and plain **HTML/CSS/JavaScript** for the frontend.  

Users can:  
- Sign up with username, email, and password  
- Login with email and password  
- Access a protected dashboard page with JWT authentication  
- Logout safely  

---

## ⚡ Features

- **Signup**: Create a new user in MongoDB  
- **Login**: Authenticate using email/password and get JWT token  
- **Dashboard**: Protected route that displays a welcome message  
- **Logout**: Clears token and redirects to login  
- **CORS enabled**: Frontend and backend can run on different ports  

---

## 💻 Tech Stack

- **Backend**: Node.js, Express, MongoDB Atlas, Mongoose, JWT, CORS  
- **Frontend**: HTML, CSS, JavaScript  
- **Authentication**: JWT-based token authentication  

---

## 🚀 Local Setup & Run Instructions

Follow the steps below to run this Authentication Module locally on your system.

**📌 Prerequisites**

Make sure you have the following installed on your laptop:

- Node.js (v18 or above recommended)
- MongoDB (Local or MongoDB Atlas)
- Git
- A web browser (Chrome / Edge)

**📥 Step 1: Clone the Repository**

```bash
git clone https://github.com/AakanshaAghav/authentication-module.git
cd authentication-module
```

**📂 Step 2: Install Backend Dependencies**

```bash
cd backend
npm install
```

**🔐 Step 3: Create .env File**

Inside the backend folder, create a .env file and add the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
```

**▶️ Step 4: Start Backend Server**

```bash
npm start
```

✅ Server will run at:

```bash
http://localhost:5000
```

**🌐 Step 5: Run Frontend**

- Open the frontend folder
- Open signup.html or login.html directly in your browser
(No server required for frontend)

**🔄 Step 6: Test the Application**

- Register a new user
- Login using registered credentials
- On success, you will be redirected to the dashboard
- Click Logout to end the session

**📁 Project Structure**

```bash
authentication-module/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│
├── frontend/
│   ├── login.html
│   ├── login.css
│   ├── signup.html
│   ├── signup.css
│   ├── dashboard.html
│   ├── dashboard.css
│   ├── script.js
│
└── README.md
```

**🛑 Important Notes**

- Ensure .env file is added to .gitignore
- Do NOT expose SECRET_KEY or database credentials
- MongoDB must be running or accessible via Atlas

## 📌 License

© 2025 Aakansha Aghav. All rights reserved.
