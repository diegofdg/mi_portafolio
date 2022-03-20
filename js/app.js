const formularioNombre = document.getElementById('formulario-nombre');
const formularioEmail = document.getElementById('formulario-email');
const formularioAsunto = document.getElementById('formulario-asunto');
const formularioMensaje = document.getElementById('formulario-mensaje');
const contenedorCampos = document.getElementById('contenedor-campos');
const btnEnviar = document.getElementById('boton-enviar');

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
};

function agregarEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        btnEnviar.addEventListener('click', enviarFormulario);        
    });
}

function enviarFormulario(e) {
    e.preventDefault();
    console.log("Enviando formulario");  
    validarCampos();  
}

function validarCampos(){
    const nombre = formularioNombre.value;
    
    if(nombre == ''){
        mensajeError('El nombre no puede ir vacío');
        return;
    }

    if(nombre.length > 50){
        mensajeError('El nombre no puede contener más de 50 caracteres');        
        return;
    }    
}

function mensajeError(mensaje) {
    const mensajeError = document.querySelector('.mensaje-error');
    
    if(!mensajeError) {            
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('mensaje-error');    
        divMensaje.textContent = mensaje;            
        contenedorCampos.appendChild(divMensaje);        
        
        setTimeout(()=> {
            divMensaje.remove();            
        }, 3000);
    }
}