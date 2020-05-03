import * as mongoose from 'mongoose'

interface Options {
  username: string
  password: string
  dbName: string
}

class Repository {
  private db: mongoose.Connection

  constructor(options: Options) {
    const { username, password, dbName } = options
    const uri = `mongodb://${username}:${password}@localhost/${dbName}`
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    this.db = mongoose.connection
    this.db.on('error', (err) => console.log(err))
  }
}

export default Repository
