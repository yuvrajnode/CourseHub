# Course Selling Frontend

A modern React frontend for the course selling platform.

## Features

- **User Authentication**: Login and signup for both users and admins
- **Course Management**: Browse, purchase, and view courses
- **Admin Dashboard**: Create, edit, and manage courses
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Lucide icons

## Tech Stack

- React 18
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling
- Lucide React for icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── Auth/           # Login and signup components
│   ├── User/           # User-specific components
│   ├── Admin/          # Admin-specific components
│   └── Layout/         # Navigation and layout components
├── context/            # React context for authentication
├── services/           # API service layer
└── App.js             # Main application component
```

## API Configuration

The frontend connects to the backend running on `http://localhost:3000`. Make sure your backend server is running before starting the frontend.

## Available Routes

- `/login` - User/Admin login
- `/signup` - User/Admin signup
- `/dashboard` - User dashboard (purchased courses)
- `/courses` - Course listing and purchase
- `/admin` - Admin dashboard (course management)

## Authentication

The app uses JWT tokens for authentication. Tokens are stored in localStorage and automatically included in API requests.

## Usage

1. Create an admin account via `/signup`
2. Login as admin and create courses via `/admin`
3. Create a user account and purchase courses
4. View purchased courses in the user dashboard

## Notes

- The backend API must be running on port 3000
- Course images are optional - placeholder images are shown if not provided
- The app includes proper error handling and loading states
