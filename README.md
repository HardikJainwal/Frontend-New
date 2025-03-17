# DSEU Website

<div align="center">
  <img src="./src/assets/DSEULogo/DSEULOGOTHICK.svg" alt="DSEU Logo" width="100"/>
  <h3>Delhi Skill and Entrepreneurship University</h3>
  <p>Empowering through Skills, Innovating through Education</p>
</div>

## Overview

A modern, full-stack web platform for Delhi Skill and Entrepreneurship University, built with React.js, Node.js, and MongoDB. This platform serves as the primary digital interface for students, faculty, and stakeholders, showcasing DSEU's commitment to skill-based education and entrepreneurship development.

## Key Features

- Modern, responsive UI design
- Secure authentication system
- Dynamic course management
- Student and faculty portals
- Online admission system
- Campus information and virtual tours
- Events management system
- Mobile-friendly interface
- Advanced search functionality
- Admin dashboard

## Tech Stack

### Frontend
- React.js with Javascript
- Tailwind CSS for styling
- React Router v6
- React Hook Form
- FontAwesome for icons
- Google Fonts

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JWT authentication
- Multer for file uploads
- nodemailer

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (v4.4+)
- npm
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/dseu/dseu-website.git
cd dseu-website
```

2. Install dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Environment Setup
```bash
# Backend configuration
cd backend
cp .env.example .env

# Frontend configuration
cd ../frontend
cp .env.example .env
```

4. Start Development Servers
```bash
# Start backend (from root directory)
npm run dev:backend

# Start frontend (in new terminal)
npm run dev:frontend
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Documentation: http://localhost:5000/api-docs

## Project Structure

```
dseu-website/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/   
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   └── package.json
└── package.json
```

## API Documentation

### Core Endpoints

```bash
# Auth Routes
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/forgot-password

# Course Routes
GET    /api/courses
POST   /api/courses
GET    /api/courses/:id
PUT    /api/courses/:id
DELETE /api/courses/:id

# User Routes
GET    /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
```

## Available Scripts

```bash
# Development
npm run dev           # Run full stack in development

# Production
npm run build        # Build both frontend and backend
npm start           # Start production server

# Testing
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode

# Linting
npm run lint        # Lint all files
npm run lint:fix    # Fix linting issues
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Git Commit Guidelines

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update build tasks
```

## Security Measures

- JWT authentication
- File upload validation

## Team

- Project Manager: [Name]
- Frontend Lead: [Name]
- Backend Lead: [Name]
- UI/UX Designer: [Name]
- QA Team Lead: [Name]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">
  © 2025 Delhi Skill and Entrepreneurship University. All Rights Reserved.
</div> 
