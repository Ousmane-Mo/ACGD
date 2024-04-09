$(document).ready(function () {
    //IsPairOrNot();    
    //Palindrome();
    //TrafficLight();
});

//Exercice 1 Ispair
/*
function IsPairOrNot(nb) {
     // Version 1 (Long)
    while (nb != 'Q') {
        nb = prompt('Entrez un nombre: ( Ou Q pour quitter)');
        if (nb == 'Q') {
            alert("À bientôt chef !");
            console.log("À bientôt chef !");
        } else if (nb % 2 == 0) {
            alert("Le nombre est pair");
            console.log("Le nombre est pair");
        }
        else {
            alert("Le nombre est impair");
            console.log("Le nombre est impair");
        }
    }

    // Version 2 Ternaire (While)
    while (nb != 'Q') {
            nb = prompt('Entrez un nombre: ( Ou Q pour quitter)');
            nb == 'Q' ?  "Fin de la partie" : (nb % 2 == 0 ? console.log("Le nombre est pair") : console.log("Le nombre est impair"));

    }

    //Version 3
    return nb%2===0
    
} */

//Exercice 2 Palindrome
/*
function Palindrome(w) {
    //Version 1
    
    while (w != 'Q') {
        w = prompt( "Saisissez un mot: ( Ou Q pour quitter)");
        var reverseW = "";
        for (var i=w.length - 1; i >= 0 ; i-- ) {
            reverseW += w[i];
        }
            if (w == 'Q') {
                alert("À bientôt chef !");
            }
            else if (reverseW.toLowerCase() === w.toLowerCase()){
                alert('ce mot est bien un palindrome');
            } else{
                alert('ce mot n\'est pas un palindrome'); 
            }
    }

    // Version 2
    
} */

//Exercice II Traffic Light
/*
function TrafficLight() {
   setInterval(() => {
    $('.red').css('opacity', '100%');
    $('.yellow').css('opacity', '10%');
    $('.green').css('opacity', '10%');
   }, 5000);
   setInterval(() => {
    $('.yellow').css('opacity', '100%');
    $('.red').css('opacity', '10%');
    $('.green').css('opacity', '10%');
   }, 10000);
   setInterval(() => {
    $('.green').css('opacity', '100%');
    $('.yellow').css('opacity', '10%');
    $('.red').css('opacity', '10%');
   }, 15000);
} */

//Exercice 3 Modal
/*
$('.modal_dialog').hide();
    $('.btnModal').click(function (e) {
    $('.modal_dialog').show();
    });
    $('.modal_close').click(function (e) {
        $('.modal_dialog').hide();
    }); */

//Exercice 4 Calcul
/*
class Calcul {
    constructor(arr) {
        this.array = arr;
    }

    Somme(arr) {
        for (let i = 0; i < arr; i++) {
            somme = arr[i] + arr[i+1];
            return somme;
        }
        
    }


}
let  monArray = new Calcul([2, 4, 6, 8]);
console.log(monArray.Somme()); //Affiche la somme de chaque paire d'elements du tableau
*/

// Exercice 5 Armes et Sorts
/*
class Armes {
    constructor(nomArme, degatMin, degatMax) {
        this.NomArme = nomArme;
        this.DegatsMin = degatMin;
        this.DegatsMax = degatMax;
    }

    get Nom() {
        return `L'arme est appelée ${this.NomArme}`;
    }
    get Degats() {
        return `${this.DegatsMin}-${this.DegatsMax} DMG`;
    }
}
class Sorts {
    constructor(nomSort, elementSort, degatMin, degatMax) {
        this.NomSort = nomSort;
        this.ElementSort = elementSort;
        this.DegatsMin = degatMin;
        this.DegatsMax = degatMax;
    }
    afficherInformations() {
        console.log(`Ce sort est le "${this.NomSort}" qui utilise l'element "${this.ElementSort}",
        il inflige des dégâts entre ${this.DegatsMin} et  ${this.DegatsMax} DMG`);

}
*/

// Exercice 6 Personnage
/*
class Personnage{
    constructor(nomPerso, viePerso, forcePerso, classePerso){
            this.Nom = nomPerso ;
            this.Vie = viePerso ;
            this.Force = forcePerso ;
            this.Classe = classePerso ;
    }
    
    get Informations(){
        
        // On peut ajouter une fonction d'affichage pour les informations du personnage
        return `Le personnage s'appelle ${this.Nom}, il a ${this.Vie} points de Vie, une Force de ${this.Force} et
        let texteInfo ="";
        texteInfo += "Le personnage "+this.Nom+" est un ";
        texteInfo += this.Classe+".\n";
    }
    AfficherStatistiques () {
        console.log("==========STATISTIQUES==========");
        console.log ("Nom: " + this.Nom);
        console.log ("Classe: " + this.Classe + " de niveau");
        console.log ("Points de Vie (Vies) : " + this.Vie);
        console.log ("Points de Force: "+this.Force);
    }
}

class Mage extends Personnage {
    super()
}

class Guerrier extends Personnage {
    super()
}

class Archer extends Personnage {
    super()
}

class Assassin extends Personnage {
    super()
}
*/