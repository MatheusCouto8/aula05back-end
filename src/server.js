import express from 'express'
import { config } from 'dotenv'
import routes from "./routes/index.routes.js";

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes);

app.get("/personagens", (req, res) =>{
    return res.status(200).send(personagens)
})

app.post("/emocoes", (req, res) =>{
    const {nome, cor} = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(200).send(emocoes)
})

app.listen(serverPort, () => {
    console.log(`😎 server started on http://localhost:${serverPort}`)
})