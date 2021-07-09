const express = require('express')
const allData = require('./data/allData')
const app = express()
 
app.get('/getData', function (_req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');
  let date = new Date()
  let name = (date.getMonth()+1).toString()+date.getDate().toString()+date.getFullYear().toString()
  let topic = _req.query.topic
  let a = "data"
  //res.send(name)
  res.send(allData[name][topic])
})

app.listen(3000)
console.log("App started")