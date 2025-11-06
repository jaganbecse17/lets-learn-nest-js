import { BookEntity, BookStock } from "src/contracts/book.type";

export const BOOKS_LIST: BookEntity[] = [
  { id: 1, title: '1984', author: 'George Orwell', publishedDate: new Date('1949-06-08') },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedDate: new Date('1960-07-11') },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedDate: new Date('1925-04-10') },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', publishedDate: new Date('1851-10-18') },
];


export const BOOKS_STOCK: BookStock[] = [
  { bookId: 1, quantity: 10, borrowed: 2, preBooked: 1 },
  { bookId: 2, quantity: 5, borrowed: 1, preBooked: 0 },
  { bookId: 3, quantity: 8, borrowed: 3, preBooked: 2 },
  { bookId: 4, quantity: 2, borrowed: 0, preBooked: 0 },
];