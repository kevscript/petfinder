import express from 'express'
import cors from 'cors'
import { client } from './api'

// init port
const port = process.env.PORT || 5050

// init express server
const app = express()

// cors middleware
app.use(cors())


/**************************************************************/
/*** DEFAULT ROUTES */

// set default api route
app.get('/api', (req, res) => {
  res.json({ message: "default api route" })
})

// set auth route
app.get('/api/auth', (req, res) => {
  client.authenticate()
})



/**********************************/
/*** ANIMALS */

// get list of animals + search queries
app.get('/api/animals/search', (req, res) => {
  client.animal.search({ ...req.query })
    .then(response => {
      res.json({ ...response.data })
    })
    .catch(err => console.log(err))
})

// get specific animal with ID
app.get('/api/animals/:id', (req, res) => {
  client.animal.show(req.params.id)
    .then(response => {
      res.json({ ...response.data })
    })
    .catch(err => console.log(err))
})



/**********************************/
/*** BY TYPE */

// get all types of animals
app.get('/api/types', (req, res) => {
  client.animalData.types()
    .then(response => {
      res.json({ ...response.data })
    })
    .catch(err => console.log(err))
})

// get specific type of animal
app.get('/api/types/:type', (req, res) => {
  client.animalData.type(req.params.type)
    .then(response => {
      res.json({ ...response.data })
    })
    .catch(err => console.log(err))
})


/**********************************/
/*** BY BREED */

// get all breeds of specific type of animal
app.get('/api/breeds/:breed', (req, res) => {
  client.animalData.breeds(req.params.breed)
    .then(response => {
      res.json({ ...response.data })
    })
    .catch(err => console.log(err))
})


/**********************************/
/*** ORGANIZATIONS */

// get list of orgs + search queries
app.get('/api/orgs/search', (req, res) => {
  client.organization.search({ ...req.query })
    .then(response => {
      res.json({ ...response.data })
    })
    .catch(err => console.log(err))
})

// get specific organisation by ID
app.get('/api/orgs/:id', (req, res) => {
  client.organization.show(req.params.id)
    .then(response => {
      res.json({ ...response.data })
    })
    .catch(err => console.log(err))
})


/**********************************/
/*** TEST SERVER */

// test port
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})