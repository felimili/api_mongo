import mysql from 'mysql2'

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'ariel',
  password: 'Custom99',
  database: 'api'
})

conn.connect(function (error) {
  if (error) {
    throw error
  } else {
    console.log('Database is connected successfully !')
  }
})

export default conn
