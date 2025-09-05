$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();

    $('#btnRegistrarForm2').on('click', function (e) {
        e.preventDefault();

        const nombre = $('#validationServer01').val().trim();
        const apellido = $('#validationServer02').val().trim();
        const rut = $('#validationServer05').val().trim();
        const username = $('#validationServerUsername').val().trim();
        const region = $('#validationServer04').val();
        const ciudad = $('#validationServer03').val().trim();
        const telefono = $('#telefonoForm2').val().trim();
        const password = $('#validationServer06').val().trim();
        const mensajeErrorDiv = $('#mensajeErrorForm2');

        mensajeErrorDiv.addClass('d-none');

        if (nombre === '' || apellido === '' || rut === '' || username === '' || region === '' || ciudad === '' || telefono === '' || password === '') {
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

        const rutRegex = /^\d{7,8}[0-9Kk]$/;
        if (!rutRegex.test(rut)) {
            mensajeErrorDiv.text('El RUT debe tener 7 u 8 dígitos seguidos de un dígito o K.').removeClass('d-none');
            return;
        }

        if (username.length < 4) {
            mensajeErrorDiv.text('El nombre de usuario debe tener al menos 4 caracteres.').removeClass('d-none');
            return;
        }

        if (region === '' || region === null) {
            mensajeErrorDiv.text('Selecciona una región.').removeClass('d-none');
            return;
        }

        if (ciudad.length < 2) {
            mensajeErrorDiv.text('La ciudad debe tener al menos 2 caracteres.').removeClass('d-none');
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
        
        window.location.href = 'login.html';

        $('#validationServer01, #validationServer02, #validationServer05, #validationServerUsername, #validationServer04, #validationServer03, #telefonoForm2, #validationServer06').val('');
    });

    $('#form2').on('reset', function () {
        $('#mensajeErrorForm2').addClass('d-none');
    });

});

$(document).ready(function (){
    $('#btnIniciarLogin').on('click', function (e) {
        e.preventDefault();
        const username = $('#validationServer01').val().trim();
        const password = $('#validationServer02').val().trim();
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

        window.location.href = 'index.html';
        $('#validationServer01, #validationServer02').val('');
    });

    $('#loginForm').on('reset', function () {
        $('#mensajeErrorLogin').addClass('d-none');
    });
});