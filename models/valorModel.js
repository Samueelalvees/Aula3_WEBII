const fetch = require('node-fetch')
const { response } = require('express')

function receberValor(req, res) {
    let url = 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_BRL&compact=ultra&apiKey=873041c527593ec7e31e'
    fetch(url)
    .then((response) =>{
        return response.json()
    })
    .then((rows) => {
        let resultado = ((req.params.valor_real) / (rows.USD_BRL))
        console.log('Valor atual do dólar: '+rows.USD_BRL)
        console.log('Real: '+req.params.valor_real)
        return res.json(resultado)
    })
}
module.exports = {receberValor}