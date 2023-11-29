const { log } = require("console")
const express = require("express")
const fs = require("fs/promises")

const app = express()

app.get("/", function (req, res) {
        res.send("Olá, rota raiz funcionando!")
    })

app.get("/cargainicial", async (req, res)=>{
    // ler arquivo config.csv
    const candidatosDados = await fs.readFile("config.csv", "utf-8");

    // quebrar o arquivo config.csv em um array de usuários
    const candidatos = candidatosDados.split("\r\n")
    
    // quebrar a linha (elemento do array do item anterior) em dados do candidato (array)
    const candidatosDetalhes = []
    candidatos.forEach(candidato =>{
        let candidatoDados = candidato.split(",")
        let candidatoObj = {
            tipoEleicao: candidatoDados[0],
            numeroCandidato: candidatoDados[1],
            nomeCandidato: candidatoDados[2],
            urlFoto: candidatoDados[3]
        }
        candidatosDetalhes.push(candidatoObj)
    })

    // responder o array de candidatos
    res.send(candidatosDetalhes)
})

const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Servidor da Urna Eletrônica rodando na porta ${PORT}`);
})
