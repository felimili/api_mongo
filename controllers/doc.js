// import { DocModel } from '../models/doc.js'
import { DocModel } from '../models/docMongo.js'
import { validatePartialTipo, validateTipo } from '../schemas/tipo_doc.js'

export class DocController {
  static async getAll (req, res) {
    try {
      const rows = await DocModel.getAll()
      res.json(rows) // Manejar los resultados aquí
    } catch (error) {
      console.error('Error fetching documents:', error)
    }
  }

  static async getId (req, res) {
    const id = req.params.id
    const result = await DocModel.getId({ id })
    if (result) {
      res.json(result)
    } else {
      res.status(404).json({ message: `No se encontró el documento con id ${id}` })
    }
  }

  static async delete (req, res) {
    const id = req.params.id

    const result = await DocModel.delete({ id })
    if (result) {
      res.status(200).json({ message: `Se elimino el documento con id ${id}` })
    } else {
      res.status(404).json({ message: `No se encontró el documento con id ${id}` })
    }
  }

  static async create (req, res) {
    const result = validateTipo(req.body)

    if (result.error) {
      return res.status(400).json({ message: JSON.parse(result.error.message) })
    }

    const docs = await DocModel.create({ input: result.data })
    res.status(201).json(docs)
  }

  static async update (req, res) {
    const id = req.params.id
    const result = validatePartialTipo(req.body)
    if (result.error) {
      return res.status(400).json({ message: JSON.parse(result.error.message) })
    }
    const docs = await DocModel.update({ id, input: result.data })
    if (docs) {
      res.status(200).json({ message: `Se actualizó el documento con id ${id}` })
    } else {
      res.status(404).json({ message: `No se encontró el documento con id ${id}` })
    }
  }
}
