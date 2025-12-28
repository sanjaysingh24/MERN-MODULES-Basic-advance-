# MERN Authentication Module

This project is a full-stack authentication system built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides user registration, login, and secure authentication with JWT tokens, profile image uploads, and a responsive frontend.

## What This Project Creates

This authentication module creates a complete user management system that allows users to:
- Register new accounts with profile images
- Log in securely with email and password
- Receive JWT access tokens for authenticated requests
- Store refresh tokens for session management
- Upload and store profile images using Cloudinary

The system is designed as a modular authentication service that can be integrated into larger applications requiring user authentication.

## Tech Stack

### Client (Frontend)
- **React**: UI library for building the user interface
- **Vite**: Fast build tool and development server
- **Redux Toolkit**: State management for API calls and authentication
- **React Router DOM**: Client-side routing
- **React Hook Form**: Form handling and validation
- **Yup**: Schema validation for forms
- **Axios**: HTTP client for API requests
- **Tailwind CSS**: Utility-first CSS framework for styling

### Server (Backend)
- **Node.js**: JavaScript runtime for the server
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM for MongoDB
- **JWT (jsonwebtoken)**: Token-based authentication
- **bcrypt**: Password hashing
- **multer**: File upload handling
- **multer-storage-cloudinary**: Cloudinary integration for image storage
- **cookie-parser**: Cookie parsing middleware
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Project Structure

```
Auth/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── Pages/          # Page components (Login, Signup, Dashboard)
│   │   ├── routes/         # Routing configuration
│   │   ├── store/          # Redux store and slices
│   │   ├── utils/          # Utility functions and validations
│   │   └── App.jsx         # Main app component
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── config/         # Database and Cloudinary configuration
│   │   ├── controllers/    # Route handlers (user authentication)
│   │   ├── middlewares/    # Custom middlewares (multer for uploads)
│   │   ├── models/         # Mongoose schemas (User model)
│   │   ├── routes/         # API routes
│   │   └── app.js          # Express app setup
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies
└── README.md               # This file
```

## Key Functions and Modules

### Client Functions
- **Login Component**: Handles user login with form validation using Yup and React Hook Form
- **Signup Component**: Manages user registration with profile image upload
- **API Slice**: Redux Toolkit RTK Query for API calls (login, signup mutations)
- **Form Validation**: Custom validation schemas for email, password, and name fields
- **Routing**: Protected and public routes using React Router

### Server Functions
- **Signup Controller**: Creates new users, hashes passwords with bcrypt, uploads images to Cloudinary
- **Login Controller**: Authenticates users, generates JWT tokens, sets refresh token cookies
- **User Model**: Mongoose schema defining user fields (username, email, password, profileImage, refreshToken)
- **Authentication Middleware**: JWT verification for protected routes
- **File Upload Middleware**: Multer configuration for handling multipart form data

### Key Modules Used
- **Frontend Modules**: React components, Redux store, API service, form validation utilities
- **Backend Modules**: Express routes, Mongoose models, authentication controllers, file upload handlers
- **Database Module**: MongoDB connection and user data management
- **Cloud Storage Module**: Cloudinary integration for image uploads and storage

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account for image storage

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd Auth/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key
   REFRESH_SECRET_KEY=your_refresh_token_secret_key
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_SECRET=your_cloudinary_api_secret
   REFRESH_SECRET_KEY=refresh_jwt_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd Auth/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Start the backend server (runs on port 3000 by default)
2. Start the frontend development server (runs on port 5173 by default)
3. Open your browser and navigate to `http://localhost:5173`
4. Register a new account or login with existing credentials

## API Endpoints

### Authentication Routes
- `POST /api/register`: User registration with profile image upload
- `POST /api/login`: User login and token generation

### Request/Response Examples

**Registration:**
```json
POST /api/register
Content-Type: multipart/form-data

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "file": "profile_image.jpg"
}
```

**Response:**
```json
{
  "message": "Successfully User Created",
  "status": true,
  "data": "john@example.com"
}
```

**Login:**
```json
POST /api/login

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User Successfully login",
  "status": true,
  "data": "john@example.com",
  "token": "jwt_access_token"
}
```

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Refresh token mechanism with HTTP-only cookies
- CORS configuration for cross-origin requests
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
