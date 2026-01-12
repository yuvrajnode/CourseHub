import React, { useState, useEffect } from 'react';
import { adminAPI } from '../../services/api';
import { BookOpen, DollarSign, Star, Users, Clock, CheckCircle } from 'lucide-react';

const Landing = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await adminAPI.getAllCourses();
      setCourses(response.data.courses || []);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const featuredCourses = courses.slice(0, 6);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Courses
              </a>
              <a
                href="/dashboard"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                My Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">{courses.length}</div>
            <div className="text-gray-600">Courses Available</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">10,000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600">Explore our most popular courses</p>
        </div>

        {featuredCourses.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses available yet</h3>
            <p className="text-gray-600">Check back later for new courses</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {course.imageUrl ? (
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-indigo-600" />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-green-600 mr-1" />
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-gray-600 ml-1">4.5</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Updated recently</span>
                  </div>

                  <a
                    href="/courses"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center block"
                  >
                    View Course
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Courses
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of students already learning on our platform
          </p>
          <a
            href="/courses"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
