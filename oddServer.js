import express from 'express'
import { isValidNumber, getParityMessage } from './isValidNumber.js'

const app = express()
const port = 3010

app.get('/', (req, res) => {
    res.send(`Bienvenue sur le serveur de nombres pairs et impairs. Utilisez "/votre nombre" pour vérifier un nombre.`)
})

app.get ('/:id', (req, res) => {
    const numberInput = Number(req.params.id)
    if (!isValidNumber(numberInput)) {
        res.send ('Choississez un nombre valide')
    } else {
        res.send(getParityMessage(numberInput))
    }
})

app.listen(port, () => {
    console.log(`Le serveur à démarré sur http://localhost:${port}`)
})