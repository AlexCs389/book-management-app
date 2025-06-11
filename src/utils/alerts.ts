import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const showLoading = (message = 'Guardando...') => {
  return MySwal.fire({
    title: message,
    didOpen: () => {
      MySwal.showLoading()
    },
  })
}

export const showConfirmation = (title: string, message: string) => {
  return MySwal.fire({
    title,
    text: message,
    icon: 'warning'
  })
}

export const showSuccess = (title: string, message: string) => {
  return MySwal.fire({
    title,
    text: message,
    icon: 'success'
  })
}

export const showError = (title: string, error: unknown) => {
  return MySwal.fire({
    title,
    text: error instanceof Error ? error.message : 'Ocurrió un error',
    icon: 'error'
  })
}
