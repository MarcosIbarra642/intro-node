const express = require('express')
const app = express()

app.get('*', (request, response) => {
response.send({message: 'chanchito feliz'})
})

app.listen(3000, () => console.log("NUESTRO SERVIDOR ESTA escuchando en el puerto 3000"))
