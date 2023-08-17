// import { UserModel } from '../models/user.js'

import { UserModel } from '../models/userMongo.js'
import { validatePartialUser } from '../schemas/user.js'

export class UserController {
  static async getAll (req, res) {
    try {
      const { rol } = req.query
      const rows = await UserModel.getAll({ rol })
      res.json(rows)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getId (req, res) {
    try {
      const { id } = req.params
      const rows = await UserModel.getUser({ id })
      res.json(rows)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async create (req, res) {
    try {
      const result = await UserModel.create({ input: req.body })
      res.json(result)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async update (req, res) {
    const { id } = req.params
    const result = validatePartialUser(req.body)
    if (result.error) {
      return res.status(400).json({ message: JSON.parse(result.error.message) })
    }

    try {
      const usr = await UserModel.update({ id, input: result.data })
      if (usr) {
        res.status(200).json({ message: `Se actualizó el usuario con id ${id}` })
      } else {
        res.status(404).json({ message: `No se encontró el usuario con id ${id}` })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async delete (req, res) {
    try {
      const { id } = req.params
      const usr = await UserModel.delete({ id })
      if (usr) {
        res.status(200).json({ message: `Se eliminó el usuario con id ${id}` })
      } else {
        res.status(404).json({ message: `No se encontró el usuario con id ${id}` })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
