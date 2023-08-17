import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = 'mongodb+srv://arieloscar2000:698KbxG2s9M8OMd4@cluster0.rcbynkv.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function connect ({ table }) {
  try {
    const collection = JSON.stringify(table).replace(/['"]+/g, '')
    await client.connect()
    const db = client.db('prueba')
    return db.collection(collection)
  } catch (e) {
    console.error('Error al conectar a la BD')
    console.error(e)
    await client.close()
  }
  client.close()
}
