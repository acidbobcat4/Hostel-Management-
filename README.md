# **Hostel Management Application**

A comprehensive **Hostel Management Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** with **Redux** for state management. This application allows hostel administrators to manage student records, track attendance, and control user access efficiently.

---

## **Features**
### **1. User Authentication and Authorization**
- **Registration/Login Screens**: Secure user authentication with JWT-based token system.
- **Admin-Only Access**: Sensitive data and administrative controls are accessible only to admins.

### **2. Student Management**
- **Add Students**: Easily add student details such as name, address, contact information, room details, and more.
- **Edit/Delete Student Details**: Update or remove student information as needed.
- **Update Student Whereabouts**: Keep track of students' statuses (e.g., Active, Inactive).
  
### **3. Attendance Management**
- **Daily Attendance Tracking**: Mark attendance for all active students.
- **Display Attendance Details**: View attendance records for selected dates or ranges.
- **Download Attendance Reports**: Export attendance data as a CSV file for offline use or reporting.
- **Delete Attendance Records**: Remove old attendance data for the past `n` days to keep the database clean.

### **4. User Management**
- **Control User List**: View a list of all registered users.
- **Edit User Admin Status**: Promote or demote users to/from admin roles.
- **Admin-Only Data Control**: Critical data and administrative features are restricted to authorized admins.

---

## **Technologies Used**
### **Frontend**
- **React.js**: Component-based UI for dynamic and interactive user interfaces.
- **Redux**: For global state management and efficient data flow.
- **Axios**: For making HTTP requests to the backend.
- **Bootstrap**: Pre-styled components for responsive and modern design.

### **Backend**
- **Node.js**: Server-side runtime for handling requests and responses.
- **Express.js**: Web framework for creating APIs and handling routes.
- **JWT**: Secure token-based authentication.

### **Database**
- **MongoDB**: NoSQL database for storing user, student, and attendance data.

---

## **Installation**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/hostel-management.git
cd hostel-management
```

### **Step 2: Install Dependencies**
Install dependencies for both backend and frontend:
```bash
npm install
cd frontend && npm install
```

### **Step 3: Configure Environment Variables**
Create a `.env` file in the root directory and add the following:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

Replace `your_mongo_connection_string` and `your_secret_key` with actual values.

---

## **Running the Application**

### **Start the Backend Server**
```bash
npm run server
```

### **Start the Frontend Development Server**
```bash
cd frontend
npm start
```

### **Access the Application**
Open your browser and navigate to:
```
http://localhost:3000
```

---

## **Folder Structure**

```
hostel-management/
│
├── /backend
│   ├── /config          # Database and environment configurations
│   ├── /controllers     # Logic for handling API routes
│   ├── /models          # Mongoose schemas for MongoDB
│   ├── /routes          # Backend API endpoints
│   ├── /middleware      # Authentication and error handling middleware
│   ├── server.js        # Entry point for the backend
│
├── /frontend
│   ├── /src
│   │   ├── /components  # Reusable React components
│   │   ├── /pages       # Main pages (Login, Dashboard, etc.)
│   │   ├── /redux       # Redux setup for state management
│   │   ├── /utils       # Utility functions
│   │   ├── App.js       # Main React app file
│   │   ├── index.js     # React entry point
│
├── .env                 # Environment variables (not committed to Git)
├── .gitignore           # Files and folders to be ignored by Git
├── package.json         # Backend dependencies and scripts
├── README.md            # Documentation
```

---

## **Key Functionalities in Detail**

### **Authentication System**
- Users are authenticated using JWT (JSON Web Tokens).
- Tokens are stored in `localStorage` for secure session handling.
- Admin users have elevated permissions, such as managing attendance and controlling user roles.

---

### **Attendance Management**
- Administrators can mark attendance for active students daily.
- Attendance details are displayed in a user-friendly format.
- Export data as a CSV file for sharing or archiving purposes.
- Old attendance records can be deleted using the "Delete Attendance" feature.

---

### **Admin Controls**
- Only admins can:
  - Add, update, or delete student details.
  - Edit user roles and promote/demote users to/from admin status.
  - Access attendance management features.

---

## **Future Enhancements**
- **Hostel Fee Management**: Add functionality to manage and track hostel fees for students.
- **Notifications System**: Notify students of upcoming events, fee deadlines, or attendance updates.
- **Mobile App**: Create a React Native version for mobile users.
- **Performance Optimization**: Optimize database queries and frontend rendering for large datasets.

---

## **Contributing**
We welcome contributions from the community! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added feature-name"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request and describe the changes.

For major changes, please open an issue first to discuss your idea.

