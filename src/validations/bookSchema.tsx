import * as yup from 'yup'

export const bookSchema = yup.object().shape({
  title: yup.string()
  .min(1, 'El título debe tener al menos 1 caracter')
  .max(50, 'El título debe tener menos de 50 caracteres')
  .required('El título es requerido'),
  author: yup.string().required('El autor es requerido'),
  price: yup.number()
    .typeError('El precio debe ser un número')
    .integer('El precio debe ser un número entero')
    .positive('El precio debe ser un número positivo')
    .required('El precio es requerido'),
})
