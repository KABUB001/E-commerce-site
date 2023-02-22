const form2 = document.getElementById('form2');

form2.addEventListener("submit", function loginFunc(e){
    e.preventDefault();
var username = document.getElementById("name").value;
var mdp = document.getElementById("password").value
var result = document.getElementById("result");
var user = localStorage.getItem(username);
var data = JSON.parse(user);

    
if(user == null){
    result.innerHTML = "Mauvais nom d'utilisateur"
}else if((username == data.username) && mdp == data.password){
    result.style.color = "green";
    result.innerHTML = "Connexion réussie"
    alert("Bienvenue " + username +  " Veuillez patienter 3secondes pour la redirection")
    setInterval(function(){
        window.location.href = "../index.html" 
    }, 3000);
}else {
    result.style.color = "red";
    result.innerHTML = "Mauvais mot de passe !"
}
}
)