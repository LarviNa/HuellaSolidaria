$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();

    $('#btnRegistrarForm2').on('click', function (e) {
        e.preventDefault(); 

        const nombre = $('#registroNombre').val().trim();
        const apellido = $('#registroApellidos').val().trim();
        const rut = $('#registroRUT').val().trim();
        const username = $('#registroUsername').val().trim();
        const region = $('#registroRegion').val();
        const ciudad = $('#registroCiudad').val().trim();
        const telefono = $('#registroTelefono').val().trim();
        const password = $('#registroPassword').val().trim();
        const mensajeErrorDiv = $('#mensajeErrorForm2');

        mensajeErrorDiv.addClass('d-none'); 

        if (nombre === '' || apellido === '' || rut === '' || username === '' || region === null || ciudad === '' || telefono === '' || password === '') {
            mensajeErrorDiv.text('Por favor, completa todos los campos.').removeClass('d-none');
            return;
        }

        const soloLetrasRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
        if (!soloLetrasRegex.test(nombre)) {
            mensajeErrorDiv.text('El nombre solo puede contener letras.').removeClass('d-none');
            return;
        }
        if (!soloLetrasRegex.test(apellido)) {
            mensajeErrorDiv.text('El apellido solo puede contener letras.').removeClass('d-none');
            return;
        }

        const rutRegex = /^\d{7,8}-[0-9Kk]$/;
        if (!rutRegex.test(rut)) {
            mensajeErrorDiv.text('El RUT debe tener un formato válido (ej: 12345678-9).').removeClass('d-none');
            return;
        }

        if (username.length < 4) {
            mensajeErrorDiv.text('El nombre de usuario debe tener al menos 4 caracteres.').removeClass('d-none');
            return;
        }

        const telefonoRegex = /^9\d{8}$/;
        if (!telefonoRegex.test(telefono)) {
            mensajeErrorDiv.text('El teléfono debe comenzar con 9 y tener 9 dígitos.').removeClass('d-none');
            return;
        }

        if (password.length < 8) {
            mensajeErrorDiv.text('La contraseña debe tener al menos 8 caracteres.').removeClass('d-none');
            return;
        }
        
        alert('¡Registro exitoso!');
        $('#registroModal').modal('hide'); 
        $('#form2')[0].reset(); 
    });

    $('#btnIniciarLogin').on('click', function (e) {
        e.preventDefault(); 

        const username = $('#loginUsername').val().trim();
        const password = $('#loginPassword').val().trim();
        const mensajeErrorDiv = $('#mensajeErrorLogin');
        
        mensajeErrorDiv.addClass('d-none');

        if (username === '' || password === '') {
            mensajeErrorDiv.text('Por favor, completa todos los campos.').removeClass('d-none');
            return;
        }

        if (username.length < 4) {
            mensajeErrorDiv.text('El nombre de usuario debe tener al menos 4 caracteres.').removeClass('d-none');
            return;
        }

        if (password.length < 8) {
            mensajeErrorDiv.text('La contraseña debe tener al menos 8 caracteres.').removeClass('d-none');
            return;
        }

        alert('¡Inicio de sesión exitoso!');
        $('#loginModal').modal('hide');
        $('#loginForm')[0].reset();
    });

    $('#registroModal, #loginModal').on('hidden.bs.modal', function () {
        $(this).find('.alert').addClass('d-none');
        $(this).find('form')[0].reset();
    });
});