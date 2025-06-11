import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { BookInterface } from '../interfaces/BookInterface'
import { bookService } from '../services/bookService'
import { Button } from 'react-bootstrap'
import { formatCurrency } from '../utils/formatters'
import { showConfirmation } from '../utils/alerts'
import { useNavigate } from 'react-router-dom'

function BooksList() {
  const [books, setBooks] = useState<BookInterface[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    bookService.getBooks().then(setBooks)
  }, [])

  const handleDelete = (id: number) => {
    showConfirmation(
      'Eliminar libro',
      '¿Estás seguro de querer eliminar este libro?'
    ).then((result) => {
      if (!result.isConfirmed) return
      bookService.deleteBook(id)
      setBooks(books.filter((book) => book.id !== id))
    })
  }

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`)
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{formatCurrency(book.price)}</td>
              <td>
                <Button 
                  variant="primary" 
                  className="me-2"
                  onClick={() => handleEdit(book.id!)}
                >
                  Editar
                </Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleDelete(book.id!)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default BooksList
