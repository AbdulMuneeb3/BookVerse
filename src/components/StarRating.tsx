import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export function StarRating({ 
  rating, 
  size = 'md', 
  interactive = false,
  onChange 
}: StarRatingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => interactive && onChange?.(star)}
          className={cn(
            "focus:outline-none",
            interactive && "cursor-pointer hover:scale-110 transition-transform"
          )}
          disabled={!interactive}
        >
          <Star
            className={cn(
              sizes[size],
              star <= rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            )}
          />
        </button>
      ))}
    </div>
  );
}