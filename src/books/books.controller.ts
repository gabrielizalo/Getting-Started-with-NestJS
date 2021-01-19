import {Body, Controller, Delete, Get, Post, Query} from "@nestjs/common";
import {BooksService} from "./books.service";

@Controller("books")
export class BooksController {
  constructor(private booksService: BooksService) {
  }

  @Get()
  async getBooks() {
    return await this.booksService.getBooks();
  }

  @Get(":bookID")
  async getBook(@Param("bookId") bookId) {
    return await this.booksService.getBook(bookId);
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    return await this.booksService.addBook(createBookDTO);
  }

  @Delete()
  async deleteBook(@Query() query) {
    return await this.booksService.deleteBook(query.bookId);
  }
}
