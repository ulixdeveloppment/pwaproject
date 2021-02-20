//enregistrement du service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // L'enregistrement a fonctionné
        console.log("Enregistrement du service worker réussi pour le périmètre : ", registration.scope);
      }, function(err) {
        // L'enregistrement a échoué :(
        console.log("Échec de l'enregistrement du service worker: ", err);
      });
    });
}

//app principale
var showed = 0;
function eventClick(eventObj){
    if(showed==0){
        console.log(showed);
        document.getElementById('footer').style.top  = "85%";
        showed=1;
    }
    else{
        console.log(showed)
        document.getElementById('footer').style.top  = "100%";
        showed=0;
    }
}
function preventDefault(e){
    e.preventDefault();
}

function disableScroll(){
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}


