require('dotenv').config()

const path = require('path')
const express = require('express')
const app = require('express')()

const PORT = process.env.PORT || '8080'

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
