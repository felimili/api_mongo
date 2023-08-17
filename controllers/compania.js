// import { CompaniaModel } from '../models/compania.js'
import { CompaniaModel } from '../models/companiaMongo.js'
import { validateCompania } from '../schemas/compania.js'

export class CompaniaController {
  static async getAll (req, res) {
    try {
      const rows = await CompaniaModel.getAll()
      res.json(rows)
    } catch (error) {
      console.error('Error fetching documents:', error)
    }
  }

  static async getById (req, res) {
    const id = req.params.id
    try {
      const compania = await CompaniaModel.getId({ id })
      if (compania) {
        res.status(200).json({ compania })
      } else {
        res.status(404).json({ message: `No se encontró la compañia con id ${id}` })
      }
    } catch (error) {
      console.error('Error fetching documents:', error)
    }
  }

  static async delete (req, res) {
    const id = req.params.id
    try {
      const result = await CompaniaModel.delete({ id })
      if (result) {
        res.status(200).json({ message: `Se eliminó la compañia con id ${id}` })
      } else {
        res.status(404).json({ message: `No se encontró la compañia con id ${id}` })
      }
    } catch (error) {
      console.error('Error deleting document:', error)
    }
  }

  static async update (req, res) {
    const id = req.params.id
    const result = validateCompania(req.body)
    if (result.error) {
      return res.status(400).json({ message: JSON.parse(result.error.message) })
    }
    try {
      const compania = await CompaniaModel.update({ id, input: result.data })
      if (compania) {
        res.status(200).json({ message: `Se actualizó la compañia con id ${id}` })
      } else {
        res.status(404).json({ message: `No se encontró la compañia con id ${id}` })
      }
    } catch (error) {
      console.error('Error fetching documents:', error)
    }
  }

  static async create (req, res) {
    const result = validateCompania(req.body)
    if (result.error) {
      return res.status(400).json({ message: JSON.parse(result.error.message) })
    }

    try {
      const compania = await CompaniaModel.create({ input: result.data })
      res.status(201).json({ compania })
    } catch (error) {
      console.error('Error creating document:', error)
    }
  }
}
