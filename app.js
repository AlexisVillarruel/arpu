document.addEventListener('DOMContentLoaded', function () {
    var whatsappButton = document.querySelector('.whatsapp-button');
    var links = document.querySelector('.links'); // Selecciona el elemento que contiene los asesores

    whatsappButton.addEventListener('click', function (event) {
        event.stopPropagation();
        if (!links) return; // Verifica si el elemento existe
        if (links.style.display === "block") {
            links.style.opacity = "0";
            setTimeout(function() {
                links.style.display = "none";
            }, 300); // Duración de la transición de opacidad
        } else {
            links.style.display = "block";
            setTimeout(function() {
                links.style.opacity = "1";
            }, 10); // Ligero retraso para activar la transición
        }
    });

    document.addEventListener('click', function () {
        if (!links) return; // Verifica si el elemento existe
        if (links.style.display === "block") {
            links.style.opacity = "0";
            setTimeout(function() {
                links.style.display = "none";
            }, 300); // Duración de la transición de opacidad
        }
    });

    if (links) {
        links.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
});

function stopAnimationInHeader() {
    var scrollIcon = document.querySelector('.scroll-down-icon');
    var header = document.querySelector('header'); // Selecciona el header

    var headerRect = header.getBoundingClientRect();
    var headerBottom = headerRect.bottom;

    // Verifica si el usuario está en el header
    if (headerBottom > 0 && headerBottom <= window.innerHeight) {
        scrollIcon.classList.remove('hide-animation'); // Si está en el header, muestra la animación
    } else {
        scrollIcon.classList.add('hide-animation'); // Si no está en el header, oculta la animación
    }
}

// Detectar el evento de scroll y llamar a la función stopAnimationInHeader
window.addEventListener('scroll', stopAnimationInHeader);


function moveSlide(direction, carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    const items = carousel.querySelectorAll('.carousel-item');

    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    currentIndex = currentIndex !== -1 ? currentIndex : 0; // Si no se encuentra ningún elemento activo, establece el índice en 0

    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + items.length) % items.length;
    items[currentIndex].classList.add('active');

    const newTransform = -currentIndex * 100;
    carousel.style.transform = `translateX(${newTransform}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const carouselItems = document.querySelectorAll('.carousel-item');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remover la clase 'active' de todos los elementos del carrusel
            carouselItems.forEach(item => item.classList.remove('active'));

            // Obtener el índice del punto de navegación
            const dotIndex = parseInt(dot.getAttribute('data-index'));

            // Establecer la clase 'active' en el elemento correspondiente al punto de navegación
            if (!isNaN(dotIndex) && dotIndex >= 0 && dotIndex < carouselItems.length) {
                carouselItems[dotIndex].classList.add('active');
            }

            // Remover la clase 'active' de todos los puntos del carrusel
            dots.forEach(dot => dot.classList.remove('active'));

            // Agregar la clase 'active' solo al dot seleccionado
            dot.classList.add('active');
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_mdxmaor', 'template_hwz2sc3', this)
        .then(function() {
            alert('Mensaje enviado con éxito!');
            document.getElementById('name').value = ''; // Limpiar campo Nombre
            document.getElementById('email').value = ''; // Limpiar campo Correo
            document.getElementById('number').value = ''; // Limpiar campo Número de teléfono
            document.getElementById('message').value = ''; // Limpiar campo Mensaje
        }, function(error) {
            console.error('Error:', error);
            alert('Error al enviar el mensaje.');
        });
});

// Configuración de intervalos para carruseles automáticos
function autoAdvance(carouselId) {
    setInterval(() => {
        moveSlide(1, carouselId);
    }, 2000); // Cambia cada segundo
}

// Inicializar carruseles automáticos
document.addEventListener('DOMContentLoaded', () => {
    autoAdvance('carrusel1');
    autoAdvance('carrusel2');
});


// Función para verificar si un elemento está en la vista
document.addEventListener('DOMContentLoaded', function() {
    let carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let items = carousel.querySelectorAll('.carousel-item');
        let dots = carousel.querySelectorAll('.dot');
        let currentIndex = 0;

        function showItem(dotIndex) {
            currentIndex = dotIndex; // Actualiza el índice actual al índice del dot seleccionado
            items.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            items[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        function nextItem() {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showItem(index); // Pasa el índice del dot seleccionado a la función showItem
            });
        });

        setInterval(nextItem, 2000); // Cambia la imagen cada 3 segundos

        showItem(currentIndex);
    });
});
