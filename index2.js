const express = require ('express')
const port = 3500
const app = express()

app.get('/products',(req,res)=>{
    res.send('Listar producto')
})

app.post('/products',(req,res)=>{
    res.send('Creando producto')
})

app.put('/products',(req,res)=>{
    res.send('Actualizar producto')
})

app.delete('/products',(req,res)=>{
    res.send('Eliminar producto')
})

app.patch('/products',(req,res)=>{
    res.send('Actualizando una parte del producto')
})

app.listen(port)
console.log('Server on port ${port}')