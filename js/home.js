

function ageIndays(){
    var birthyear = prompt("Enter your date of birth")
    var ageindayss = (2020-birthyear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("you are " + ageindayss + "days old" )
    h1.setAttribute("id", "ageIndays");
    h1.appendChild(textAnswer);
    document.getElementById("flexbox-result").appendChild(h1)
    
}
function reset(){
    document.getElementById("ageIndays").remove();   
}

