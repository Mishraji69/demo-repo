
const express = require('express')
const app = express()
const port = 4000

app.get("/route-handler", function (req, res) {
  res.json({
    name:"pranav",
    age:20
  })
  
})
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})