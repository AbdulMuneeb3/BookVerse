import { create } from 'zustand';
import { Book, Review, User } from './types';

interface BookStore {
  books: Book[];
  reviews: Review[];
  currentUser: User | null;
  setBooks: (books: Book[]) => void;
  addReview: (review: Review) => void;
  setCurrentUser: (user: User | null) => void;
}

// Sample data
const sampleBooks: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    rating: 4.5,
    reviewCount: 324
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?auto=format&fit=crop&q=80&w=800",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish.",
    rating: 4.8,
    reviewCount: 892
  },
  {
    id: 3,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
    description: "From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behavior of those who come in to browse.",
    rating: 4.3,
    reviewCount: 567
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    cover: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800",
    description: "Set on the desert planet Arrakis, Dune is the story of Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
    rating: 4.7,
    reviewCount: 1247
  }
];

const sampleReviews: Review[] = [
  {
    id: 1,
    bookId: 1,
    userId: 1,
    rating: 5,
    content: "This book completely changed my perspective on life. The concept is brilliant and execution flawless.",
    createdAt: "2024-02-15T08:00:00.000Z"
  },
  {
    id: 2,
    bookId: 1,
    userId: 2,
    rating: 4,
    content: "A beautiful exploration of choices and regret. The writing is poetic and touching.",
    createdAt: "2024-02-14T15:30:00.000Z"
  },
  {
    id: 3,
    bookId: 2,
    userId: 3,
    rating: 5,
    content: "The perfect blend of science and storytelling. Couldn't put it down!",
    createdAt: "2024-02-13T20:15:00.000Z"
  }
];

export const useStore = create<BookStore>((set) => ({
  books: sampleBooks,
  reviews: sampleReviews,
  currentUser: {
    id: 1,
    name: "Alex Thompson",
    email: "alex@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&facepad=2&w=256&h=256&q=80"
  },
  setBooks: (books) => set({ books }),
  addReview: (review) => set((state) => ({ 
    reviews: [...state.reviews, review],
    books: state.books.map(book => 
      book.id === review.bookId 
        ? { 
            ...book, 
            rating: ((book.rating * book.reviewCount) + review.rating) / (book.reviewCount + 1),
            reviewCount: book.reviewCount + 1
          }
        : book
    )
  })),
  setCurrentUser: (user) => set({ currentUser: user }),
}));