/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { books } from '../books.js'

export const getAllBooks = (req, h) => {
  const { reading, name, finished } = req.query
  let filtered = books
  const data = []

  if (name) {
    const tmp = []
    for (const [key, book] of Object.entries(books)) {
      if (book.name.toLowerCase().includes(name.toLowerCase())) {
        tmp.push(book)
      }
    }

    filtered = tmp
  }

  if (reading == 0) {
    const tmp = []
    for (const [key, book] of Object.entries(books)) {
      if (book.reading === false) {
        tmp.push(book)
      }
    }

    filtered = tmp
  }

  if (reading == 1) {
    const tmp = []

    for (const [key, book] of Object.entries(books)) {
      if (book.reading === true) {
        tmp.push(book)
      }
    }

    filtered = tmp
  }

  if (finished == 0) {
    const tmp = []
    for (const [key, book] of Object.entries(books)) {
      if (book.finished === false) {
        tmp.push(book)
      }
    }

    filtered = tmp
  }

  if (finished == 1) {
    const tmp = []

    for (const [key, book] of Object.entries(books)) {
      if (book.finished === true) {
        tmp.push(book)
      }
    }

    filtered = tmp
  }

  filtered.forEach(book => {
    data.push({
      id: book.id,
      name: book.name,
      publisher: book.publisher
    })
  })

  return h.response({
    status: 'success',
    data: {
      books: data
    }
  })
}
