
// Importer la fonction getHeure qui est dans le fichier generate.js
import { getHeure, getMinute, getSecondes } from "./generate.js";

// Importer la variable nom appartir du fichier users.js
import {nom, utilisateur} from "./users.js";

// Selection de la balise body
let body = document.querySelector("body");

// recuperation de l'id nom 
let nomUtilisateur = document.querySelector("#nom");
nomUtilisateur.textContent = nom; // On change le contenue 

// recuperation de l'id heure
let heure = document.querySelector("#heure");
heure.textContent = getHeure(); 


function paragraphe(valeur){
    let p = document.createElement("p");
    p.innerHTML = valeur;
    return p;
}
// 2. Importer l'objet utilisateur

let afficheUtilisateur = document.createElement("div");
let texteH3 = document.createElement("h3");
texteH3.textContent = "L'Utilisateur";

afficheUtilisateur.appendChild(paragraphe("Nom : " + utilisateur.nom));
afficheUtilisateur.appendChild(paragraphe("Prenom : " + utilisateur.prenom));
afficheUtilisateur.appendChild(paragraphe("Village : " + utilisateur.village));

body.appendChild(texteH3);
body.appendChild(afficheUtilisateur);

// 3. Afficher dans index.html : nom, prenom et village
