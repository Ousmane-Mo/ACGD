$(document).ready(function () {
    /* $('#btn-spoiler1').click(function () { 
        $('#text-2').toggleClass('hidden');
    });
    $('#btn-spoiler2').click(function () { 
        $('#text-3').toggleClass('hidden');
    });
    $('#shine').click(function () { 
        $('#text-3').css("background-color", "pink");
    });
    $('#all').click(function (e) { 
        $('.fruit').slideDown();
        $('.boisson').slideDown();
        $('.bouffe').slideDown();
    });
    $('#optfruits').click(function (e) { 
        $('.fruit').slideDown();
        $('.boisson').slideUp();
        $('.bouffe').slideUp();
    });
    $('#optbouffe').click(function (e) {
        $('.bouffe').slideDown();
        $('.boisson').slideUp();
        $('.fruit').slideUp();
     });
     $('#optboisson').click(function (e) {
        $('.boisson').slideDown(); 
        $('.bouffe').slideUp();
        $('.fruit').slideUp();
     });


    $('button').click(function () { 
        $(this).parent().css("background-color", "crimson" );
     });
     $('button').click(function () { 
        $(this).parent().toggleClass('crimbg');
     });

    exo11();
    */
})


/*
// EXERCICE 3 A 
// ESSAI 1
for (let i = 0; i < 200; i++) {
    if (i%3 === 0 && i%5 !== 0 ) {
        console.log("Fizz")
    } else if (i%5 === 0 && i%3 !== 0) {
        console.log("Buzz")
    } else if (i%3 === 0 && i%5 === 0) {
        console.log("Fizz Buzz")
    }
    else if (i%3 !== 0 || i%5 !== 0) {
        console.log(i)
    }
}

//ESSAI 2
for (let i = 1; i < 200; i++)  i%15 === 0 ? console.log("FizzBuzz") : i%3 === 0 ? console.log("Fizz") : i%5 === 0 ? console.log("Buzz") : console.log(i);

// EXERCICE 3 B
// ESSAI 1
let prix = Math.round(Math.random() * 100);
console.log("Mon nombre est :" + prix)
var essai = prompt("Devine mon nombre");
for (i=1 ; i<11 ; i++){
    if (essai === prix) {
        alert("Bravo tu as réussi en " + i + " essai");
        console.log("Nombre d'essai: " + i);
    }
     else if (essai > prix) {
        essai = prompt("Presque c'est -");
        console.log("Nombre d'essai restant: " + (10-i));
    } else if (essai < prix) {
        essai = prompt("Presque c'est +");
        console.log("Nombre d'essai restant: " + (10-i));
    }

    if (i === 10) {
        alert("Dommage tu as épuisé toutes tes chances mon nombre était: " + prix)
        break;
    }
}

//ESSAI 2 pas possible car ténaire offre pas de sortie à la boucle
let prix = Math.round(Math.random() * 100);
console.log("Mon nombre est :" + prix)
let essai = prompt("Devine mon nombre");

for (i = 1; i<11 ; i++) essai > prix ?  essai = prompt("Presque c'est -") :
essai < prix ? essai = prompt("Presque c'est +") :
i === 10 ? alert("Dommage tu as épuisé toutes tes chances mon nombre était: " + prix) :
alert("Bravo tu as réussi en " + i + " essai")




// EXERCIE 4 : CHATBOT STEWIE AND BRI
 let yourName = prompt("Hi my name's Stewie and he's Brian my dog and best friend")
  let choice = prompt("Ok " + yourName + " we have a few questions for you, you ready ?!")
  if (choice.toLowerCase() === "yes") {
      alert("Goog good!")
      let choice = prompt("Simple question first do you like Family Guy ? Yes or No")
          if (choice.toLowerCase() === "yes") {
           
          } else if (choice.toLowerCase() === "no") {
            
          }
 }
 else if (choice.toLowerCase() === "no") {
    
 }


 // EXERCICE 5 A :
function diviserParDeux(n){
    n /=2;
    return n;
}
// EXERCICE 5 B :
function somme(n,m){
    let s = n + m;
    return s;
}
// EXERCICE 5 C :
function trouveSigne(n){
   let signe = n > 0 ? "Positif" : n < 0 ? "Négatif" : "Nul"
    return signe
}

// EXERCICE 5 D :
function fact(n){
    m = n*1
    s = m + n
    m = n*1
    s = m + n
}   
console.log(fact(4));



// EXERCICE 6 PHASE 1
function choixBot(){
    let choix = Math.floor(Math.random() * 3);
    choix === 0 ? choix = "Pierre" : choix === 1 ? choix = "Feuille" : choix = "Ciseaux";
    return choix;
}
function ChiFouMi(choixBot) {
    choixBot = Bot;
    let choix = prompt("Pierre, Feuille ou Ciseaux");
    if (choixBot === "Ciseaux" && choix === "Pierre" || choixBot === "Feuille" && choix === "Ciseaux" || choixBot === "Pierre" && choix === "Feuille" ) {
        return "Gg ça! Après c'est un Bot hein donc chill out... "; 
    } else if (choixBot === "Pierre" && choix === "Ciseaux" || choixBot === "Ciseaux" && choix === "Feuille" || choixBot === "Feuille" && choix === "Pierre") {

        return "Perdu Nullos! ";
    } 
    return "Égalité -_- ! "   
}
alert(ChiFouMi(Bot));


// EXERCICE 6 PHASE 2
function ChiFouMi(choiceBot) {
    let userScore = 0;
    let botScore = 0;
    while (botScore < 2 && userScore < 2) {
        choiceBot = choixBot();
        console.log("Time to cheat son choix est : " + choiceBot);
        let choix = prompt("Pierre, Feuille ou Ciseaux");
        if (choiceBot === "Ciseaux" && choix === "Pierre" || choiceBot === "Feuille" && choix === "Ciseaux" || choiceBot === "Pierre" && choix === "Feuille" ) {
            userScore++;
            console.log("Votre score: " + userScore + "\nScore du bot : " + botScore + "\nVotre choix : " + choix + "\nChoix du Bot : " + choiceBot);
            alert("Gg ça! Après c'est un Bot hein donc chill out... ")
        } else if (choiceBot === "Pierre" && choix === "Ciseaux" || choiceBot === "Ciseaux" && choix === "Feuille" || choiceBot === "Feuille" && choix === "Pierre") {
            botScore++;
            console.log("Votre score: " + userScore + "\nScore du bot : " + botScore + "\nVotre choix : " + choix + "\nChoix du Bot : " + choiceBot);
            alert("Perdu Nullos! ");
        } else if (choiceBot === choix) {
            console.log("Votre score: " + userScore + "\nScore du bot : " + botScore + "\nVotre choix : " + choix + "\nChoix du Bot : " + choiceBot);
            alert("Égalité -_-... On repart! ");
        } else
            alert ("Choix invalide")
    }
    let lose = "BAHAHAHAHA Boloss va t'as perdu face à un bot\nVous: " + userScore + "\nBot: " + botScore;
    let win = "Calme toi c'est pas un exploit\nVous: " + userScore + "\nBot: " + botScore;
    return userScore < botScore ? lose : win
}
alert(ChiFouMi(choixBot()));


// EXERCICE 7 ÉPICERIE:
/* var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
function acheterFruits(fruit) {
    alert("Yo bienvenue dans mon épicerie il te faut quoi? \nOn a de la " + fruits[0] + ", du " + fruits[1] + ", de la " + fruits[2] + " et du " + fruits[3]);
    fruit = prompt("Choisis le fruits que tu veux\n( " + fruits + " )");
    if (fruits.includes(fruit)) {
        alert("Ok! Je te prends ça salut le reuf!");
        fruits.splice(fruits.indexOf(fruit),1);
    } else {
        alert('Choisis un fruit de la liste...');
    }
    alert("Ok du coup il me reste plus que:\n" + fruits);
}
acheterFruits ();


// EXERCICE 7 JEU DU PENDU:
var mauvaisesLettres = [ ]; // sera complété pendant le jeu
var lettresAttendues = [ 's', 'u', 'p', 'e', 'r' ];
var lettreTentes =[];
function PENDU(lettre) {
    alert("Bienvenue dans mon jeu du pendu le reuf.\nLe mot à trouver contient " + lettresAttendues.length + " lettres")
    while (lettresAttendues.length !== 0 && mauvaisesLettres.length !== 10) {
        lettre = prompt("Il te reste " + (10-mauvaisesLettres.length) + " chances.\nPlus que " + lettresAttendues.length + " lettres à trouver.\nEntre une lettre:");
        while(lettreTentes.includes(lettre)) {
            alert("T'as déjà utilisé cette lettre tkt cet essai ne compteras pas");
            lettre = prompt("Il te reste " + (10-mauvaisesLettres.length) + " chances.\nPlus que " + lettresAttendues.length + " lettres à trouver.\nEntre une lettre:");
        }
        if (!lettresAttendues.includes(lettre)) {
            mauvaisesLettres.push(lettre);
            lettreTentes.push(lettre);
            alert("Cette lettre ne figure pas dans le mot mystère")
            console.log("Liste des lettres ne figurant pas dans le mot mystère:  " + mauvaisesLettres);
            console.log("Liste des lettres tentés: " + lettreTentes);
        } else {
            lettresAttendues.splice(lettresAttendues.indexOf(lettre),1);
            lettreTentes.push(lettre);
            alert("Yes cette lettre figure bien dans le mot mystère.")
            console.log("Lettres restantes du mot mystère: " + lettresAttendues);
            console.log("Liste des lettres tentés: " + lettreTentes);
        }
        if (mauvaisesLettres.length === 10) {
            alert("Dommage tu as perdu ! Le mot était : Super");
        } else if (lettresAttendues.length === 0) {
            alert("GG tu as trouvé toutes les lettres le mot était: super.")
        }
    }    
}

// EXERCICE 7 JEU DU PENDU: BONUS
var mauvaisesLettres = [];
var lettresAttendues = ['e', 'n', 'q', 'u', 'i', 'q', 'u', 'i', 'n', 'e', 'r'];
var lettreTentes =[];
function PENDU(lettre) {
    alert("Bienvenue dans mon jeu du pendu le reuf.\nLe mot à trouver contient " + lettresAttendues.length + " lettres")
    while (lettresAttendues.length !== 0 && mauvaisesLettres.length !== 10) {
        lettre = prompt("Il te reste " + (10-mauvaisesLettres.length) + " chances.\nPlus que " + lettresAttendues.length + " lettres à trouver.\nEntre une lettre:");
        while(lettreTentes.includes(lettre)) {
            alert("T'as déjà utilisé cette lettre tkt cet essai ne compteras pas");
            lettre = prompt("Il te reste " + (10-mauvaisesLettres.length) + " chances.\nPlus que " + lettresAttendues.length + " lettres à trouver.\nEntre une lettre:");
        }
        if (!lettresAttendues.includes(lettre)) {
            mauvaisesLettres.push(lettre);
            lettreTentes.push(lettre);
            alert("Cette lettre ne figure pas dans le mot mystère")
            console.log("Liste des lettres ne figurant pas dans le mot mystère:  " + mauvaisesLettres);
            console.log("Liste des lettres tentés: " + lettreTentes);
        } else {
                while (lettresAttendues.includes(lettre)) {
                    lettresAttendues.splice(lettresAttendues.indexOf(lettre),1);
                }
                lettreTentes.push(lettre);
                alert("Yes cette lettre figure bien dans le mot mystère.")
                console.log("Lettres restantes du mot mystère: " + lettresAttendues);
                console.log("Liste des lettres tentés: " + lettreTentes);
        }
    } 
    if (mauvaisesLettres.length === 10) {
            alert("Dommage tu as perdu ! Le mot était : " + lettresAttendues);
        } else if (lettresAttendues.length === 0) {
            alert("GG tu as trouvé toutes les lettres le mot était: " + lettresAttendues)
        }   
}

var mauvaisesLettres = [];
var lettresAttendues = ['a', 's', 's', 'a', 's', 's', 'i', 'n', 'e', 'r'];
var lettreTentes =[];
function PENDU(lettre) {
    alert("Bienvenue dans mon jeu du pendu le reuf.\nLe mot à trouver contient " + lettresAttendues.length + " lettres")
    while (lettresAttendues.length !== 0 && mauvaisesLettres.length !== 10) {
        lettre = prompt("Il te reste " + (10-mauvaisesLettres.length) + " chances.\nPlus que " + lettresAttendues.length + " lettres à trouver.\nEntre une lettre:");
        while(lettreTentes.includes(lettre)) {
            alert("T'as déjà utilisé cette lettre tkt cet essai ne compteras pas");
            lettre = prompt("Il te reste " + (10-mauvaisesLettres.length) + " chances.\nPlus que " + lettresAttendues.length + " lettres à trouver.\nEntre une lettre:");
        }
        if (!lettresAttendues.includes(lettre)) {
            mauvaisesLettres.push(lettre);
            lettreTentes.push(lettre);
            alert("Cette lettre ne figure pas dans le mot mystère")
            console.log("Liste des lettres ne figurant pas dans le mot mystère:  " + mauvaisesLettres);
            console.log("Liste des lettres tentés: " + lettreTentes);
        } else {
                lettresAttendues.forEach(element => {
                    if (element === lettre) {
                        lettresAttendues.splice(lettresAttendues.indexOf(element),1);
                    }
                });
                lettreTentes.push(lettre);
                alert("Yes cette lettre figure bien dans le mot mystère.")
                console.log("Lettres restantes du mot mystère: " + lettresAttendues);
                console.log("Liste des lettres tentés: " + lettreTentes);
        }
    }    
    if (mauvaisesLettres.length === 10) {
        alert("Dommage tu as perdu ! Le mot était : " + lettresAttendues);
    } else if (lettresAttendues.length === 0) {
        alert("GG tu as trouvé toutes les lettres le mot était: " + lettresAttendues)
    }
}
PENDU();

// EXERCICE 8:
var annuaire = {
    patricia: '06 66 66 66 66',
    david: '07 77 77 77 77',
    alice: '06 79 78 74 75',
    bob: '07 69 68 64 65',
  };
  console.log(annuaire)
  console.log("Voici le numéro de " + Object.keys(annuaire)[0] +": " + annuaire.patricia);
  let contact = prompt("De quel personne voulez vous le numéro");
  alert("Voici le numéro de " + contact + ": " + annuaire[contact]);

function displayOne(contact) {
    return numéro = annuaire[contact];
}
function displayAll() {
    for (nom in annuaire) {
        console.log("Nom:",nom,"\nNuméro:", annuaire[nom], "\n")
    }
    return "Nom: " + nom + "\nNuméro: " + annuaire[nom] + "\n";
}
function addContact(contact,nbr) {
    annuaire[contact] = nbr;
}
function deleteContact(contact) {
    delete annuaire[contact];
}
function RepertoireTelephonique() {
    let choix = prompt("Yo tu veux faire quoi ? \nInstruction: \n- r: Rechercher et afficher un contact. \n- l: Afficher la liste des contacts. \n- a: Ajouter un contact. \n- s: Supprimer un contact. \n- q: Quitter.");
    while (choix !== "q") {
        if (choix ==="r") {
            choix = prompt("De quel personne voulez vous le numéro");
            alert(displayOne(choix));
            break;
        } else if (choix ==="l") {
            alert("Voici la liste de tout vos contacts\n" + displayAll());
            break;
        }
         else if (choix ==="a") {
            console.log("Annuaire avant ajout\n", annuaire)
            contact = prompt("entrez le nom du contact à ajouter");
            nbr = prompt("Entrez son numéro de téléphone");
            addContact(contact,nbr);
            console.log("Annuaire après ajout\n", annuaire)
            alert("Vous avez bien ajouté " + contact);
            break;
        } else if (choix ==="s") {
            console.log("Annuaire avant suppresion\n", annuaire)
            choix = prompt("Qui voulez vous supprimez de vos contacts");
            deleteContact(choix);
            console.log("Annuaire après suppresion\n", annuaire)
            alert("Vous avez bien supprimé " + choix);
            break;
        }
    }
}
RepertoireTelephonique();

class Etudiant {
    constructor(prenom, age){
        this.prenom  = prenom;
        this.age = age;
        alert("Nouvel etudiant instanciée")
        }
        
}
let etudiant1 = new Etudiant('Alice',23);
alert("Cette étudiante s'appelle " + etudiant1.prenom + " elle a " + etudiant1.age + ".")
let etudiant2 = new Etudiant('Bob',22);
alert("Cet étudiant s'appelle " + etudiant2.prenom + " il a " + etudiant2.age + ".")




function Afficher() {
    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    swal({
        text: `Bonjour ${prenom} ${nom}.`,
        icon: `info`
    });
    console.log(`Bonjour ${prenom} ${nom}.`);
}

function CalculatriceV1() {
    let n1 = parseInt(document.getElementById('nbr1').value);
    let n2 = parseInt(document.getElementById('nbr2').value);
    let sign = document.getElementById('sign').value;
    let resultat = ""
    if (sign === "+") {
        resultat = n1 + n2 ;
        swal({
            title: `Addition`,
            text: `${n1} + ${n2} = ${resultat}`,
            icon: `success`,
        });
    }
    else if (sign === "-") {
        resultat = n1 - n2 ;
        swal({
            title: `Substraction`,
            text: `${n1} - ${n2} = ${resultat}`,
            icon: `success`,
        });
    }
    else if (sign === "*") {
        resultat = n1 * n2 ;
        swal({
            title: `Multiplication`,
            text: `${n1} * ${n2} = ${resultat}`,
            icon: `success`,
        });
    }
    else if (sign === "/") {
        if (n2 != 0) {
            resultat = n1 / n2 ;
            swal({
                title: `Division`,
                text: `${n1} / ${n2} = ${resultat}`,
                icon: `success`,
            });
        }
        else {
            swal("Erreur", "Vous ne pouvez pas diviser par 0.", "error");
            }
    
    } else {
        swal({
            title: "Erreur",
            text: "Veuillez saisir un des 4 signes d'opération basique.",
            icon: `error`
        })
    }
}
function btn(nbr) {
    document.getElementById('calc-output').append(nbr);
}
function btnPlus() {
    document.getElementById('calc-output').append("+");
}
function btnSubstract() {
    document.getElementById('calc-output').append("-");
}
function btnMultiply() {
    document.getElementById('calc-output').append("*");
}
function btnDivision() {
    document.getElementById('calc-output').append("/");
}
function btnEgal() {
    let resultat = eval(document.getElementById('calc-output').innerHTML);
    document.getElementById('calc-output').innerHTML = resultat;
}
function btnClean() {
    document.getElementById('calc-output').innerHTML = "";
}
*/


// Exo 11
/*
function exo11() {
    $('body').append('<input type="text" id="text" name="text">');
    $('body').append('<button type="button" id="clear"> Clear </button>');
    $('button').click(function () { 
        $('input').val("");
     });
}
*/
