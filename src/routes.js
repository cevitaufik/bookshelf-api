import { addBook } from './handler/addBook.js'
import { deleteBookById } from './handler/deleteBookById.js'
import { getAllBooks } from './handler/getAllBooks.js'
import { getBookById } from './handler/getBookById.js'
import { updateBookById } from './handler/updateBookById.js'

export const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookById
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById
  }
]
