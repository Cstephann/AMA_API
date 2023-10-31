document.addEventListener("DOMContentLoaded", function () {
    // Récupérer la liste de recettes depuis l'API REST
    fetch("localhost:3000/api/recipes")
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById("recipe-list");
            data.forEach(recipe => {
                const recipeItem = document.createElement("div");
                recipeItem.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                `;
                recipeList.appendChild(recipeItem);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des recettes : ", error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const recipeForm = document.getElementById("recipe-form");

    recipeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const ingredients = document.getElementById("ingredients").value.split(",");
        const instructions = document.getElementById("instructions").value;

        // Créer un objet de recette à partir des données du formulaire
        const newRecipe = {
            name,
            description,
            ingredients,
            instructions
        };

        // Envoyer les données au backend via une requête POST
        fetch("localhost:3000/api/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
        .then(response => response.json())
        .then(data => {
            // Afficher ou mettre à jour la liste de recettes
            // (ajouter la nouvelle recette)
        })
        .catch(error => {
            console.error("Erreur lors de l'ajout de la recette : ", error);
        });
    });
});

