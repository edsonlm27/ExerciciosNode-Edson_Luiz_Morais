const http = require("http")

const servidor = http.createServer(function(req, resp){
    var resposta = 20

    resp.end(
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

    )

})

servidor.listen(3001)