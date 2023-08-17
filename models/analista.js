import db from '../database/db.js'

export class AnalistaModel {
  static async getAll () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM analistas', (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  static async getId ({ id }) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM analistas WHERE id = ?', [id], (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  static async create ({ input }) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO analistas SET ?', [input], (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  static async update ({ id, input }) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE analistas SET ? WHERE id = ?', [input, id], (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
}
