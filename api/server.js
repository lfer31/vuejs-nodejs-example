const express = require('express')
const randomId = require('random-id')
const app = express()
const bodyParser = require('body-parser')
const port = 3080
const path = require('path')

// place holder for the data
const users = [
  {
    id: '1',
    firstName: 'first1',
    lastName: 'last1',
    email: 'abc@gmail.com'
  },
  {
    id: '2',
    firstName: 'first2',
    lastName: 'last2',
    email: 'abc@gmail.com'
  },
  {
    id: '3',
    firstName: 'first3',
    lastName: 'last3',
    email: 'abc@gmail.com'
  }
]

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../my-app/dist')))

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users)
})

app.post('/api/user', (req, res) => {
  const user = req.body.user
  user.id = randomId(10)
  console.log('Adding user:::::', user)
  users.push(user)
  res.json('user addedd')
})

app.get('/', (req, res) => {
  console.log('get')
  console.log(path.join(__dirname, '../my-app/dist'))
  res.sendFile(path.join(__dirname, '../my-app/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
  console.log(__dirname)
})
