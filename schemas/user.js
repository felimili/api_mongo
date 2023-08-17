import z from 'zod'

const userSchema = z.object({
  nombre: z.string({
    invalid_type_error: 'El nombre debe ser un string',
    required_error: 'El nombre es requerido'
  }).min(3).max(50),
  apellido: z.string({
    invalid_type_error: 'El apellido debe ser un string',
    required_error: 'El apellido es requerido'
  }).min(3).max(50),
  username: z.string({
    invalid_type_error: 'El username debe ser un string',
    required_error: 'El username es requerido'
  }).min(3).max(50),
  password: z.string({
    invalid_type_error: 'El password debe ser un string',
    required_error: 'El password es requerido'
  }).min(3).max(50),
  rol: z.string({
    invalid_type_error: 'El rol debe ser un string',
    required_error: 'El rol es requerido'
  }).min(3).max(50),
  id_inspect: z.number({
    invalid_type_error: 'El id_inspect debe ser un numero',
    required_error: 'El id_inspect es requerido'
  })
})
export function validateUser (object) {
  return userSchema.safeParse(object)
}
export function validatePartialUser (object) {
  return userSchema.partial().safeParse(object)
}
