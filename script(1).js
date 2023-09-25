/*var email = document.getElementById("email").value;
function login(){
        if(document.getElementById("email").value=='fazelcm2000@gmail.com'&& document.getElementById("pass").value=='1234567'){
            window.location.href="http://127.0.0.1:5500/8.5%20note%20pad/index.html";
            alert(email+'welcome');
        }
        else{
            alert("Mail ID is not verified");
        }
}*/

function login(){
    var email = document.getElementById("email").value;
    if(document.getElementById("email").value == 'fazelcm2000@gmail.com' && document.getElementById("pass").value == '123' )
    {
        alert("Hello"+email);
        window.location.href="http://127.0.0.1:5500/8.5%20note%20pad/index.html";  
        
    }
    else{
        
        alert("Mail ID is not verified");
    }}

 