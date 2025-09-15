# Objectif : faire un serveur qui compte les visites

Lors d'un appel au serveur, celui-ci doit répondre :
"Bravo, vous êtes le Xème visiteur !"
où X est le nombre de visites qui ont eu lieu sur le serveur.

## Notes :
- Penser à l'encodage pour le caractère 'è'.
- En quittant/stoppant le serveur, le compte se réinitialise. 
- Si le compteur s'incrémente de 2 par 2, c'est parce qu' il y a un appel automatique du client vers la route /favicon pour obtenir l'image miniature du site, il faudra trouver comment l'empêcher.

# Créer un serveur http 
- qui écoute sur le port 3000
- qui répond aux appels à la route `/N` (où N est un nombre supérieur ou égal à 0) avec la réponse suivante : à la spécification suivante : 
 `Le nombre N est (im)pair.`

Exemple :
- un appel sur `http://localhost:3000/8` répondra "Le nombre 8 est pair."
- un appel sur `http://localhost:3000/11` répondra "Le nombre 11 est impair."

## BONUS 
- Implémenter la méthode `isOdd` dans le fichier `isOdd.js`, l'exporter, puis l'importer depuis ce fichier.



