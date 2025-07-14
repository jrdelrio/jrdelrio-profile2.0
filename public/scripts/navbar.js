document.addEventListener('DOMContentLoaded', () => { // Añadido: Ejecuta el código una vez que el DOM esté completamente cargado
    const hamburgerBtn = document.querySelector('.hamburger-menu'); // Añadido: Selecciona el botón de hamburguesa
    const navLinks = document.querySelector('.nav-links'); // Añadido: Selecciona la lista de enlaces de navegación

    if (hamburgerBtn && navLinks) { // Añadido: Comprueba que los elementos existan antes de añadir listeners
        hamburgerBtn.addEventListener('click', () => { // Añadido: Listener para el clic en el botón de hamburguesa
            navLinks.classList.toggle('open'); // Añadido: Alterna la clase 'open' en los enlaces de navegación
            hamburgerBtn.classList.toggle('open'); // Añadido: Alterna la clase 'open' en el botón de hamburguesa para la animación
        });

        // Añadido: Cerrar el menú al hacer clic en un enlace (para mejorar la UX en móviles)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('open')) { // Asegura que solo se cierre si el menú está abierto
                    navLinks.classList.remove('open');
                    hamburgerBtn.classList.remove('open');
                }
            });
        });
    }
});