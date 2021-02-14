const { response } = require('express');
const express = require ('express');

const app = express();
const bodyParser = require('body-parser')
const db = require('./db')


app.use(bodyParser.urlencoded({extended: true}))


app.get("/products", (request, response) => {
    response.json(db.getProducts())
    
    
app.get("/products/:id", (request, response) => {
    response.json(db.getProduct(request.params.id))
})

app.post("/products", (request, response) => {
    const product = db.saveProduct({
        modelo: request.body.modelo,
        marca: request.body.marca,
        placa: request.body.placa,
        ano: request.body.ano,
        renavan: request.body.renavan,
        chasi: request.body.chasi
})
    response.json(product)
})

app.put("/products/:id", (request, response) => {
    const product = db.saveProduct({
        id: request.params.id,
        modelo: request.body.modelo,
        marca: request.body.marca,
        placa: request.body.placa,
        ano: request.body.ano,
        renavan: request.body.renavan,
        chasi: request.body.chasi
})
    response.json(product)
})

app.delete("/products/:id", (request, response) => {
    const product = db.deleteProduct(request.params.id)
       
    response.json(product)
})

});

app.listen(3001, () => {
    console.log('🚀Back-end startado')
});

