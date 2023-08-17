import db from '../database/db.js'

export class DocModel {
  static async getAll () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM tipo_doc', (error, rows) => {
        if (error) {
          reject(error)
        } else {
          resolve(rows)
        }
      })
    })
  }

  static async create ({ input }) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO tipo_doc (nombre) VALUES (?)', [input], (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }

  static async delete ({ id }) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM tipo_doc WHERE id = ?', [id], (error, result) => {
        if (error) {
          reject(error)
        } else {
          if (result.affectedRows > 0) {
            resolve(true)
          } else {
            resolve(false)
          }
        }
      })
    })
  }

  static async update ({ id, input }) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE tipo_doc SET nombre = ? WHERE id = ?', [input, id], (error, result) => {
        if (error) {
          reject(error)
        } else {
          if (result.affectedRows > 0) {
            resolve(true)
          } else {
            resolve(false)
          }
        }
      })
    })
  }
}
