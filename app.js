const express = require('express')
const app = express()
const valorModel = require('./models/valorModel')
const alunos = require('./alunos.json')

app.get('/alunos/todos', (req, res) => {
    res.json(alunos)
})

app.get('/moeda/:valor_real', valorModel.receberValor)

app.listen(3000, () => {
    console.log("App rodando na porta 3000")
})
