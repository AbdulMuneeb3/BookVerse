import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">BookVerse</span>
          </Link>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search books..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/books" className="text-gray-600 hover:text-gray-900">Books</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-gray-900">Reviews</Link>
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <User className="w-6 h-6 text-gray-600" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}