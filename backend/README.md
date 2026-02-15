# Educational Learning Platform Backend

## Features
- Node.js + Express REST API
- MongoDB (Atlas/local)
- JWT authentication
- User, Course, Lesson, Homework, Submission models
- Role-based access

## Setup
1. Install dependencies:
   npm install express mongoose bcryptjs jsonwebtoken cors

2. Set environment variables:
   - MONGO_URI: MongoDB connection string
   - JWT_SECRET: Secret for JWT

3. Start server:
   node src/index.js

## API Endpoints
- POST /api/v1/auth/register
- POST /api/v1/auth/login
- GET/DELETE /api/v1/users
- GET/POST/DELETE /api/v1/courses
- GET/POST /api/v1/lessons
- GET/POST /api/v1/homework
- GET/POST /api/v1/submissions

## Folder Structure
- src/: Entry point
- models/: Mongoose schemas
- controllers/: Route logic
- routes/: Express routes
- middleware/: Auth
- config/: DB config
- tests/: Sample tests

## Tests
Add tests in tests/ folder.
