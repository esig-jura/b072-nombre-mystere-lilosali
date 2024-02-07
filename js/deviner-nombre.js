/**
 * Jeu du nombre mystère
 * @author  lilos Ali
 * @version 2.0
 * @since   07.02.2024
 */

'use strict';
/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//initialistion des variables
let nbMystere = 0;
let nbEssais= 0;
let reponse= 0;
let message= 'Entrez un nombre entre 1 et 100 :';

// Appel de la fonction pour générer le nombre mystère
nbMystere = tireNombre(1,100);

// Boucle  avec do weil
do {
    // Demande à l'utilisateur de deviner le nombre mystère
    reponse = parseInt(prompt(message));

    // Incrémente le nombre d'essais
    nbEssais++;

    // Compare la réponse avec le nombre mystère
    if (reponse < nbMystere) {
        message = `C'est plus.`;

    } else if (reponse > nbMystere) {
        message = `C'est moins.`;
    }

} while (reponse !== nbMystere);

alert(`Vous avez trouvé après ${nbEssais} essais.`);

// Fin du jeu


