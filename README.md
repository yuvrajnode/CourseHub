# Course Selling Platform

A full-stack course selling application with user authentication, course management, and purchase functionality.

## 🚀 **Project Overview**

This is a complete course selling platform that allows:
- Users to browse, purchase, and view courses
- Admins to create, edit, and manage courses
- Secure authentication with JWT tokens
- Modern, responsive UI with React and Tailwind CSS

## 📁 **Project Structure**

```
Course-selling-backend/
├── course-selling-backend/          # Backend API Server
│   ├── routes/                    # API Routes
│   │   ├── user.js               # User authentication & purchases
│   │   ├── admin.js              # Admin authentication & course management
│   │   └── course.js             # Course purchasing
│   ├── middleware/                # Authentication middleware
│   │   ├── user.js               # User JWT verification
│   │   └── admin.js             # Admin JWT verification
│   ├── db.js                     # MongoDB schemas & models
│   ├── seed.js                   # Demo course data seeding
│   ├── index.js                  # Main server file
│   ├── config.js                 # Environment configuration
│   ├── .env                      # Environment variables
│   └── package.json              # Backend dependencies
└── frontend/                     # React Frontend
    ├── src/
    │   ├── components/
    │   │   ├── Auth/            # Login & Signup components
    │   │   ├── User/            # User dashboard & course listing
    │   │   ├── Admin/           # Admin dashboard
    │   │   └── Layout/          # Navigation components
    │   ├── context/              # React Context for authentication
    │   ├── services/             # API service layer
    │   └── App.js               # Main React app
    ├── public/                   # Static assets
    ├── package.json             # Frontend dependencies
    └── tailwind.config.js       # Tailwind CSS configuration
```

## 🛠️ **Technology Stack**

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Zod** - Input validation
- **CORS** - Cross-origin resource sharing

### **Frontend**
- **React 18** - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### **1. Clone and Setup Backend**
```bash
cd course-selling-backend
npm install
```

### **2. Configure Environment Variables**
Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/course-selling-app
JWT_ADMIN_PASSWORD=your-secret-admin-key
JWT_USER_PASSWORD=your-secret-user-key
```

### **3. Start Backend Server**
```bash
npm start
```
The backend will run on `http://localhost:3000`

### **4. Setup Frontend**
```bash
cd ../frontend
npm install
```

### **5. Start Frontend Server**
```bash
npm start
```
The frontend will run on `http://localhost:3001`

## 🔑 **Demo Accounts**

### **Admin Account (Auto-created)**
- **Email**: `admin@demo.com`
- **Password**: `admin123`

### **Create Custom Accounts**
- Visit `/signup` to create new user or admin accounts
- Choose between User and Admin roles during signup

## 📱 **Application Features**

### **User Features**
- ✅ User registration and login
- ✅ Browse available courses
- ✅ View course details
- ✅ Purchase courses
- ✅ View purchased courses in dashboard
- ✅ Track spending and course statistics

### **Admin Features**
- ✅ Admin registration and login
- ✅ Create new courses
- ✅ Edit existing courses
- ✅ View all courses
- ✅ Track course statistics
- ✅ Course management dashboard

### **General Features**
- ✅ Responsive design (mobile & desktop)
- ✅ JWT-based authentication
- ✅ Role-based access control
- ✅ Modern UI with Tailwind CSS
- ✅ Error handling and loading states
- ✅ Form validation

## 🎯 **API Endpoints**

### **User Routes**
- `POST /api/v1/user/signup` - Register new user
- `POST /api/v1/user/signin` - User login
- `GET /api/v1/user/purchases` - Get user's purchased courses

### **Admin Routes**
- `POST /api/v1/admin/signup` - Register new admin
- `POST /api/v1/admin/signin` - Admin login
- `POST /api/v1/admin/course` - Create new course
- `PUT /api/v1/admin/course/:id` - Update course
- `GET /api/v1/admin/course/bulk` - Get all courses

### **Course Routes**
- `POST /api/v1/course/purchase` - Purchase a course
- `GET /api/v1/course/preview` - Course preview

## 🗄️ **Database Schema**

### **User Model**
```javascript
{
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String
}
```

### **Admin Model**
```javascript
{
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String
}
```

### **Course Model**
```javascript
{
  title: String,
  description: String,
  price: Number,
  imageUrl: String (optional),
  creatorId: ObjectId (references Admin)
}
```

### **Purchase Model**
```javascript
{
  userId: ObjectId (references User),
  courseId: ObjectId (references Course)
}
```

## 🎨 **UI Components**

### **Authentication Pages**
- Login page with user/admin toggle
- Signup page with role selection
- Form validation and error handling

### **User Interface**
- Landing page with featured courses
- Course listing with search and filters
- Course purchase flow
- User dashboard with purchased courses
- Statistics and progress tracking

### **Admin Interface**
- Admin dashboard with course statistics
- Course creation/editing forms
- Course management grid
- Revenue and student metrics

## 🔧 **Development Notes**

### **Demo Data**
The application automatically seeds 8 demo courses on first startup:
1. Complete Web Development Bootcamp
2. Python for Data Science & Machine Learning
3. iOS & Swift - The Complete iOS App Development
4. Angular - The Complete Guide
5. Node.js - The Complete Guide
6. Docker & Kubernetes: The Practical Guide
7. React Native - The Practical Guide
8. AWS Certified Solutions Architect

### **Security Features**
- Password hashing with bcrypt
- JWT token authentication
- Role-based access control
- Input validation with Zod
- CORS protection

### **Known Issues & Improvements**
- Add course deletion functionality
- Implement payment integration
- Add course ratings and reviews
- Implement search and filtering
- Add course categories
- Implement user profiles
- Add course progress tracking

## 🚀 **Deployment**

### **Backend Deployment**
1. Set production environment variables
2. Build and deploy to cloud platform (Heroku, AWS, etc.)
3. Configure production MongoDB instance

### **Frontend Deployment**
1. Run `npm run build` to create production build
2. Deploy build folder to static hosting (Netlify, Vercel, etc.)
3. Configure API endpoint for production


**Happy Learning! 🎓**
