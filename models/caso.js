import db from '../database/db.js'

export class CasoModel {
  static async getAll () {
    return new Promise((resolve, reject) => {
      db.query(`SELECT c.id, t.apellido, o.nombre , tc.nombre as docu
      FROM casos as c 
      INNER JOIN terceros as t on c.id_tercero = t.id
      INNER JOIN companias as o on c.id_compania = o.id
      INNER JOIN tipo_doc as tc on t.id_tipo_doc = tc.id`, (error, rows) => {
        if (error) {
          reject(error)
        } else {
          resolve(rows)
        }
      })
    })
  }

  static async getId ({ id }) {
    return new Promise((resolve, reject) => {
      db.query(`SELECT c.id, t.apellido, o.nombre , tc.nombre as docu
      FROM casos as c 
      INNER JOIN terceros as t on c.id_tercero = t.id
      INNER JOIN companias as o on c.id_compania = o.id
      INNER JOIN tipo_doc as tc on t.id_tipo_doc = tc.id where c.id = ?`, [id], (error, rows) => {
        if (error) {
          reject(error)
        } else {
          resolve(rows)
        }
      })
    })
  }
}
