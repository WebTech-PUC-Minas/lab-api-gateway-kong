const express = require ('express')
const app = express ()

const routerAPI = require ('./routerAPI')
app.use ('/api', routerAPI)

app.use (function (req, res) {
  res.status(404).send ('Recurso não encontrado.')
})

// Inicializa o servidor HTTP
const PORT = process.env.PORT || 3000
app.listen (PORT, function () {
  console.log (`Servidor rodando em http://localhost:${PORT}`)
})
