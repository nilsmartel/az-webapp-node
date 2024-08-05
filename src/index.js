const express = require('express')
const app = express()
const port = process.env.PORT

if (!port) throw "PORT env musn't be empty"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sample', (req, res) => {
  let request = JSON.stringify(req)
  res.send(request)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
