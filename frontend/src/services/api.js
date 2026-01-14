import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const adminToken = localStorage.getItem('adminToken');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else if (adminToken) {
    config.headers.Authorization = `Bearer ${adminToken}`;
  }
  
  return config;
});

// User APIs
export const userAPI = {
  signup: (userData) => api.post('/user/signup', userData),
  signin: (credentials) => api.post('/user/signin', credentials),
  getPurchases: () => api.get('/user/purchases'),
  purchaseCourse: (courseId) => api.post('/course/purchase', { courseId }),
};

// Admin APIs
export const adminAPI = {
  signup: (adminData) => api.post('/admin/signup', adminData),
  signin: (credentials) => api.post('/admin/signin', credentials),
  createCourse: (courseData) => api.post('/admin/course', courseData),
  updateCourse: (courseId, courseData) => api.put(`/admin/course/${courseId}`, courseData),
  deleteCourse: (courseId) => api.delete(`/admin/course/${courseId}`),
  getAllCourses: () => api.get('/admin/course/bulk'),
};

// Course APIs
export const courseAPI = {
  getPreview: () => api.get('/course/preview'),
};

export default api;
