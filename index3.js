const express = require('express')
const port = 3500
const app = express()

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.get('myfile',(req, res) => {
    res.sendFile('./img/TECSUP.png',{
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({
        nombres:"Antonio",
        apellidos:"Guzman Giron",
        edad:40,
        points:[1,2,3],
        adress:{
            ciudad:"Lima - Peru",
            distrito:"Santa Anita",
            calle:"Santa Anita"  
        }
    })
})
   
app.get('/isAslive', (req, res) => {
    res.sendStatus(204)
})

app.listen(port)
console.log('Server on port ${port}')