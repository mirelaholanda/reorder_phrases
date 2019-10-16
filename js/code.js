const min = 3;
const max = 10; 
var phrase = "";
var monTableau;

//Je utilise une function prope du js pour splité mon phrase et met dans ma variable tableau.
function creerTableau(){
    phrase = document.getElementById("champPhrase").value;
    phrase = phrase.trim();
    monTableau = phrase.split(" "); //split est propre du js
}

//Checké le réquis de minimum 3 et maximum 10 mots
function requis(){
    if(monTableau.length >= min && monTableau.length <= max){
        console.log("teste de true");
        return true;
    } else{
        alert("Votre phrase doit contenir au moins 3 mots et un maximum de 10 mots.");
        document.getElementById("champPhrase").focus();
        console.log("teste de false");
        return false;
    }
}

//function pour retirer les caractères speciaux
function excluCaracteres(){    
    for(var i=0; i<monTableau.length; i++){
        console.log(monTableau[i]);   
        if (!motValide(monTableau[i])){
            console.log(monTableau[i]);
            monTableau.splice(i, 1);
            i--;
        }
    }    
}

//function pour vérifier si le mot est valide
function motValide(mot){
    console.log(mot);
    var counter = 0;
    for(var i=0; i<mot.length; i++){
        if (mot[i] === "!" || mot[i] === "?" || mot[i] === "." || mot[i] === "," || mot[i] === ";")
           counter++; 
    }
    console.log(counter + " --" + mot.length);
    if (counter == mot.length)
        return false;

    return true;
} 


//Appel de la function principale
function transformer(){
    creerTableau();

    console.log("Avant le exclu: " + monTableau);
    excluCaracteres();
    console.log("Après le exclu: " + monTableau);

    if(requis()){
        
        console.log("Avant le reverse: " + monTableau);
        monTableau.reverse(); //reverse est propre du js
        console.log("Après le reverse: " + monTableau);

        phrase = monTableau.join(" "); //join est propre du js
        console.log("Après le join: "+ phrase);
        document.getElementById("phraseTransforme").value = phrase;
    }
    
}