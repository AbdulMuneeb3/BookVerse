export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: number;
  bookId: number;
  userId: number;
  rating: number;
  content: string;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}