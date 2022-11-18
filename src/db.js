import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const uri = process.env.MONGO_URI

try {
  const db = await mongoose.connect(uri)
  console.log('Database is connected to', db.connection.name)
} catch (error) {
  console.error(error.message)
}

/*
  MONGO_URI=mongodb+srv://ricardo:ricardo@cluster0.nkx21tm.mongodb.net/?retryWrites=true&w=majority
*/
