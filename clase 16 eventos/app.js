/*
EVENTOS: genra un resulado segun cosas que haga el usuario
*/

function cambiartitulo(){
    document.title = "Comision 30I"
};

const getEmail=(email)=>{
    if(email.value == "maxialz@hotmail.com"){
        window.location.pathname = "home.html"
    }else{
        alert("No existe el usuario")
    }
};
