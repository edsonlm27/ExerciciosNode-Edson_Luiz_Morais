
const express = require("express")

const app = express()

// criação do servidor com o Express
const porta = 3301
app.listen (porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

// rotas
app.get("/", function (req, resp) {
    resp.send(
        `
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Página Home</title>
        </head>
        <body>
            <h1>Página Home</h1>
        </body>
        </html>
        `
    );
})

app.get("/sobre", function (req, resp) {
    resp.send(
        `
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Página Sobre</title>
        </head>
        <body>
            <h1>Página Sobre</h1>
        </body>
        </html>
        `
    );
})

app.get("/contato", function (req, resp) {
    const contato = {
        telefone: "48 98765 4321",
        email: "contato123@gmail.com"
    }

    resp.json(contato)
})
