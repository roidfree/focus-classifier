const express = require('express')
const cors = require('cors') 

const app = express()
app.use(cors())

const port = 3000

app.get('/get-focus', (req, res) => {
    res.send(`${Math.random()}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})