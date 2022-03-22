const formulario = document.getElementById('formulario');
const formularioNombre = document.getElementById('formulario-nombre');
const formularioEmail = document.getElementById('formulario-email');
const formularioAsunto = document.getElementById('formulario-asunto');
const formularioMensaje = document.getElementById('formulario-mensaje');
const contenedorCampos = document.getElementById('contenedor-campos');
const btnEnviar = document.getElementById('boton-enviar');
const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

iniciarApp();

function iniciarApp() {
    agregarEventListeners();    
};

function agregarEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        formulario.addEventListener('submit', enviarFormulario);        
    });
}

function enviarFormulario(e) {
    e.preventDefault();
    console.log("Enviando formulario");  
    validarCampos(e);
}

function validarCampos(e){
    const nombre = formularioNombre.value;
    const email = formularioEmail.value;
    const asunto = formularioAsunto.value;
    const mensaje = formularioMensaje.value;
    
    if(nombre == ''){
        mostrarMensaje('El nombre no puede ir vacío', 'error', formularioNombre.parentElement.nextElementSibling);
        return;
    }

    if(nombre.length > 50){
        mostrarMensaje('El nombre no puede contener más de 50 caracteres', 'error', formularioNombre.parentElement.nextElementSibling);        
        return;
    }    

    if(email == ''){
        mostrarMensaje('El email no puede ir vacío', 'error', formularioEmail.parentElement.nextElementSibling);
        return;
    }

    if(!expresionRegular.test(email)) {
        mostrarMensaje('El email no es válido', 'error', formularioEmail.parentElement.nextElementSibling);
        return;
    }

    if(asunto == ''){
        mostrarMensaje('El asunto no puede ir vacío', 'error', formularioAsunto.parentElement.nextElementSibling);
        return;
    }

    if(asunto.length > 50){
        mostrarMensaje('El asunto no puede contener más de 50 caracteres', 'error', formularioAsunto.parentElement.nextElementSibling);        
        return;
    }    

    if(mensaje == ''){
        mostrarMensaje('El mensaje no puede ir vacío', 'error', formularioMensaje.parentElement.nextElementSibling);
        return;
    }

    if(mensaje.length > 300){
        mostrarMensaje('El mensaje no puede contener más de 300 caracteres', 'error', formularioMensaje.parentElement.nextElementSibling);        
        return;
    }  
    
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(()=>{
        spinner.style.display = 'none';
        mostrarMensaje('El email se ha enviado exitosamente', 'exito', btnEnviar.parentElement.nextElementSibling);
    }, 3000);
}

function mostrarMensaje(mensaje, tipo, origen) {
    let mostrarMensaje;
    if(tipo == 'error'){
        mostrarMensaje = document.querySelector('.error');
    } else if (tipo == 'exito'){
        mostrarMensaje = document.querySelector('.exito');
    }    
    
    if(!mostrarMensaje) {            
        const divMensaje = document.createElement('div');
        divMensaje.classList.add(tipo);    
        divMensaje.textContent = mensaje;   
        contenedorCampos.insertBefore(divMensaje, origen);
        
        setTimeout(()=> {
            divMensaje.remove();            
        }, 3000);
    }
}