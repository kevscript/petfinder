import axios from 'axios'
import 'dotenv/config'
import { Client } from '@petfinder/petfinder-js'

const client = new Client({
  apiKey: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET
})

export { client }