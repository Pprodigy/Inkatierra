document.addEventListener('DOMContentLoaded', () => {
    // ---- Navegación Responsiva (Menú Hamburguesa) ----
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                nav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

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
        showSlide(currentSlide);
        let slideInterval = setInterval(nextSlide, 5000);

        prevButton.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });

        nextButton.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });

        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
        heroSection.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
    }

    const homeSearchForm = document.getElementById('home-search-form');
    if (homeSearchForm) {
        homeSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const location = document.getElementById('search-location').value;
            const type = document.getElementById('search-type').value;
            const minSqm = document.getElementById('search-min-sqm').value;
            const maxSqm = document.getElementById('search-max-sqm').value;

            let queryParams = [];
            if (location) queryParams.push(`location=${encodeURIComponent(location)}`);
            if (type) queryParams.push(`type=${encodeURIComponent(type)}`);
            if (minSqm) queryParams.push(`minSqm=${encodeURIComponent(minSqm)}`);
            if (maxSqm) queryParams.push(`maxSqm=${encodeURIComponent(maxSqm)}`);

            const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
            window.location.href = `terrenos.html${queryString}`;
        });
    }

    const featuredTerrainsContainer = document.getElementById('featured-terrains');
    if (featuredTerrainsContainer && typeof terrenosData !== 'undefined') {
        const featuredCount = 4;
        const shuffledTerrains = terrenosData.sort(() => 0.5 - Math.random());
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