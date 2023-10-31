# AMA_API

Pour commencer, on ouvre un terminal, se rend à la racine du repo et effectue la commande : node ./app.js.

Comme ma partie FrontEnd ne fonctionne pas, il faut télécharger l'application Postman : https://www.postman.com/downloads/?utm_source=postman-home

Ensuite, on ouvre l'application et on se connecte au port localhost:3000/api/recipes/

On peut ensuite directement utiliser un GET sur ce port pour obtenir la liste de toutes les recettes, en allant dans body dans la section résultats.
On peut faire un POST avec ce même port, sélectionner body dans les paramètres d'ajout et entrer la recette à ajouter avec les propriétés: id, name, description, ingredients, instructions, createdAt et updatedAt.
On peut ensuite, avec GET en ajoutant au port précédent, l'id à la fin, rechercher une recette avec un id précis.
On peut également supprimer une recette avec un certain id avec DELETE, ou modifier une recette avec un certain id avec PUT, en réécrivant la recette concernée dans body.
Par exemple, si on veut faire une de ces opérations pour une recette avec un id de 1, voici l'url : localhost:3000/api/recipes/1