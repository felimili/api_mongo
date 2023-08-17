import { connect } from '../database/dbmongo.js'
import { ObjectId } from 'mongodb'

const table = 'usuarios'

export class UserModel {
  static async getAll ({ rol }) {
    const db = await connect({ table })
    if (rol) {
      return db.find({
        rol: {
          $elemMatch: {
            $regex: rol,
            $options: 'i'
          }
        }
      }).toArray()
    }

    return db.find({}).toArray()
  }

  static async create ({ input }) {
    const db = await connect({ table })
    await db.insertOne(input)
    return input
  }

  static async update ({ id, input }) {
    const db = await connect({ table })
    const objectId = new ObjectId(id)

    const { ok, value } = await db.findOneAndUpdate({ _id: objectId }, {
      $set: input
    }, { returnNewDocmuent: true })

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
