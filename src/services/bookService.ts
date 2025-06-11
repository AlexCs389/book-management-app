import { BookInterface } from '../interfaces/BookInterface'

const API_URL = 'http://localhost:3001/api'

export const bookService = {
  async createBook(book: BookInterface): Promise<BookInterface> {
    const response = await fetch(`${API_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    if (Object.keys(data).length === 0) {
      throw new Error('No se pudo guardar el libro')
    }

    return data
  },
  async getBooks(): Promise<BookInterface[]> {
    const response = await fetch(`${API_URL}/books`)
    const data = await response.json()
    return data
  },
  async getBook(id: number): Promise<BookInterface> {
    const response = await fetch(`${API_URL}/books/${id}`)
    const data = await response.json()
    if (Object.keys(data).length === 0) {
      throw new Error('Libro no encontrado')
    }
    return data
  },
  async updateBook(id: number, book: BookInterface): Promise<BookInterface> {
    const response = await fetch(`${API_URL}/books/${id}`, {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    if (Object.keys(data).length === 0) {
      throw new Error('No se pudo actualizar el libro')
    }

    return data
  },
  async deleteBook(id: number): Promise<void> {
    await fetch(`${API_URL}/books/${id}`, {
      method: 'DELETE'
    })
  }
}
