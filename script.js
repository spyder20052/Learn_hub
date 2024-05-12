document.addEventListener("DOMContentLoaded", function() {
    const accueilLink = document.getElementById("accueil");
    const coursLink = document.getElementById("cours");
    const aproposLink = document.getElementById("apropos");
    const contactLink = document.getElementById("contact");
    const contenu = document.getElementById("contenu");

    accueilLink.addEventListener("click", function(event) {
        event.preventDefault();
        contenu.innerHTML = "<h2>Accueil</h2><p>Bienvenue sur la Plateforme d'Apprentissage en Ligne. Choisissez une section ci-dessus pour commencer.</p>";
    });

    coursLink.addEventListener("click", function(event) {
        // Ne rien faire ici, car le lien mène déjà vers la bonne page
    });

    aproposLink.addEventListener("click", function(event) {
        event.preventDefault();
        contenu.innerHTML = "<h2>À Propos de Nous</h2><p>Nous sommes une plateforme d'apprentissage en ligne dédiée à fournir des cours de haute qualité sur une variété de sujets.</p>";
    });

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        contenu.innerHTML = "<h2>Contactez-nous</h2><p>Vous pouvez nous contacter à l'adresse email suivante : contact@plateforme.com</p>";
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Sélectionnez la carte de cours "Introduction à Python"
        const introPython = document.getElementById("intro-python");
        // Sélectionnez la section de contenu où les données de l'API seront affichées
        const contenu = document.getElementById("contenu");
    
        // Ajoutez un gestionnaire d'événements au clic sur le lien de la carte
        introPython.querySelector("a").addEventListener("click", function(event) {
            event.preventDefault();
            // Faites une requête à l'API de documentation Python
            fetch("https://docs.python.org/3/library/index.html")
                .then(response => response.text())
                .then(data => {
                    // Affichez les résultats dans la section de contenu
                    contenu.innerHTML = data;
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des données de l'API:", error);
                });
        });
    });
    
    coursLink.addEventListener("click", function(event) {
        event.preventDefault();
        fetch("https://votreapi.com/cours")
            .then(response => response.json())
            .then(data => {
                let html = "<h2>Nos Cours</h2><ul>";
                data.forEach(cours => {
                    html += <li>${cours.titre}</li>;
                });
                html += "</ul>";
                contenu.innerHTML = html;
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des cours:", error);
            });
    });

    aproposLink.addEventListener("click", function(event) {
        event.preventDefault();
        contenu.innerHTML = "<h2>À Propos de Nous</h2><p>Nous sommes une plateforme d'apprentissage en ligne dédiée à fournir des cours de haute qualité sur une variété de sujets.</p>";
    });

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        contenu.innerHTML = "<h2>Contactez-nous</h2><p>Vous pouvez nous contacter à l'adresse email suivante : contact@plateforme.com</p>";
    });
});

function generateQuiz(rubrique) {
    // Appel à l'API GPT-3 pour générer des questions et des réponses en fonction de la rubrique
    // Exemple d'utilisation fictive de l'API :
    const questions = apiCall(rubrique);

    // Sélectionnez la balise HTML où vous souhaitez afficher le quiz
    const quizContainer = document.getElementById('quiz');

    // Réinitialiser le contenu du quiz container
    quizContainer.innerHTML = '';

    // Parcourir les questions générées et les afficher dans le quiz container
    questions.forEach((question, index) => {
        // Créer les éléments HTML pour la question
        const questionElement = document.createElement('p');
        questionElement.textContent = Question ${index + 1}: ${question.text};

        const optionsList = document.createElement('ul');

        // Créer les éléments HTML pour chaque option de réponse
        question.options.forEach(option => {
            const optionItem = document.createElement('li');
            const radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = q${index};
            radioButton.value = option.value;
            optionItem.appendChild(radioButton);
            optionItem.appendChild(document.createTextNode(option.text));
            optionsList.appendChild(optionItem);
        });

        // Ajouter les éléments HTML de la question au quiz container
        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(optionsList);
    });

    // Ajouter un bouton de soumission du quiz
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Soumettre';
    submitButton.addEventListener('click', calculateScore);
    quizContainer.appendChild(submitButton);
}

// Fonction pour calculer le score du quiz
function calculateScore() {
    const quizContainer = document.getElementById('quiz');
    const questions = quizContainer.querySelectorAll('p');
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = quizContainer.querySelector(input[name="q${index}"]:checked);
        if (selectedOption) {
            const selectedValue = selectedOption.value;
            // Vérifier si la réponse sélectionnée est correcte
            if (selectedValue === questions[index].correctAnswer) {
                score++;
            }
        }
    });

    // Afficher le résultat du quiz
    const scoreContainer = document.getElementById('score');
    scoreContainer.textContent = Votre score : ${score} / ${questions.length};
    scoreContainer.style.display = 'block';
}

// Exemple d'appel à la fonction generateQuiz
generateQuiz('HTML');