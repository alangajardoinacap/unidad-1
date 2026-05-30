const form = document.getElementById("contactForm")
const campoNombre = document.getElementById("nombre")
const campoEmail = document.getElementById("email")
const campoAsunto = document.getElementById("asunto")
const campoMensaje = document.getElementById("mensaje")
const alertaExito = document.getElementById("mensajeExito")

function esEmailValido(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function marcarError(campo, mensajeId){
    campo.classList.add("error")
    document.getElementById(mensajeId).classList.add("visible")
}
function limpiarError(campo, mensajeId){
    campo.classList.remove("error")
    document.getElementById(mensajeId).classList.remove("visible")
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    let valido = true

    if(campoNombre.value.trim()===""){
        marcarError(campoNombre,'errNombre')
        valido = false
    }else{
        limpiarError(campoNombre, 'errNombre')
    }
    
    if( !esEmailValido(campoEmail.value.trim()) ){
        marcarError(campoEmail, 'errEmail')
        valido = false
    }else{
        limpiarError(campoEmail, 'errEmail')
    }

    if(campoAsunto.value===""){
        marcarError(campoAsunto,'errAsunto')
        valido = false
    }else{
        limpiarError(campoAsunto, 'errAsunto')
    }

    if(campoMensaje.value.trim()===""){
        marcarError(campoMensaje, 'errMensaje')
        valido = false
    }else{
        limpiarError(campoMensaje,'errMensaje')
    }
    
    if(valido){
        alertaExito.classList.add('visible')
        form.reset()
        setTimeout(() => {
            alertaExito.classList.remove('visible')
        }, 4000);
    }
})

[campoNombre,campoEmail,campoAsunto,campoMensaje].foreach(function(campo){
    campo.addEventListener('input',function(){
        campo.classList.remove('visible')
    })
})
