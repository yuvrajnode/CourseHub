import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, User, LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, admin, logout, isAuthenticated, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href={isAuthenticated ? (isAdmin ? '/admin' : '/dashboard') : '/'} className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">CourseHub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated && (
              <>
                <a
                  href={isAdmin ? '/admin' : '/dashboard'}
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  {isAdmin ? 'Dashboard' : 'My Courses'}
                </a>
                {!isAdmin && (
                  <a
                    href="/courses"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Browse Courses
                  </a>
                )}
              </>
          )}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">
                    {admin?.email || user?.email}
                  </span>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    {isAdmin ? 'Admin' : 'User'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <a
                  href="/login"
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {isAuthenticated && (
                <>
                  <a
                    href={isAdmin ? '/admin' : '/dashboard'}
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {isAdmin ? 'Dashboard' : 'My Courses'}
                  </a>
                  {!isAdmin && (
                    <a
                      href="/courses"
                      className="text-gray-700 hover:text-indigo-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Browse Courses
                    </a>
                  )}
                </>
              )}
              
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-2 py-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">
                      {admin?.email || user?.email}
                    </span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                      {isAdmin ? 'Admin' : 'User'}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors self-start"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
