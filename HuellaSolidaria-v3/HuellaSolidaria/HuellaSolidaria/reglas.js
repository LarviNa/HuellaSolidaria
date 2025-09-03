$(document).ready(function() {
    
    // Inicializa los tooltips de Bootstrap
    $('[data-toggle="tooltip"]').tooltip();
    
    // --- LÓGICA PARA EL FORMULARIO DE REGISTRO ---

    $('#btnRegistrar').on('click', function() {
        
        // Obtener los valores de los campos del formulario
        const nombre = $('#registroNombre').val().trim();
        const apellido = $('#registroApellido').val().trim();
        const email = $('#registroEmail').val().trim();
        const telefono = $('#registroTelefono').val().trim();
        const password = $('#registroPassword').val().trim();
        const confirmarPassword = $('#confirmarPassword').val().trim();
        const mensajeErrorDiv = $('#mensajeError');

        mensajeErrorDiv.addClass('d-none');

        // Realizar las validaciones
        if (nombre === '' || apellido === '' || email === '' || telefono === '' || password === '' || confirmarPassword === '') {
            mensajeErrorDiv.text('Por favor, completa todos los campos.').removeClass('d-none');
            return;
        }

        const soloLetrasRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
        if (!soloLetrasRegex.test(nombre)) {
            mensajeErrorDiv.text('El nombre solo puede contener letras.').removeClass('d-none');
            return;
        }
        if (!soloLetrasRegex.test(apellido)) {
            mensajeErrorDiv.text('El apellido solo puede contener letras.').removeClass('d-none');
            return;
        }

        const telefonoRegex = /^9\d{8}$/;
        if (!telefonoRegex.test(telefono)) {
            mensajeErrorDiv.text('El teléfono debe comenzar con 9 y tener 9 dígitos.').removeClass('d-none');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            mensajeErrorDiv.text('Por favor, ingresa un correo válido.').removeClass('d-none');
            return;
        }
        
        // --- NUEVA VALIDACIÓN DE CONTRASEÑA ---
        if (password.length < 8) {
            mensajeErrorDiv.text('La contraseña debe tener al menos 8 caracteres.').removeClass('d-none');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            mensajeErrorDiv.text('La contraseña debe contener al menos una letra mayúscula.').removeClass('d-none');
            return;
        }
        if (!/[0-9]/.test(password)) {
            mensajeErrorDiv.text('La contraseña debe contener al menos un número.').removeClass('d-none');
            return;
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
            mensajeErrorDiv.text('La contraseña debe contener al menos un símbolo (ej: !@#$).').removeClass('d-none');
            return;
        }
        // --- FIN DE LA NUEVA VALIDACIÓN ---

        if (password !== confirmarPassword) {
            mensajeErrorDiv.text('Las contraseñas no coinciden.').removeClass('d-none');
            return;
        }


        // Si todas las validaciones pasan...
        console.log('Formulario validado correctamente.');
        alert('¡Registro exitoso! Gracias por unirte a Huella Solidaria.');
        
        $('#registroModal').modal('hide');
        
        // Limpia los campos del formulario
        $('#registroNombre, #registroApellido, #registroEmail, #registroTelefono, #registroPassword, #confirmarPassword').val('');
    });

    // Limpiar el div de error cuando el modal se cierra
    $('#registroModal').on('hidden.bs.modal', function () {
        $('#mensajeError').addClass('d-none');
    });

});