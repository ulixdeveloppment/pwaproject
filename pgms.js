var divcount = 0;
function addExercise() {
    console.log('hello');
    var lidiv = document.createElement("DIV");
        lidiv.setAttribute("class","div"+divcount.toString());divcount+=1;
        var text = document.createElement("P");
        var delButton = document.createElement("BUTTON");
            
            var nodeText = document.createTextNode("Hello world");
            var buttonText = document.createTextNode("Button");
            
            delButton.appendChild(buttonText);
            text.appendChild(nodeText);

        lidiv.appendChild(text);
        lidiv.appendChild(delButton);
  
    document.querySelector(".exercices").appendChild(lidiv);
  }