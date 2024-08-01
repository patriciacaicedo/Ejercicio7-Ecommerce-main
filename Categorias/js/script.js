document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente cargado y analizado");

    // Manejo de modo oscuro
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById("darkModeSwitch");
    const bodyElement = document.body

    if (switchElement) {
        console.log("Switch de modo oscuro encontrado");
        const currentTheme = localStorage.getItem("bsTheme") || "dark";
        htmlElement.setAttribute("data-bs-theme", currentTheme);
        bodyElement.classList.toggle("dark-mode", currentTheme === "dark");
        switchElement.checked = currentTheme === "dark";
    
        switchElement.addEventListener("change", function () {
          if (this.checked) {
            htmlElement.setAttribute("data-bs-theme", "dark");
            bodyElement.classList.add("dark-mode");
            localStorage.setItem("bsTheme", "dark");
          } else {
            htmlElement.setAttribute("data-bs-theme", "light");
            bodyElement.classList.remove("dark-mode")
            localStorage.setItem("bsTheme", "light");   
    
          }
        });
      } else {
        console.log("Switch de modo oscuro no encontrado");
      }

    // Búsqueda en tiempo real
    const searchInput = document.getElementById('search');

    if (searchInput) {
        console.log("Campo de búsqueda encontrado");
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            const productCards = document.querySelectorAll('.card');
            productCards.forEach(card => {
                const title = card.querySelector('.card-title').innerText.toLowerCase();
                if (title.includes(filter)) {
                    card.parentElement.style.display = '';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    } else {
        console.log("Campo de búsqueda no encontrado");
    }


    // Cambio de color del botón
    var botones = document.querySelectorAll('#miBoton');

    if (botones.length > 0) {
        console.log("Botón encontrado");
        botones.forEach(boton => {
            boton.addEventListener('click', function(event) {
                event.preventDefault(); // Previene la navegación inmediata
                this.classList.add('clicked');
                
                // Cambia el color de vuelta después de 300ms
                setTimeout(() => {
                    this.classList.remove('clicked');
                    // Navega a la URL después de mostrar el efecto
                    window.location.href = this.getAttribute('href');
                }, 300);
            });
        });
    } else {
        console.log("Botón no encontrado");
    }
});
