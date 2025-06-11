import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bookSchema } from '../validations/bookSchema'
import { BookInterface } from '../interfaces/BookInterface'
import { useNavigate, useParams } from 'react-router-dom'
import { bookService } from '../services/bookService'
import { showLoading, showSuccess, showError } from '../utils/alerts'
import { useState, useEffect } from 'react'

interface BookFormProps {
  mode?: 'create' | 'edit'
}

function BookForm({ mode = 'create' }: BookFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { id } = useParams()
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid }
  } = useForm<BookInterface>({
    mode: 'onChange',
    resolver: yupResolver(bookSchema)
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (mode === 'edit' && id) {
      const loadBook = async () => {
        try {
          const book = await bookService.getBook(parseInt(id))
          setValue('title', book.title)
          setValue('author', book.author)
          setValue('price', book.price)
        } catch (error) {
          await showError('Error', error)
          navigate('/')
        }
      }
      loadBook()
    }
  }, [mode, id, setValue, navigate])

  const onSubmit = async (data: BookInterface) => {
    if (isSubmitting) return

    setIsSubmitting(true)
    showLoading()

    try {
      if (mode === 'edit' && id) {
        await bookService.updateBook(parseInt(id), data)
        await showSuccess(
          'Libro actualizado',
          'El libro ha sido actualizado correctamente'
        )
      } else {
        await bookService.createBook(data)
        await showSuccess(
          'Libro guardado',
          'El libro ha sido guardado correctamente'
        )
      }
      reset()
      navigate('/')
    } catch (error) {
      await showError('Error', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título del libro"
            {...register('title')}
            disabled={isSubmitting}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el autor del libro"
            {...register('author')}
            disabled={isSubmitting}
          />
          {errors.author && (
            <p className="text-danger">{errors.author.message}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el precio del libro"
            {...register('price')}
            disabled={isSubmitting}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </Form.Group>
        <div className="d-flex justify-content-center gap-2">
          <Button
            variant="secondary"
            onClick={handleCancel}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? 'Guardando...' : mode === 'edit' ? 'Actualizar' : 'Guardar'}
          </Button>
        </div>
      </Form>
    </>
  )
}

export default BookForm
