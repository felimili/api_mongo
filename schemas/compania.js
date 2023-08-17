import z from 'zod'

const companiaSchema = z.object({
  nombre: z.string({
    invalid_type_error: 'El nombre debe ser un string',
    required_error: 'El nombre es requerido'
  }).min(3).max(50)
})

export function validateCompania (object) {
  return companiaSchema.safeParse(object)
}

// partial lo que hace es hacer que todos los campos
// del schema sean opcionales, esto es para actualizar

export function validatePartialCompania (object) {
  return companiaSchema.partial().safeParse(object)
}
