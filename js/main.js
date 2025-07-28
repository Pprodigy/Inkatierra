document.addEventListener('DOMContentLoaded', () => {
    // ---- Navegación Responsiva (Menú Hamburguesa) ----
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Ocultar menú cuando se hace clic en un enlace (para móviles)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) { // Asumiendo 992px como breakpoint para móvil
                nav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // ---- Carrusel de la Página de Inicio ----
    const carouselItems = document.querySelectorAll('.hero-carousel .carousel-item');
    const prevButton = document.querySelector('.hero-carousel + .carousel-nav .prev');
    const nextButton = document.querySelector('.hero-carousel + .carousel-nav .next');
    let currentSlide = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentSlide);
    }

    if (carouselItems.length > 0) {
        showSlide(currentSlide); // Mostrar el primer slide al cargar

        // Autoplay del carrusel
        let slideInterval = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos

        // Pausar autoplay al interactuar con el carrusel
        prevButton.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000); // Reiniciar autoplay
        });

        nextButton.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000); // Reiniciar autoplay
        });

        // Pausar autoplay al pasar el mouse por el hero
        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
        heroSection.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
    }


    // ---- Lógica de la barra de búsqueda en el Home (simulada) ----
    const homeSearchForm = document.getElementById('home-search-form');
    if (homeSearchForm) {
        homeSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const location = document.getElementById('search-location').value;
            const type = document.getElementById('search-type').value;
            const minSqm = document.getElementById('search-min-sqm').value;
            const maxSqm = document.getElementById('search-max-sqm').value;

            // Construir la URL para terrenos.html con los parámetros de búsqueda
            let queryParams = [];
            if (location) queryParams.push(`location=${encodeURIComponent(location)}`);
            if (type) queryParams.push(`type=${encodeURIComponent(type)}`);
            if (minSqm) queryParams.push(`minSqm=${encodeURIComponent(minSqm)}`);
            if (maxSqm) queryParams.push(`maxSqm=${encodeURIComponent(maxSqm)}`);

            const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
            window.location.href = `terrenos.html${queryString}`;
        });
    }


    // ---- Carga de Terrenos Destacados en el Home ----
    const featuredTerrainsContainer = document.getElementById('featured-terrains');
    if (featuredTerrainsContainer && typeof terrenosData !== 'undefined') {
        const featuredCount = 4; // Mostrar 4 terrenos destacados
        const shuffledTerrains = terrenosData.sort(() => 0.5 - Math.random()); // Mezclar para variar
        const selectedFeatured = shuffledTerrains.slice(0, featuredCount);

        selectedFeatured.forEach(terrain => {
            const terrainCard = `
                <div class="property-card">
                    <img src="${terrain.imagenPrincipal}" alt="Terreno en ${terrain.distrito}">
                    <div class="property-info">
                        <h3>${terrain.distrito}, ${terrain.provincia}</h3>
                        <p class="location">${terrain.region}</p>
                        <p class="details">${terrain.metrosCuadrados} m² - ${terrain.tipo}</p>
                        <p class="price">S/ ${terrain.precio.toLocaleString('es-PE')}</p>
                        <a href="detalle-terreno.html?id=${terrain.id}" class="btn-card-detail">Ver Detalles</a>
                    </div>
                </div>
            `;
            featuredTerrainsContainer.innerHTML += terrainCard;
        });
    }

});
