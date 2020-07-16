function iniciar(){
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
if(usuario.value=="juan" && clave.value=="123"){
    
    window.location.href="inicio.html";
   alert("iniciando");
} else{
    alert("usuario no logueado");
}
}


