const express = require("express")

const app = express()

app.listen(8080, () => {console.log("Servidor está ativo na porta: 8080")})

let nome = "Rafael"
let cor = "green"

app.get("/", (req, res) => {
    res.send('<h1 style="color: ${cor} >Olá ${nome}!!!</h1>');
});

app.post("/getHTML", (req, res)=> {
    const nome = req.body.nome;
    console.log('Olá ${nome}')
})
app.get("/", (req, res) => {
    res.send("<p>Olá mundo!</p>")
})