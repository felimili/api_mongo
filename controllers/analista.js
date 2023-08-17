// import { AnalistaModel } from '../models/analista.js'

import { AnalistaModel } from '../models/analistaMongo.js'

export class AnalistaController {
  static async getAll (req, res) {
    try {
      const analistas = await AnalistaModel.getAll()
      if (analistas) {
        res.status(200).json(analistas)
      } else {
        res.status(404).json({ message: 'No se encontraron analistas' })
      }
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  static async getId (req, res) {
    try {
      const analista = await AnalistaModel.getId({ id: req.params.id })
      if (analista) {
        res.status(200).json(analista)
      } else {
        res.status(404).json({ message: 'No se encontro el analista' })
      }
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  static async create (req, res) {
    try {
      const analista = await AnalistaModel.create({ input: req.body })
      if (analista) {
        res.status(200).json(analista)
      } else {
        res.status(404).json({ message: 'No se creo el analista' })
      }
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  static async update (req, res) {
    try {
      const id = req.params.id
      const analista = await AnalistaModel.update({ id, input: req.body })
      if (analista) {
        res.status(200).json({ message: `Se actualizó el usuario con id ${id}` })
      } else {
        res.status(404).json({ message: 'No se actualizo el analista' })
      }
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  static async delete (req, res) {
    try {
      const id = req.params.id
      const analista = await AnalistaModel.delete({ id })
      if (analista) {
        res.status(200).json({ message: `Se elimino el usuario con id ${id}` })
      } else {
        res.status(404).json({ message: 'No se elimino el analista' })
      }
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }
}
