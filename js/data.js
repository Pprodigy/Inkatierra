// js/data.js
const terrenosData = [
    {
        id: '1',
        nombre: 'Terreno en la Campiña',
        region: 'Junín',
        provincia: 'Satipo',
        distrito: 'Coviriali',
        direccionExacta: 'Av. Los Laureles 123, Coviriali, Satipo',
        metrosCuadrados: 500,
        tipo: 'Terreno Rústico',
        precio: 85000,
        descripcion: 'Amplio terreno rústico ideal para casa de campo o pequeña chacra. Cuenta con acceso a agua de regadío y tiene vistas panorámicas a las montañas. Zona tranquila y segura.',
        imagenPrincipal: 'img/terreno-1.jpg',
        imagenesAdicionales: [
            'img/terreno-1-a.jpg',
            'img/terreno-1-b.jpg',
            'img/terreno-1-c.jpg'
        ],
        documentos: ['Título de Propiedad Inscrito', 'Partida Registral N° XXXXXXX', 'HR/PU al día'],
        coordenadas: { latitud: -11.235, longitud: -74.83 }, // Coordenadas aproximadas de Coviriali, Satipo
        fechaPublicacion: '2025-07-20'
    },
    {
        id: '2',
        nombre: 'Lote Urbano Céntrico',
        region: 'Junín',
        provincia: 'Satipo',
        distrito: 'Satipo',
        direccionExacta: 'Jr. 2 de Mayo 456, Satipo',
        metrosCuadrados: 180,
        tipo: 'Terreno Urbano',
        precio: 120000,
        descripcion: 'Excelente lote urbano en el corazón de Satipo, ideal para construir vivienda o local comercial. Cuenta con todos los servicios básicos: agua, desagüe, luz y acceso a internet. Zona de alto crecimiento.',
        imagenPrincipal: 'img/terreno-2.jpg',
        imagenesAdicionales: [
            'img/terreno-2-a.jpg',
            'img/terreno-2-b.jpg'
        ],
        documentos: ['Título de Propiedad Saneado', 'Partida Registral N° YYYYYYY', 'Libre de cargas'],
        coordenadas: { latitud: -11.250, longitud: -74.64 }, // Coordenadas aproximadas de Satipo centro
        fechaPublicacion: '2025-07-25'
    },
    {
        id: '3',
        nombre: 'Chacra con Frutales',
        region: 'Junín',
        provincia: 'Chanchamayo',
        distrito: 'La Merced',
        direccionExacta: 'Carretera a Pichanaki Km 10, La Merced',
        metrosCuadrados: 5000,
        tipo: 'Chacra',
        precio: 250000,
        descripcion: 'Hermosa chacra productiva con variedades de frutales (cítricos, café). Cuenta con abundante agua, casa de guardián y fácil acceso a la carretera principal. Ideal para proyecto agrícola o casa de campo grande.',
        imagenPrincipal: 'img/terreno-3.jpg',
        imagenesAdicionales: [
            'img/terreno-3-a.jpg',
            'img/terreno-3-b.jpg',
            'img/terreno-3-c.jpg',
            'img/terreno-3-d.jpg'
        ],
        documentos: ['Título de Propiedad', 'Certificado de Posesión (en proceso de titulación)'],
        coordenadas: { latitud: -10.950, longitud: -75.330 }, // Coordenadas aproximadas de La Merced
        fechaPublicacion: '2025-07-18'
    },
    {
        id: '4',
        nombre: 'Lote en Condominio Playa',
        region: 'Lima',
        provincia: 'Cañete',
        distrito: 'Asia',
        direccionExacta: 'Condominio El Paraíso, Lote 5, Asia',
        metrosCuadrados: 300,
        tipo: 'Terreno Urbano',
        precio: 180000, // Precio en USD para referencia, puedes ajustarlo a soles
        descripcion: 'Exclusivo lote en condominio de playa con seguridad 24h, áreas comunes y acceso directo a la playa. Listo para construir tu casa de verano soñada.',
        imagenPrincipal: 'img/terreno-4.jpg',
        imagenesAdicionales: [
            'img/terreno-4-a.jpg',
            'img/terreno-4-b.jpg'
        ],
        documentos: ['Título de Propiedad Individualizado', 'Reglamento Interno de Condominio'],
        coordenadas: { latitud: -13.00, longitud: -76.38 }, // Coordenadas aproximadas de Asia
        fechaPublicacion: '2025-07-01'
    },
    {
        id: '5',
        nombre: 'Terreno con Ruinas Antiguas',
        region: 'Cusco',
        provincia: 'Cusco',
        distrito: 'San Jerónimo',
        direccionExacta: 'Cerca a San Jerónimo, Cusco',
        metrosCuadrados: 1200,
        tipo: 'Terreno Rústico',
        precio: 95000,
        descripcion: 'Terreno rústico con potencial turístico, cuenta con pequeñas ruinas preincas. Ideal para un proyecto de turismo vivencial o ecológica. Cerca a la ciudad del Cusco con fácil acceso.',
        imagenPrincipal: 'img/terreno-5.jpg',
        imagenesAdicionales: [],
        documentos: ['Título de Propiedad'],
        coordenadas: { latitud: -13.55, longitud: -71.90 }, // Coordenadas aproximadas San Jerónimo
        fechaPublicacion: '2025-07-10'
    },
    {
        id: '6',
        nombre: 'Lote en Zona Industrial',
        region: 'Lima',
        provincia: 'Lima',
        distrito: 'Lurín',
        direccionExacta: 'Parque Industrial Chilca, Lurin',
        metrosCuadrados: 2500,
        tipo: 'Terreno Urbano',
        precio: 350000,
        descripcion: 'Amplio lote ideal para almacén, fábrica o planta industrial. Ubicado en zona de expansión con vías de acceso amplias y servicios básicos industriales. Excelente oportunidad de inversión.',
        imagenPrincipal: 'img/terreno-6.jpg',
        imagenesAdicionales: [],
        documentos: ['Título de Propiedad', 'Licencias de Zonificación Industrial'],
        coordenadas: { latitud: -12.28, longitud: -76.85 }, // Coordenadas aproximadas Lurin
        fechaPublicacion: '2025-07-22'
    },
    {
        id: '7',
        nombre: 'Terreno con pequeña construcción',
        region: 'Junín',
        provincia: 'Satipo',
        distrito: 'Pangoa',
        direccionExacta: 'Anexo de Puerto Ocopa',
        metrosCuadrados: 750,
        tipo: 'Con Casa',
        precio: 90000,
        descripcion: 'Terreno en Pangoa con una pequeña casa rústica habitable, ideal para escapadas o uso agrícola. Cuenta con frutales y acceso a servicios básicos. Cerca al río.',
        imagenPrincipal: 'img/terreno-7.jpg',
        imagenesAdicionales: [],
        documentos: ['Minuta de Compra-Venta'],
        coordenadas: { latitud: -11.08, longitud: -74.46 },
        fechaPublicacion: '2025-07-15'
    },
    {
        id: '8',
        nombre: 'Lote para Desarrollo Comercial',
        region: 'Lima',
        provincia: 'Lima',
        distrito: 'Santiago de Surco',
        direccionExacta: 'Av. El Polo 123, Santiago de Surco',
        metrosCuadrados: 600,
        tipo: 'Terreno Urbano',
        precio: 450000,
        descripcion: 'Lote estratégicamente ubicado en una de las avenidas más transitadas de Surco. Ideal para proyectos comerciales, oficinas o departamentos. Alta demanda y plusvalía.',
        imagenPrincipal: 'img/terreno-8.jpg',
        imagenesAdicionales: [],
        documentos: ['Título de Propiedad', 'Zonificación Comercial'],
        coordenadas: { latitud: -12.11, longitud: -76.99 },
        fechaPublicacion: '2025-07-28'
    }
    // Añade más terrenos según sea necesario
];
