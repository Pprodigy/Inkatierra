// js/terrenos.js

document.addEventListener('DOMContentLoaded', () => {
    // Definimos los tours/destinos de ejemplo (esto vendría de tu archivo data.js o de una API)
    // Asegúrate de que tu data.js tenga un array de tours similar a esto
    const allTours = [
        {
            id: 1,
            title: "Tour a Machu Picchu Clásico",
            image: "img/machu-picchu.jpg",
            location: "Cusco",
            region: "Cusco",
            province: "Cusco",
            district: "Machu Picchu",
            price: 350,
            days: 2,
            type: "Histórico"
        },
        {
            id: 2,
            title: "Trekking Salkantay a Machu Picchu",
            image: "img/salkantay.jpg",
            location: "Cusco",
            region: "Cusco",
            province: "Anta",
            district: "Mollepata",
            price: 600,
            days: 5,
            type: "Aventura"
        },
        {
            id: 3,
            title: "Aventura en la Selva Amazónica",
            image: "img/amazonia.jpg",
            location: "Puerto Maldonado",
            region: "Madre de Dios",
            province: "Tambopata",
            district: "Tambopata",
            price: 480,
            days: 4,
            type: "Aventura"
        },
        {
            id: 4,
            title: "Lago Titicaca y sus Islas",
            image: "img/titicaca.jpg",
            location: "Puno",
            region: "Puno",
            province: "Puno",
            district: "Puno",
            price: 280,
            days: 3,
            type: "Cultural"
        },
        {
            id: 5,
            title: "Líneas de Nazca y Oasis de Huacachina",
            image: "img/nazca-huacachina.jpg",
            location: "Ica",
            region: "Ica",
            province: "Ica",
            district: "Ica",
            price: 220,
            days: 2,
            type: "Cultural"
        },
        {
            id: 6,
            title: "Cañón del Colca y Vuelo del Cóndor",
            image: "img/colca.jpg",
            location: "Arequipa",
            region: "Arequipa",
            province: "Caylloma",
            district: "Chivay",
            price: 300,
            days: 2,
            type: "Naturaleza"
        },
        {
            id: 7,
            title: "Caminata por la Montaña de 7 Colores (Vinicunca)",
            image: "img/vinicunca.jpg",
            location: "Cusco",
            region: "Cusco",
            province: "Quispicanchi",
            district: "Pitumarca",
            price: 120,
            days: 1,
            type: "Trekking"
        },
        {
            id: 8,
            title: "Ruta del Sol: Cusco a Puno",
            image: "img/ruta-del-sol.jpg",
            location: "Cusco a Puno",
            region: "Cusco", // Se puede adaptar para rutas interregionales
            province: "Cusco",
            district: "Cusco",
            price: 150,
            days: 1,
            type: "Cultural"
        }
        // Agrega más tours aquí...
    ];


    const terrainsContainer = document.getElementById('terrains-container');
    const numResultsSpan = document.getElementById('num-results');
    const filterForm = document.getElementById('filter-form');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const sortBySelect = document.getElementById('sort-by');
    const paginationControls = document.getElementById('pagination-controls');
    const noResultsMessage = terrainsContainer.querySelector('.no-results-message');

    const toursPerPage = 6; // Número de tours por página
    let currentPage = 1;
    let filteredAndSortedTours = [];

    // Cargar opciones para Región, Provincia, Distrito
    function loadFilterOptions() {
        const regions = [...new Set(allTours.map(tour => tour.region))];
        const regionSelect = document.getElementById('region');
        regions.forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            regionSelect.appendChild(option);
        });

        // Event listener para actualizar Provincias y Distritos cuando cambia la Región
        regionSelect.addEventListener('change', () => {
            const selectedRegion = regionSelect.value;
            const provincesSelect = document.getElementById('province');
            const districtSelect = document.getElementById('district');

            provincesSelect.innerHTML = '<option value="">Todas</option>';
            districtSelect.innerHTML = '<option value="">Todos</option>';

            if (selectedRegion) {
                const provinces = [...new Set(allTours
                    .filter(tour => tour.region === selectedRegion)
                    .map(tour => tour.province)
                )];
                provinces.forEach(province => {
                    const option = document.createElement('option');
                    option.value = province;
                    option.textContent = province;
                    provincesSelect.appendChild(option);
                });
            }
        });

        // Event listener para actualizar Distritos cuando cambia la Provincia
        document.getElementById('province').addEventListener('change', () => {
            const selectedRegion = regionSelect.value;
            const selectedProvince = document.getElementById('province').value;
            const districtSelect = document.getElementById('district');

            districtSelect.innerHTML = '<option value="">Todos</option>';

            if (selectedRegion && selectedProvince) {
                const districts = [...new Set(allTours
                    .filter(tour => tour.region === selectedRegion && tour.province === selectedProvince)
                    .map(tour => tour.district)
                )];
                districts.forEach(district => {
                    const option = document.createElement('option');
                    option.value = district;
                    option.textContent = district;
                    districtSelect.appendChild(option);
                });
            }
        });
    }

    function renderTours(toursToRender) {
        terrainsContainer.innerHTML = ''; // Limpiar contenedores existentes
        noResultsMessage.style.display = 'none';

        if (toursToRender.length === 0) {
            noResultsMessage.style.display = 'block';
            numResultsSpan.textContent = 0;
            paginationControls.innerHTML = '';
            return;
        }

        numResultsSpan.textContent = toursToRender.length;

        const start = (currentPage - 1) * toursPerPage;
        const end = start + toursPerPage;
        const paginatedTours = toursToRender.slice(start, end);

        paginatedTours.forEach(tour => {
            const tourCard = document.createElement('a');
            tourCard.href = `tour-detail.html?id=${tour.id}`; // Enlace a página de detalle
            tourCard.classList.add('property-card'); // Reutilizando la clase para card de item
            tourCard.innerHTML = `
                <img src="${tour.image}" alt="${tour.title}">
                <div class="property-info">
                    <h3>${tour.title}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${tour.location}</p>
                    <p><i class="fas fa-route"></i> Tipo: ${tour.type}</p>
                    <p><i class="fas fa-calendar-alt"></i> Duración: ${tour.days} días</p>
                    <span class="price">S/ ${tour.price}</span>
                </div>
                <div class="property-features">
                    <div><i class="fas fa-tags"></i> ${tour.type}</div>
                    <div><i class="fas fa-clock"></i> ${tour.days} días</div>
                </div>
            `;
            terrainsContainer.appendChild(tourCard);
        });

        renderPagination(toursToRender.length);
    }

    function renderPagination(totalTours) {
        paginationControls.innerHTML = '';
        const totalPages = Math.ceil(totalTours / toursPerPage);

        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement('button');
                button.textContent = i;
                if (i === currentPage) {
                    button.classList.add('active');
                }
                button.addEventListener('click', () => {
                    currentPage = i;
                    applyFiltersAndSort();
                });
                paginationControls.appendChild(button);
            }
        }
    }

    function applyFiltersAndSort() {
        currentPage = 1; // Siempre vuelve a la primera página al aplicar filtros/orden
        let currentTours = [...allTours]; // Copia de los tours originales

        // 1. Aplicar filtros
        const minPrice = parseFloat(document.getElementById('price-min').value);
        const maxPrice = parseFloat(document.getElementById('price-max').value);
        const selectedRegion = document.getElementById('region').value;
        const selectedProvince = document.getElementById('province').value;
        const selectedDistrict = document.getElementById('district').value;
        const selectedTourType = document.getElementById('tour-type').value;
        const minDays = parseFloat(document.getElementById('min-days').value);
        const maxDays = parseFloat(document.getElementById('max-days').value);


        currentTours = currentTours.filter(tour => {
            const matchesPrice = (!minPrice || tour.price >= minPrice) && (!maxPrice || tour.price <= maxPrice);
            const matchesRegion = !selectedRegion || tour.region === selectedRegion;
            const matchesProvince = !selectedProvince || tour.province === selectedProvince;
            const matchesDistrict = !selectedDistrict || tour.district === selectedDistrict;
            const matchesType = !selectedTourType || tour.type === selectedTourType;
            const matchesDays = (!minDays || tour.days >= minDays) && (!maxDays || tour.days <= maxDays);
            
            return matchesPrice && matchesRegion && matchesProvince && matchesDistrict && matchesType && matchesDays;
        });

        // 2. Aplicar ordenamiento
        const sortBy = sortBySelect.value;
        if (sortBy === 'price-asc') {
            currentTours.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            currentTours.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'days-asc') {
            currentTours.sort((a, b) => a.days - b.days);
        } else if (sortBy === 'days-desc') {
            currentTours.sort((a, b) => b.days - a.days);
        } else { // 'recent' o cualquier otro, asume orden original o por ID
            currentTours.sort((a, b) => a.id - b.id);
        }

        filteredAndSortedTours = currentTours; // Guarda el resultado para paginación
        renderTours(filteredAndSortedTours);
    }

    // Event Listeners
    filterForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío del formulario
        applyFiltersAndSort();
    });

    clearFiltersBtn.addEventListener('click', () => {
        filterForm.reset(); // Restablecer todos los campos del formulario
        applyFiltersAndSort(); // Volver a aplicar filtros (ahora vacíos)
    });

    sortBySelect.addEventListener('change', applyFiltersAndSort);

    // Inicializar
    loadFilterOptions();
    applyFiltersAndSort(); // Cargar todos los tours al inicio
});