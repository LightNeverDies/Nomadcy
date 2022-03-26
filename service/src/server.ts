const express = require('express')
require('dotenv').config()
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
const port = process.env.Server_PORT

const fDomain = require('./request/findDomain')

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(cors())

app.get('/', ( req:any, res:any ) => {
  res.send({
    status: true
  })
});

app.get('/domain', (req: any, res:any) => {
  fDomain.findDomain(req, res)
})

app.use(async (req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,HEAD,OPTIONS,TRACE')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Request-Method', '*')
  next()
})

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

http.listen(port, () => {
  console.log(`Info: HTTP Server is running on port ${port}`)
});