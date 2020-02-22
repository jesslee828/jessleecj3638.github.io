function myFunction() {
    document.getElementById("ThanksMsg").innerHTML = "Thanks for signing up!";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var catsname = document.getElementById("catsname").value;
    var petSelect = document.getElementById("pet-select").value;
    var comment = document.getElementById("comment").value;
    
    document.getElementById("ThanksContent").innerHTML = "name: " + name+" email: "+ email + " cat's name: "+ catsname + " cat's species: "+ petSelect + " comment: "+ comment;
    
   document.getElementById("overlay").style.display = "block";
}

function myRemoveFunction() {
    document.getElementById("overlay").style.display = "none";
}

window.onload = myFunction;
window.onload = myRemoveFunction;