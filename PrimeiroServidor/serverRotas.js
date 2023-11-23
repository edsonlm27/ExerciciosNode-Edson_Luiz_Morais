const http = require("http")

const servidor = http.createServer(function (req, resp) {
    var resposta = "Sejam todos bem vindos!!!"

    let html
    if (req.url == "/") {
        html =
        `
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>Saudações a todos!!</h1>
                    <p>Nossa acolhida: ${resposta}</p>
                </body>
            </html>
        `
    }else if (req.url == "/form") {
        html =
        `
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Formulário de Cadastro</title>
                <style>
                    .linha {
                        display: block;
                        margin-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>Formulário de Cadastro</h1>
                <form action="">
                    <label for="idNome" class="linha">Digite o seu nome</label>
                    <input type="text" name="nmNome" id="idNome" class="linha">
                    <label for="idIdade" class="linha">Digite a sua idade</label>
                    <input type="number" name="nmIdade" id="idIdade" min="0" max="120" class="linha">
                    <button id="idCadastro" class="linha">Efetue o seu cadastro</button>
                </form>
                
            </body>
            </html>
        `
    }

    resp.end(html)

})

servidor.listen(3000)