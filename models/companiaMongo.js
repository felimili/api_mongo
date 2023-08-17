import { connect } from '../database/dbmongo.js'
import { ObjectId } from 'mongodb'

const table = 'companias'

export class CompaniaModel {
  static async create ({ input }) {
    const db = await connect({ table })
    await db.insertOne(input)
    return input
  }

  static async getAll () {
    const db = await connect({ table })
    return db.find().toArray()
  }

  static async getId ({ id }) {
    const db = await connect({ table })
    const objectId = new ObjectId(id)
    return db.findOne({ _id: objectId })
  }

  static async update ({ id, input }) {
    const db = await connect({ table })
    const objectId = new ObjectId(id)
    const { ok, value } = await db.findOneAndUpdate({ _id: objectId }, {
      $set: input
    }, { returnNewDocument: true })

    if (!ok) return false

    return value
  }

  static async delete ({ id }) {
    const db = await connect({ table })
    const objectId = new ObjectId(id)
    const { deletedCount } = await db.deleteOne({ _id: objectId })

    if (deletedCount === 1) return true
  }
}
