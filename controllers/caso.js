import { CasoModel } from '../models/caso.js'

export class CasoController {
  static async getAll (req, res) {
    try {
      const casos = await CasoModel.getAll()
      res.json(casos)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getId (req, res) {
    try {
      const { id } = req.params
      const caso = await CasoModel.getId({ id })
      if (caso.length === 0) {
        res.status(404).json({ error: 'Caso no encontrado' })
      } else {
        res.json(caso)
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
