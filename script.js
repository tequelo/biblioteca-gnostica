document.addEventListener('DOMContentLoaded', () => {

    // --- Datos de los Libros (Placeholder) ---
    const books = [
        {
            title: '1955 Significado Oculto De Los Sueños',
            category: 'psicologia',
            cover: 'assets/images/1955-significado-oculto-de-los-sueños.png',
            pdf: 'assets/pdf/1955-significado-oculto-de-los-sueños.pdf'
        },
        {
            title: '1961 El Matrimonio Perfecto Samael Aun Weor',
            category: 'alquimia',
            cover: 'assets/images/1961_EL-MATRIMONIO-PERFECTO_Samael-Aun-Weor.png',
            pdf: 'assets/pdf/1961_EL-MATRIMONIO-PERFECTO_Samael-Aun-Weor.pdf'
        },
        {
            title: '1970 Mas Alla De La Muerte Samael Aun Weor',
            category: 'esoterismo',
            cover: 'assets/images/1970_MAS-ALLA-DE-LA-MUERTE_Samael-Aun-Weor.png',
            pdf: 'assets/pdf/1970_MAS-ALLA-DE-LA-MUERTE_Samael-Aun-Weor.pdf'
        },
        {
            title: '1972 Samael Aun Weor Las Tres Montanas',
            category: 'esoterismo',
            cover: 'assets/images/1972-Samael-Aun-Weor-Las-Tres-Montanas.png',
            pdf: 'assets/pdf/1972-Samael-Aun-Weor-Las-Tres-Montanas.pdf'
        },
        {
            title: '3° 5.La Ciencia Del Ayuno',
            category: 'meditacion',
            cover: 'assets/images/3° 5.La Ciencia Del Ayuno.png',
            pdf: 'assets/pdf/3° 5.La Ciencia Del Ayuno.pdf'
        },
        {
            title: 'Adoum Jorge Las Llaves Del Reino Interno',
            category: 'esoterismo',
            cover: 'assets/images/adoum-jorge-las-llaves-del-reino-interno.png',
            pdf: 'assets/pdf/adoum-jorge-las-llaves-del-reino-interno.pdf'
        },
        {
            title: 'Ciencia Gnostica',
            category: 'esoterismo',
            cover: 'assets/images/Ciencia Gnostica.png',
            pdf: 'assets/pdf/Ciencia Gnostica.pdf'
        },
        {
            title: 'Conjuracion De Los 4',
            category: 'esoterismo',
            cover: 'assets/images/conjuracion de los 4.png',
            pdf: 'assets/pdf/conjuracion de los 4.pdf'
        },
        {
            title: 'Curso Zodiacal',
            category: 'esoterismo',
            cover: 'assets/images/curso zodiacal.png',
            pdf: 'assets/pdf/curso zodiacal.pdf'
        },
        {
            title: 'Ejercicios Lamaseria',
            category: 'meditacion',
            cover: 'assets/images/ejercicios_lamaseria.png',
            pdf: 'assets/pdf/ejercicios_lamaseria.pdf'
        },
        {
            title: 'El Aguila Revelde',
            category: 'esoterismo',
            cover: 'assets/images/El aguila Revelde.png',
            pdf: 'assets/pdf/El aguila Revelde.pdf'
        },
        {
            title: 'El Bhagavad Gita Tal Como Es',
            category: 'esoterismo',
            cover: 'assets/images/El Bhagavad-gita Tal Como Es.png',
            pdf: 'assets/pdf/El Bhagavad-gita Tal Como Es.pdf'
        },
        {
            title: 'El Matrimonio Perfecto O Puerta De Entrada A La Iniciación',
            category: 'alquimia',
            cover: 'assets/images/El_Matrimonio_Perfecto_o_Puerta_de_Entrada_a_la_Iniciación.png',
            pdf: 'assets/pdf/El_Matrimonio_Perfecto_o_Puerta_de_Entrada_a_la_Iniciación.pdf'
        },
        {
            title: 'Endocrinologia Y Criminologia',
            category: 'esoterismo',
            cover: 'assets/images/Endocrinologia-y-criminologia.png',
            pdf: 'assets/pdf/Endocrinologia-y-criminologia.pdf'
        },
        {
            title: 'Kybalion Tres Iniciados',
            category: 'alquimia',
            cover: 'assets/images/Kybalion+-+Tres+Iniciados.png',
            pdf: 'assets/pdf/Kybalion+-+Tres+Iniciados.pdf'
        },
        {
            title: 'La Disolución Del Yo - Samael Aun Weor',
            category: 'psicologia',
            cover: 'assets/images/La Disolución del Yo - Samael Aun Weor.png',
            pdf: 'assets/pdf/La Disolución del Yo - Samael Aun Weor.pdf'
        },
        {
            title: 'La Divina Comedia',
            category: 'esoterismo',
            cover: 'assets/images/La divina comedia.png',
            pdf: 'assets/pdf/La divina comedia.pdf'
        },
        {
            title: 'La Doctrina Secreta De Anahuak',
            category: 'esoterismo',
            cover: 'assets/images/la doctrina secreta de anahuak.png',
            pdf: 'assets/pdf/la doctrina secreta de anahuak.pdf'
        },
        {
            title: 'Las 3 Montañas',
            category: 'esoterismo',
            cover: 'assets/images/Las 3 montañas.png',
            pdf: 'assets/pdf/Las 3 montañas.pdf'
        },
        {
            title: 'Las Naves Cósmicas - Samael Aun Weor',
            category: 'esoterismo',
            cover: 'assets/images/Las Naves Cósmicas - Samael Aun Weor.png',
            pdf: 'assets/pdf/Las Naves Cósmicas - Samael Aun Weor.pdf'
        },
        {
            title: 'Libro De Los Jinas',
            category: 'esoterismo',
            cover: 'assets/images/Libro de los Jinas.png',
            pdf: 'assets/pdf/Libro de los Jinas.pdf'
        },
        {
            title: 'Libro Hercólubus O Planeta Rojo - Pdf',
            category: 'esoterismo',
            cover: 'assets/images/Libro Hercólubus o Planeta Rojo - pdf.png',
            pdf: 'assets/pdf/Libro Hercólubus o Planeta Rojo - pdf.pdf'
        },
        {
            title: 'Los Cuerpos Solares',
            category: 'alquimia',
            cover: 'assets/images/Los Cuerpos Solares.png',
            pdf: 'assets/pdf/Los Cuerpos Solares.pdf'
        },
        {
            title: 'Los Planetas Metafisicos De La Alquimia',
            category: 'alquimia',
            cover: 'assets/images/Los planetas Metafisicos de la Alquimia.png',
            pdf: 'assets/pdf/Los planetas Metafisicos de la Alquimia.pdf'
        },
        {
            title: 'Manly Palmer Hall Anatomia Oculta Del Hombre',
            category: 'esoterismo',
            cover: 'assets/images/MANLY_PALMER_HALL_ANATOMIA_OCULTA_DEL_HOMBRE.png',
            pdf: 'assets/pdf/MANLY_PALMER_HALL_ANATOMIA_OCULTA_DEL_HOMBRE.pdf'
        },
        {
            title: 'Orientando Al Disipulo',
            category: 'meditacion',
            cover: 'assets/images/Orientando al Disipulo.png',
            pdf: 'assets/pdf/Orientando al Disipulo.pdf'
        },
        {
            title: 'Pistis Sophia',
            category: 'esoterismo',
            cover: 'assets/images/Pistis Sophia.png',
            pdf: 'assets/pdf/Pistis Sophia.pdf'
        },
        {
            title: 'Si Hay Infierno, Diablo Y Karma',
            category: 'esoterismo',
            cover: 'assets/images/Si hay infierno, diablo y karma.png',
            pdf: 'assets/pdf/Si hay infierno, diablo y karma.pdf'
        },
        {
            title: 'Sivananda Swami La Filosofia De Los Sueños',
            category: 'psicologia',
            cover: 'assets/images/Sivananda-Swami-La-Filosofia-De-Los-Sueños.png',
            pdf: 'assets/pdf/Sivananda-Swami-La-Filosofia-De-Los-Sueños.pdf'
        },
        {
            title: 'Swami Sivananda El Pensamiento Y Su Poder',
            category: 'psicologia',
            cover: 'assets/images/Swami Sivananda El pensamiento y su Poder.png',
            pdf: 'assets/pdf/Swami Sivananda El pensamiento y su Poder.pdf'
        },
        {
            title: 'Tarot Y Kabala Vm Samael',
            category: 'esoterismo',
            cover: 'assets/images/Tarot Y Kabala Vm Samael.png',
            pdf: 'assets/pdf/Tarot Y Kabala Vm Samael.pdf'
        },
        {
            title: 'Tercer Estado De Conciencia',
            category: 'meditacion',
            cover: 'assets/images/Tercer estado de conciencia.png',
            pdf: 'assets/pdf/Tercer estado de conciencia.pdf'
        },
        {
            title: 'Transmutacion Sex, Manual Vmromolu',
            category: 'alquimia',
            cover: 'assets/images/Transmutacion Sex, manual VMRomolu.png',
            pdf: 'assets/pdf/Transmutacion Sex, manual VMRomolu.pdf'
        },
        {
            title: 'Tratado De Medicina Oculta',
            category: 'esoterismo',
            cover: 'assets/images/TRATADO DE MEDICINA OCULTA.png',
            pdf: 'assets/pdf/TRATADO DE MEDICINA OCULTA.pdf'
        }
    ];

    const booksGallery = document.getElementById('books-gallery');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // --- Función para renderizar los libros en la galería ---
    const displayBooks = (bookList) => {
        if (!booksGallery) return;
        booksGallery.innerHTML = '';
        if (bookList.length === 0) {
            booksGallery.innerHTML = `<p style="text-align: center; color: var(--text-secondary); grid-column: 1 / -1;">No se encontraron libros que coincidan con su búsqueda.</p>`;
            return;
        }

        bookList.forEach(book => {
            const bookCard = `
                <div class="book-card">
                    <img src="${book.cover}" alt="Portada de ${book.title}">
                    <h3>${book.title}</h3>
                    <div class="button-group">
                        <a href="${book.pdf}" class="button" target="_blank">Leer</a>
                        <a href="${book.pdf}" class="button download" download>PDF</a>
                    </div>
                </div>
            `;
            booksGallery.innerHTML += bookCard;
        });
    };

    // --- Lógica de Búsqueda y Filtro ---
    if (booksGallery) {
        // Carga inicial de todos los libros
        displayBooks(books);

        // Event listener para la barra de búsqueda
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
            
            let filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));

            if (activeCategory !== 'all') {
                filteredBooks = filteredBooks.filter(book => book.category === activeCategory);
            }

            displayBooks(filteredBooks);
        });

        // Event listeners para los botones de filtro
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Manejar clase activa
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const category = button.dataset.category;
                const searchTerm = searchInput.value.toLowerCase();

                let filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));

                if (category !== 'all') {
                    filteredBooks = filteredBooks.filter(book => book.category === category);
                }

                displayBooks(filteredBooks);
            });
        });
    }

    // --- Lógica para Navegación Móvil ---
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});