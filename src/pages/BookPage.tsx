import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../lib/store';
import { StarRating } from '../components/StarRating';
import { ReviewForm } from '../components/ReviewForm';
import { format } from 'date-fns';
import { Book as BookIcon, Clock } from 'lucide-react';

export function BookPage() {
  const { id } = useParams();
  const { books, reviews, addReview } = useStore();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Book not found</p>
      </div>
    );
  }

  const bookReviews = reviews.filter((review) => review.bookId === book.id);

  const handleReviewSubmit = (review: { rating: number; content: string }) => {
    addReview({
      id: reviews.length + 1,
      bookId: book.id,
      userId: 1, // In a real app, this would come from auth
      rating: review.rating,
      content: review.content,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{book.author}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <StarRating rating={book.rating} size="lg" />
                <span className="text-gray-600">
                  ({book.reviewCount} reviews)
                </span>
              </div>

              <p className="text-gray-700 mb-8">{book.description}</p>

              <div className="border-t pt-8">
                <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
                <ReviewForm bookId={book.id} onSubmit={handleReviewSubmit} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
          <div className="space-y-6">
            {bookReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {format(new Date(review.createdAt), 'MMM d, yyyy')}
                  </div>
                </div>
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
            {bookReviews.length === 0 && (
              <div className="text-center py-12">
                <BookIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No reviews yet. Be the first to review!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}