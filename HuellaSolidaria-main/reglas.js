document.addEventListener('DOMContentLoaded', function () {


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    const btnRegistrar = document.getElementById('btnRegistrarForm2');
    const btnLogin = document.getElementById('btnIniciarLogin');

    const registroModalEl = document.getElementById('registroModal');
    const loginModalEl = document.getElementById('loginModal');
    
    const registroModal = new bootstrap.Modal(registroModalEl);
    const loginModal = new bootstrap.Modal(loginModalEl);

    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', function (e) {
            e.preventDefault(); 
            const nombre = document.getElementById('registroNombre').value.trim();
            const apellido = document.getElementById('registroApellidos').value.trim();
            const rut = document.getElementById('registroRUT').value.trim();
            const username = document.getElementById('registroUsername').value.trim();
            const region = document.getElementById('registroRegion').value;
            const ciudad = document.getElementById('registroCiudad').value.trim();
            const telefono = document.getElementById('registroTelefono').value.trim();
            const password = document.getElementById('registroPassword').value.trim();
            const mensajeErrorDiv = document.getElementById('mensajeErrorForm2');
            const form = document.getElementById('form2');

            mensajeErrorDiv.classList.add('d-none');

            if (nombre === '' || apellido === '' || rut === '' || username === '' || region === '' || ciudad === '' || telefono === '' || password === '') {
                mensajeErrorDiv.textContent = 'Por favor, completa todos los campos.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            const soloLetrasRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
            if (!soloLetrasRegex.test(nombre)) {
                mensajeErrorDiv.textContent = 'El nombre solo puede contener letras.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }
            if (!soloLetrasRegex.test(apellido)) {
                mensajeErrorDiv.textContent = 'El apellido solo puede contener letras.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            const rutRegex = /^\d{7,8}-[0-9Kk]$/;
            if (!rutRegex.test(rut)) {
                mensajeErrorDiv.textContent = 'El RUT debe tener un formato válido (ej: 12345678-9).';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            if (username.length < 4) {
                mensajeErrorDiv.textContent = 'El nombre de usuario debe tener al menos 4 caracteres.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            const telefonoRegex = /^9\d{8}$/;
            if (!telefonoRegex.test(telefono)) {
                mensajeErrorDiv.textContent = 'El teléfono debe comenzar con 9 y tener 9 dígitos.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            if (password.length < 8) {
                mensajeErrorDiv.textContent = 'La contraseña debe tener al menos 8 caracteres.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

        
            alert('¡Registro exitoso!');
            registroModal.hide(); 
            form.reset(); 
        });
    }

    if (btnLogin) {
        btnLogin.addEventListener('click', function (e) {
            e.preventDefault();

            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            const mensajeErrorDiv = document.getElementById('mensajeErrorLogin');
            const form = document.getElementById('loginForm');

            mensajeErrorDiv.classList.add('d-none');

            if (username === '' || password === '') {
                mensajeErrorDiv.textContent = 'Por favor, completa todos los campos.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            if (username.length < 4) {
                mensajeErrorDiv.textContent = 'El nombre de usuario debe tener al menos 4 caracteres.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            if (password.length < 8) {
                mensajeErrorDiv.textContent = 'La contraseña debe tener al menos 8 caracteres.';
                mensajeErrorDiv.classList.remove('d-none');
                return;
            }

            alert('¡Inicio de sesión exitoso!');
            loginModal.hide(); 
            form.reset(); 
        });
    }

    [registroModalEl, loginModalEl].forEach(modalEl => {
        if (modalEl) {
            modalEl.addEventListener('hidden.bs.modal', function () {
                const errorDiv = modalEl.querySelector('.alert');
                const form = modalEl.querySelector('form');
                
                if (errorDiv) {
                    errorDiv.classList.add('d-none');
                }
                if (form) {
                    form.reset();
                }
            });
        }
    });
});