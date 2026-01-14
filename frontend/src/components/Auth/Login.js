import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { userAPI, adminAPI } from '../../services/api';
import { BookOpen, User, Shield } from 'lucide-react';

const Login = () => {
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, loginAdmin } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Attempting login for:', formData.email);
      console.log('Is user login:', isUserLogin);
      
      if (isUserLogin) {
        const response = await userAPI.signin({
          email: formData.email,
          password: formData.password
        });
        console.log('Login response:', response);
        login({ email: formData.email }, response.data.token);
      } else {
        const response = await adminAPI.signin({
          email: formData.email,
          password: formData.password
        });
        console.log('Admin login response:', response);
        loginAdmin({ email: formData.email }, response.data.token);
      }
    } catch (err) {
      console.error('Login error:', err);
      console.error('Error response:', err.response);
      setError(err.response?.data?.message || err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Platform</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <div className="flex mb-6">
          <button
            onClick={() => setIsUserLogin(true)}
            className={`flex-1 py-2 px-4 rounded-l-lg flex items-center justify-center gap-2 transition-colors ${
              isUserLogin
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <User className="h-4 w-4" />
            User
          </button>
          <button
            onClick={() => setIsUserLogin(false)}
            className={`flex-1 py-2 px-4 rounded-r-lg flex items-center justify-center gap-2 transition-colors ${
              !isUserLogin
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Shield className="h-4 w-4" />
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : `Sign in as ${isUserLogin ? 'User' : 'Admin'}`}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
