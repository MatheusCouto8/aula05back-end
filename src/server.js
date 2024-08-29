import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome:"Nojinho",
        cor: "verde"
    },

    {
        id: 2,
        nome:"Alegria",
        cor: "Amarelo"
    },

    {
        id: 3,
        nome:"Raiva",
        cor: "Vermelho"
    }
]

const personagens = [
    {
        id: 100,
        nome: "Mickey",
        studio: "Disney",
        vivo: true

    },

    {
        id: 100,
        nome: "Pateta",
        studio: "Disney",
        vivo: true

    },

    {
        id: 100,
        nome: "Tio Patinhas",
        studio: "Disney",
        vivo: true

    }
]

app.get("/", (req, res) =>{
    return res.status(200).send({ message:"Hello, World"})
})

app.get("/2tds2", (req, res) =>{
    return res.status(200).send({ message:"Hello, World"})
})

app.get("/emocoes", (req, res) =>{
    return res.status(200).send(emocoes)
})
app.get("/personagens", (req, res) =>{
    return res.status(200).send(personagens)
})

app.listen(serverPort, () => {
    console.log(`😎 server started on http://localhost:${serverPort}`)
})

