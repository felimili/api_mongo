import db from '../database/db.js'

export class UserModel {
  static async getAll ({ rol }) {
    return new Promise((resolve, reject) => {
      if (rol) {
        db.query('SELECT * FROM usuarios where rol =  ? ', [rol], (error, rows) => {
          if (error) {
            reject(error)
          } else {
            resolve(rows)
          }
        })
      } else {
        db.query('SELECT * FROM usuarios', (error, rows) => {
          if (error) {
            reject(error)
          } else {
            resolve(rows)
          }
        })
      }
    })
  }

  static async getUser ({ id }) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM usuarios where id =  ? ', [id], (error, rows) => {
        if (error) {
          reject(error)
        } else {
          resolve(rows)
        }
      })
    })
  }

  static async create ({ nombre, apellido, username, password, rol, idInspect }) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO usuarios (nombre, apellido, username, password, rol, id_inspect) VALUES (?, ?, ?, ?, ?, ?)', [nombre, apellido, username, password, rol, idInspect], (error, result) => {
        if (error) {
          reject(error)
        } else {
          const nuevoUsuarioId = result.insertId // Obtener el ID del nuevo usuario creado
          const nuevoUsuario = {
            id_usuario: nuevoUsuarioId,
            nombre,
            apellido,
            username,
            password,
            rol,
            idInspect
          }
          resolve(nuevoUsuario)
        }
      })
    })
  }

  static async update ({ id, input }) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE usuarios SET ? WHERE id = ?', [input, id], (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }
}
