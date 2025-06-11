import BookForm from '../components/BookForm'

function EditBook() {
  return (
    <div>
      <h1 className="text-center mb-4">Editar Libro</h1>
      <BookForm mode="edit" />
    </div>
  )
}

export default EditBook
