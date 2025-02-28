var Kahoot = require("kahoot.js-updated");
var kahoots = [];
var codePartie = "630783"; // Code PIN de la partie Kahoot
var nomBot = "LGBT"; // Nom de base des bots
var nombreBots = 230; // Nombre de bots à ajouter

for (var i = 0; i < nombreBots; i++) {
    kahoots.push(new Kahoot()); // Création d'un nouveau bot Kahoot
    kahoots[i].join(codePartie, nomBot + " " + String(i)).catch(erreur => {
        console.log("Échec de la connexion " + erreur.description + " " + erreur.status);
    });

    kahoots[i].on("Joined", () => {
        console.log("Rejoint la partie avec succès");
    });

    kahoots[i].on("QuestionStart", (question) => {
        question.answer(
            Math.floor(
                Math.random() * question.quizQuestionAnswers[question.questionIndex]
            ) + 0
        ); // Répond à la question avec une réponse aléatoire
    });

    kahoots[i].on("Disconnect", (raison) => {
        console.log("Déconnecté à cause de " + raison);
    });
}