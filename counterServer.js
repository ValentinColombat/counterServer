import express from 'express'

const app = express()
const port = 3000;
let compteur = 0;

app.get('/', (req, res) => {
  compteur++
  res.set('Content-Type', 'text/html; charset=utf-8')
  if (compteur === 1){
    res.send(`Bravo vous êtes le ${compteur}er visiteur!`)
  }
  else {
  res.send(`Bravo vous êtes le ${compteur}ème visiteur!`)
  }
  
})

app.listen(port, () => {
    console.log(`Le serveur à démarré sur http://localhost:${port}`)
})