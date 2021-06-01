//Importar la biblioteca express para la creación de servidores
const express = require('express');

//Crear el servidor
const app = express();

//Respuesta al método GET con un mensaje de texto
app.get('/',(req,res)=>{
    res.send('Hola que tal bienvenido');
});

app.listen(80,()=>console.log("Servidor HTTP en línea en el puerto 80"));
