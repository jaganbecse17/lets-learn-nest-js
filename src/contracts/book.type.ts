export interface BookEntity {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;
}


export interface BookStock{
    bookId: number;
    quantity: number;
    borrowed: number;
    preBooked: number;
}