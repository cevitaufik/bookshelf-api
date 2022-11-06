import { books } from '../books.js'

export const getBookById = (req, h) => {
  const { id } = req.params

  // eslint-disable-next-line no-unused-vars
  for (const [key, book] of Object.entries(books)) {
    if (book.id === id) {
      return h.response({
        status: 'success',
        data: {
          book
        }
      }).code(200)
    }
  }

  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  }).code(404)
}
