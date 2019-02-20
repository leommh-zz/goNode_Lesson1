const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// lib de templates front
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// Conceito de Middleware
// const logMiddleware = (req, res, next) => {
//   console.log(
//     `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
//   );

//   req.appName = "GoNode";

//   return next();
// };
// app.use(logMiddleware);

// Seta o tipo de arquivos de view
app.use(express.urlencoded({ extend: false }))
app.set('view engine', 'njk')

const users = ['Leonardo Morini', 'João Kleber']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body)
  return res.redirect('/')
})

app.listen(3000)
