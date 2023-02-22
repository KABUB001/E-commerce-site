
const form1 = document.getElementById('form1');


form1.addEventListener('submit', function signUp(e){
    e.preventDefault();
    var username = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var mdp = document.getElementById("password").value;
    var rmdp = document.getElementById("rpassword").value;
    var result = document.getElementById("result");
    

    console.log(username);
    
        if (mdp === rmdp){
            var user = {
                email: mail,
                username: username,
                password: mdp,
                
            };
            console.log(user)
            
            let json = JSON.stringify(user);
            localStorage.setItem(username, json);

            result.style.color = "green";
            result.innerHTML = "Félicitations, nouveau inscrit ! "
            
            console.log("user added")
        }
        else {result.innerHTML = "Mot de pass non identique" } 
    
    
});










/*nm.addEventListener("input", function(e){
    localStorage.setItem('name', e.target.value)
})
mail.addEventListener("input", function(e){
    localStorage.setItem('mail', e.target.value)
})
mdp.addEventListener("input", function(e){
    localStorage.setItem('password', e.target.value)
})
rmdp.addEventListener("input", function(e){
    localStorage.setItem('rpassword', e.target.value)
})*/

