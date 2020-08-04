var firebaseConfig = {
    apiKey: "AIzaSyAyH00Ja7cWwDTQwj_2r9Dll7zSijofitg",
    authDomain: "turismo-a5d09.firebaseapp.com",
    databaseURL: "https://turismo-a5d09.firebaseio.com",
    projectId: "turismo-a5d09",
    storageBucket: "turismo-a5d09.appspot.com",
    messagingSenderId: "29199489846",
    appId: "1:29199489846:web:573f01cb17928c7686b197",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function ObtenerId(id) {
    return document.getElementById(id).value;
}
function Registrar() {
    var Nombre_uno = ObtenerId("nombre_uno");
    var Nombre_dos = ObtenerId("nombre_dos");
    var Apellido_uno = ObtenerId("apellido_uno");
    var Apellido_dos = ObtenerId("apellido_dos");
    var Telefono = ObtenerId("telefono");
    var Correo = ObtenerId("correo");
    var Clave = ObtenerId("clave");
    var CalveConfirmada = ObtenerId("clave_confirmada");
    if (ValidarCamposVacios(Nombre_uno,Apellido_uno,Apellido_dos,Telefono,Correo,Clave,CalveConfirmada )) {
        ColeccionPersona(Nombre_uno ,Nombre_dos,Apellido_uno,Apellido_dos,Telefono,Correo, Clave);
       alert('Registro Exitoso');
        window.location.href="login.html";
    }
}



function ColeccionPersona(Nombre_uno, Nombre_dos,Apellido_uno,Apellido_dos, Telefono, Correo, Clave) {
    db.collection("persona").add({
            PrimerNombre: Nombre_uno,
            SegundoNombre: Nombre_dos,
            PrimerApellido: Apellido_uno,
            SegundoApellido: Apellido_dos,
            Telefono: Telefono,
            Usuario: Correo,
            Clave: Clave
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

function ValidarCamposVacios(Nombre_uno,  Apellido_uno, Apellido_dos, Telefono, Correo, Clave, CalveConfirmada) {
    var Comprobar = true;
    if (Nombre_uno.length == 0) {
        alert("Debe Ingresar el Primer Nombre");
        Comprobar = false;
    } else {
        if (Apellido_uno.length == 0) {
            alert("Debe Ingresar el Primer Apellido");
            Comprobar = false;
        } else {
            if (Apellido_dos.length == 0) {
                alert("Debe Ingresar el Segundo Apellido");
                Comprobar = false;
            } else {
                if (Telefono.length == 0) {
                    alert("Debe Ingresar el Telefono");
                    Comprobar = false;
                } else {
                    if (Correo.length == 0) {
                        alert("Debe Ingresar el ");
                        Comprobar = false;
                    } else {
                        if (Clave.length == 0) {
                            alert("Debe Ingresar la contraseña");
                            Comprobar = false;
                        } else{
                            if(CalveConfirmada.length == 0){
                                alert("Debe Confirmar la contraseña");
                            }
                        }
                    }
                }
            }
        }
    }
    return Comprobar;
}



