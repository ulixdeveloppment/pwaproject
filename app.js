if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js");
}
var showed = 0;
function eventClick(eventObj){
    if(showed==0){
        console.log(showed);
        document.getElementById('footer').style.top  = "80%";
        showed=1;
    }
    else{
        console.log(showed)
        document.getElementById('footer').style.top  = "100%";
        showed=0;
    }
}