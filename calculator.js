const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true})) 
//body parser te permite ir a cualquiera de tus rutas y acceder al req.body. 
//urlencoded para obtener acceso a los datos del formulario, lo que se publica en el servidor desde un formulario HTML. extended: true, permite publicar objetos anidados, lo requiere bodyParser

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html") 
});

app.post("/", function(req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let resultAdd = num1 + num2; 

    res.send("The result of the calculation is " + resultAdd)
}) //para que nuestro servidor pueda procesar la solicitud de send

app.listen(3000, function() {
    console.log("Server is running on port 3000.")
});