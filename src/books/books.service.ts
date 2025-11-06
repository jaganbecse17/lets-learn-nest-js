import { Injectable } from '@nestjs/common';
import { BookEntity } from 'src/contracts/book.type';
import { createNewRecord } from 'src/helpers/entity.helpers';
import { BOOKS_LIST } from 'src/mock/books';

@Injectable()
export class BooksService {
  getAllBooks(): BookEntity[] {
    return BOOKS_LIST;
  }

  createBook(book: Omit<BookEntity, 'id'>): BookEntity {
    return createNewRecord(BOOKS_LIST, book);
  }

  updateBook(
    id: number,
    book: Partial<Omit<BookEntity, 'id'>>,
  ): BookEntity | null {
    const index = BOOKS_LIST.findIndex((b) => b.id === id);
    if (index !== -1) {
      BOOKS_LIST[index] = { ...BOOKS_LIST[index], ...book } as BookEntity;
      return BOOKS_LIST[index];
    }
    return null;
  }
}
