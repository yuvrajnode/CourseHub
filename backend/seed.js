const mongoose = require('mongoose');
const { courseModel, adminModel } = require('./db');

const demoCourses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, Node.js, React, MongoDB and more in this comprehensive web development course. Build 25+ real-world projects.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
  },
  {
    title: "Python for Data Science & Machine Learning",
    description: "Master Python for data science, machine learning, and artificial intelligence. Includes NumPy, Pandas, Matplotlib, Scikit-Learn, and TensorFlow.",
    price: 94.99,
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop"
  },
  {
    title: "iOS & Swift - The Complete iOS App Development",
    description: "Build iOS 15 apps with Swift 5.5 and SwiftUI. Learn Xcode, UIKit, Core Data, and publish apps to the App Store.",
    price: 84.99,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
  },
  {
    title: "Angular - The Complete Guide",
    description: "Master Angular 13 and build awesome, reactive web apps with the modern version of Angular. Includes RxJS, NgRx, and TypeScript.",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  },
  {
    title: "Node.js - The Complete Guide",
    description: "Build scalable network applications using Node.js, Express, MongoDB, Mocha, and more. Learn REST APIs, authentication, and deployment.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
  },
  {
    title: "Docker & Kubernetes: The Practical Guide",
    description: "Learn Docker, Docker Compose, Multi-Container Projects, Deployment, and all about Kubernetes. Deploy containers to AWS, Google Cloud.",
    price: 94.99,
    imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop"
  },
  {
    title: "React Native - The Practical Guide",
    description: "Build native mobile apps for iOS and Android using React Native. Learn Redux, navigation, animations, and publishing to app stores.",
    price: 84.99,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop"
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Prepare for the AWS Certified Solutions Architect exam. Learn EC2, S3, Lambda, VPC, IAM, and all major AWS services.",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  }
];

async function seedCourses() {
  try {
    // Check if courses already exist
    const existingCourses = await courseModel.countDocuments();
    if (existingCourses > 0) {
      console.log('Courses already exist in database');
      return;
    }

    // Find or create a default admin
    let admin = await adminModel.findOne({ email: 'admin@demo.com' });
    if (!admin) {
      const bcrypt = require('bcrypt');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      admin = await adminModel.create({
        email: 'admin@demo.com',
        password: hashedPassword,
        firstName: 'Demo',
        lastName: 'Admin'
      });
      console.log('Created demo admin: admin@demo.com / admin123');
    }

    // Create demo courses
    const coursesWithCreator = demoCourses.map(course => ({
      ...course,
      creatorId: admin._id
    }));

    await courseModel.insertMany(coursesWithCreator);
    console.log(`Successfully seeded ${demoCourses.length} demo courses`);
    
  } catch (error) {
    console.error('Error seeding courses:', error);
  }
}

module.exports = { seedCourses };
