import React from 'react';
import { BookCard } from '../components/BookCard';
import { useStore } from '../lib/store';
import { Sparkles } from 'lucide-react';

export function HomePage() {
  const books = useStore((state) => state.books);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of book lovers. Read reviews, share your thoughts, and find your next adventure.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              Featured Books
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}