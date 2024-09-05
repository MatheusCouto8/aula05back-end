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

app.listen(serverPort, () => {
    console.log(`😎 server started on http://localhost:${serverPort}`)
})