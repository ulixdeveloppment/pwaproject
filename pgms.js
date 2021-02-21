
var divcount = 0;
var domParent = document.getElementById("exos");
var currentValue = " ";
var noDefinedAction ="Aucune action associée a ce bouton n'est définie pour le moment, rééssayez ulterieurement";
function addExercise() {
    // recupération de la valeur de l'input exercice
    currentValue = document.getElementById("addExoInput").value;

    // div conteneur vertical
        var lidiv = document.createElement("DIV");
            lidiv.setAttribute("id","div"+divcount.toString());
            lidiv.setAttribute("class","hzcontainerblock");
            divcount+=1;

        var nameBlock = document.createElement("DIV");
            nameBlock.setAttribute("class","nameDiv");
        var buttonBlock = document.createElement("DIV");
            buttonBlock.setAttribute("class","buttonDiv");

        // creation des éléments natifs p et buttons dans le dom
            // paragraphe nom de l'exercice
                var eName = document.createElement("P");
            // boutton de suppression de l'exercice
                var delButton = document.createElement("BUTTON");
                    delButton.setAttribute('onclick','deleteElement("div'+(divcount-1).toString()+'")'); 
            

                // creation des noeuds textes html
                    var nodeText = document.createTextNode(currentValue);
                    var nodeButton = document.createElement("I");
                        nodeButton.setAttribute("class","fas fa-trash-alt")
                // ajout des noeuds textes aux élements natifs
                    delButton.appendChild(nodeButton);
                    eName.appendChild(nodeText);

        // ajouts de élément natifs aux divs blocks
            nameBlock.appendChild(eName);
            buttonBlock.appendChild(delButton);

    // ajouts des blocks a la div principale
        lidiv.appendChild(nameBlock);
        lidiv.appendChild(buttonBlock);
  
    document.querySelector(".exercices").appendChild(lidiv);
    document.getElementById('addExoInput').value="";
  }


function deleteElement(element){
    domParent.removeChild(document.getElementById(element));    
}

function eraseAll(){
    alert(noDefinedAction);
}
function saveProgram(){
    alert(noDefinedAction);
}
function launchSession(){
    alert(noDefinedAction);
}