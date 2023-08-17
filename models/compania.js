import db from '../database/db.js'

export class CompaniaModel {
  static async getAll () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM companias', (error, rows) => {
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
      db.query('SELECT * FROM companias WHERE id = ?', [id], (error, rows) => {
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
      db.query('INSERT INTO companias (nombre) VALUES (?)', [input], (error, result) => {
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
      db.query('DELETE FROM companias WHERE id = ?', [id], (error, result) => {
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
      db.query('UPDATE companias SET nombre = ? WHERE id = ?', [input, id], (error, result) => {
        if (error) {
          reject(error)
        } else {
          if (result.affectedRows > 0) {
            resolve(result)
          } else {
            resolve(false)
          }
        }
      })
    })
  }
}
