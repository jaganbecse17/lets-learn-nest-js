import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { BookEntity } from 'src/contracts/book.type';
import { BOOKS_LIST } from 'src/mock/books';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): BookEntity[] {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(@Body() book: Omit<BookEntity, 'id'>): BookEntity {
    return this.booksService.createBook(book);
  }

  @Patch(':id')
  updateBook(
    @Body('id') id: number,
    @Body() book: Partial<Omit<BookEntity, 'id'>>,
  ): BookEntity | null {
    return this.booksService.updateBook(id, book);
  }
}
