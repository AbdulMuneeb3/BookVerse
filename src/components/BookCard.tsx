import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Book } from '../lib/types';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link 
      to={`/books/${book.id}`} 
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="aspect-[2/3] relative overflow-hidden rounded-t-lg">
        <img
          src={book.cover}
          alt={book.title}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {book.author}
        </p>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-900">
            {book.rating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-500">
            ({book.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}