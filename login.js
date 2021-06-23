  function Login (){
    /*  console.log("log") */
   var button = document.querySelector('#login');
   var password = document.querySelector('#password').value;
   var email = document.querySelector('#username').value;
   
   if ( email == "berna@gmail.com" && password == "berna123"){
    /* alert ("Login successfully"); */
   window.location = "Bienvenido.html"; // redirigir a otra pagina segun yo.
    // return true; 
    }
}