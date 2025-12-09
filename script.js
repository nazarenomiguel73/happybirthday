// ============================================
// DATOS DE LOS PLANETAS
// ============================================
// Aquí puedes editar los mensajes románticos y los links de las canciones

// ============================================
// CONFIGURACIÓN DE IMÁGENES
// ============================================
// Agrega aquí las rutas de tus imágenes de planetas
// Formato recomendado: 'images/sol.jpg', 'images/mercurio.jpg', etc.
// Si no tienes una imagen para un planeta, déjalo como null o '' y usará el icono CSS

const planetsData = {
    sun: {
        name: 'Sol',
        message: 'Eres mi sol, la luz que ilumina cada día de mi vida. Sin ti, todo sería oscuridad. Tu calidez me da energía y tu brillo me guía en cada paso. Eres el centro de mi universo, la estrella que hace que todo tenga sentido.',
        music: 'music/sol.mp3', // Canción del Sol configurada
        iconClass: 'sun-icon',
        image: 'images/sol.jpg' // Cambia esta ruta por la de tu imagen del Sol
    },
    mercury: {
        name: 'Mercurio',
        message: 'Mercurio es el planeta más cercano al sol, así como tú eres la persona más cercana a mi corazón. Aunque a veces parezca que todo va muy rápido, contigo el tiempo se detiene y cada momento se vuelve eterno.',
        music: 'music/mercurio.mp3', // Canción de Mercurio configurada
        iconClass: 'mercury-icon',
        image: 'images/mercurio.jpg' // Imagen de Mercurio configurada
    },
    venus: {
        name: 'Venus',
        message: 'Venus, el planeta del amor. Tú eres mi Venus, la diosa que ilumina mi vida con su belleza y su amor. Cada amanecer y cada atardecer me recuerdan que eres la estrella más brillante en mi cielo.',
        music: 'music/venus.mp3', // Canción de Venus configurada
        iconClass: 'venus-icon',
        image: 'images/venus.jpg' // Imagen de Venus configurada
    },
    earth: {
        name: 'Tierra',
        message: 'La Tierra es nuestro hogar, el lugar donde todo comenzó. Tú eres mi hogar, el lugar donde mi corazón encuentra paz. Contigo, cualquier lugar se convierte en el mejor lugar del universo.',
        music: 'music/tierra.mp3', // Canción de la Tierra configurada
        iconClass: 'earth-icon',
        image: 'images/tierra.jpeg' // Imagen de la Tierra configurada
    },
    mars: {
        name: 'Marte',
        message: 'Marte, el planeta rojo, símbolo de pasión y determinación. Tú tienes esa pasión que enciende mi alma, esa determinación que me inspira a ser mejor cada día. Juntos podemos conquistar cualquier mundo.',
        music: 'music/marte.mp3', // Canción de Marte configurada
        iconClass: 'mars-icon',
        image: 'images/marte.jpeg' // Imagen de Marte configurada
    },
    jupiter: {
        name: 'Júpiter',
        message: 'Júpiter es el gigante del sistema solar, protector de los planetas más pequeños. Tú eres mi protector, mi refugio, la persona que me hace sentir seguro y amado. Tu presencia es tan grande como este planeta, llenando mi vida de alegría.',
        music: 'music/jupiter.mp3', // Canción de Júpiter configurada
        iconClass: 'jupiter-icon',
        image: 'images/júpiter.png' // Imagen de Júpiter configurada
    },
    saturn: {
        name: 'Saturno',
        message: 'Saturno, con sus hermosos anillos, es uno de los planetas más elegantes. Tú tienes esa elegancia que me cautiva, esa belleza única que hace que no pueda dejar de mirarte. Eres tan especial como este planeta único.',
        music: 'music/saturno.mp3', // Canción de Saturno configurada
        iconClass: 'saturn-icon',
        image: 'images/saturno.jpg' // Imagen de Saturno configurada
    },
    uranus: {
        name: 'Urano',
        message: 'Urano, el planeta azul que gira de manera única. Tú eres única, especial, diferente a todo lo que he conocido. Tu forma de ser, tu manera de ver el mundo, todo en ti es extraordinario y me hace sentir afortunado.',
        music: 'music/urano.mp3', // Canción de Urano configurada
        iconClass: 'uranus-icon',
        image: 'images/urano.jpg' // Imagen de Urano configurada
    },
    neptune: {
        name: 'Neptuno',
        message: 'Neptuno, el planeta más lejano, pero no por eso menos importante. Aunque a veces la distancia nos separe, sé que nuestro amor es tan profundo como el océano que este planeta representa. Eres mi Neptuno, mi amor profundo e infinito.',
        music: 'music/neptuno.mp3', // Canción de Neptuno configurada
        iconClass: 'neptune-icon',
        image: 'images/neptuno.jpg' // Imagen de Neptuno configurada
    },
    moon: {
        name: 'Luna',
        message: 'La Luna, siempre presente, iluminando las noches más oscuras. Tú eres mi luna, la que ilumina mis noches y mis días. Tu luz suave me guía, me calma y me recuerda que siempre estarás ahí, brillando para mí.',
        music: 'music/luna.mp3', // Canción de la Luna configurada
        iconClass: 'moon-icon',
        image: 'images/luna.jpeg' // Imagen de la Luna configurada
    },
    eclipse: {
        name: 'Eclipse',
        message: 'Un eclipse es un momento mágico y único, cuando dos cuerpos celestes se alinean perfectamente. Así como el eclipse, tú y yo nos encontramos en el momento perfecto, creando algo extraordinario y hermoso. Eres mi eclipse, ese momento especial que ilumina mi vida de una manera única.',
        music: 'music/eclipse.mp3', // Canción del Eclipse configurada
        iconClass: 'eclipse-icon',
        image: 'images/eclipse.jpg' // Imagen del Eclipse configurada
    }
};

// Mensaje final personalizado
const finalMessage = `
    Este viaje por nuestro universo ha llegado a su fin, pero nuestro amor es infinito como las estrellas.
    Cada planeta que exploramos representa un momento especial, un recuerdo que guardaré por siempre.
    Gracias por ser parte de mi universo, por iluminar mi vida con tu presencia.
    Que este pequeño regalo sea un recordatorio de todo lo que significas para mí.
    Te amo más de lo que las palabras pueden expresar.
    <br><br>
    <em>Con todo mi amor, para siempre.</em>
`;

// ============================================
// VARIABLES GLOBALES
// ============================================

const welcomeScreen = document.getElementById('welcome-screen');
const solarSystemView = document.getElementById('solar-system-view');
const finalScreen = document.getElementById('final-screen');
const exploreBtn = document.getElementById('explore-btn');
const restartBtn = document.getElementById('restart-btn');
const planetItems = document.querySelectorAll('.planet-item');
const initialView = document.getElementById('initial-view');
const planetView = document.getElementById('planet-view');
const bgMusicToggle = document.getElementById('bg-music-toggle');
const backgroundMusic = document.getElementById('background-music');

// ============================================
// FUNCIONES DE NAVEGACIÓN
// ============================================

function showSolarSystem() {
    welcomeScreen.classList.add('hidden');
    solarSystemView.classList.remove('hidden');
}

function showPlanet(planetKey) {
    const planet = planetsData[planetKey];
    if (!planet) return;

    // Ocultar vista inicial y mostrar vista del planeta
    initialView.classList.add('hidden');
    planetView.classList.remove('hidden');

    // Actualizar contenido
    document.getElementById('planet-title-large').textContent = planet.name.toUpperCase();
    document.getElementById('planet-message').textContent = planet.message;
    
    // Actualizar visual del planeta
    const planetVisual = document.getElementById('planet-visual');
    
    // Limpiar todas las clases y estilos primero
    planetVisual.className = 'planet-visual-large';
    planetVisual.removeAttribute('style');
    
    // Aplicar imagen si está disponible (prioridad sobre estilos CSS)
    if (planet.image) {
        // Agregar clase especial para imágenes
        planetVisual.classList.add('has-image');
        planetVisual.style.setProperty('background-image', `url(${planet.image})`, 'important');
        planetVisual.style.setProperty('background-size', 'cover', 'important');
        planetVisual.style.setProperty('background-position', 'center', 'important');
        planetVisual.style.setProperty('background-repeat', 'no-repeat', 'important');
        // NO aplicar la clase del icono CSS cuando hay imagen
    } else {
        // Solo aplicar la clase del icono si NO hay imagen
        planetVisual.classList.add(planet.iconClass);
    }
    
    // Actualizar reproductor de música
    const musicPlayer = document.getElementById('music-player');
    
    // Verificar si es un archivo MP3 local
    if (planet.music && (planet.music.endsWith('.mp3') || planet.music.endsWith('.MP3') || planet.music.includes('.mp3'))) {
        musicPlayer.innerHTML = `
            <audio controls preload="auto" style="width: 100%;">
                <source src="${planet.music}" type="audio/mpeg">
                <source src="${planet.music}" type="audio/mp3">
                Tu navegador no soporta el elemento de audio.
            </audio>
        `;
    } 
    // Verificar si es un link de Spotify válido
    else if (planet.music && planet.music.includes('spotify.com') && !planet.music.includes('EXAMPLE')) {
        musicPlayer.innerHTML = `<iframe src="${planet.music}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } 
    // Verificar si es otro link (YouTube, etc.)
    else if (planet.music && !planet.music.includes('EXAMPLE')) {
        musicPlayer.innerHTML = `<a href="${planet.music}" target="_blank" rel="noopener noreferrer" style="display: block; padding: 1.5rem; text-align: center; color: var(--accent-blue); text-decoration: none; font-size: 1.1rem; transition: var(--transition);">🎵 Escuchar canción especial</a>`;
    } 
    // Si no hay música configurada
    else {
        musicPlayer.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">🎵 Agrega tu canción especial en script.js</p>';
    }

    // Resaltar planeta activo en el menú
    planetItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-planet') === planetKey) {
            item.classList.add('active');
        }
    });
}

function showFinalScreen() {
    solarSystemView.classList.add('hidden');
    finalScreen.classList.add('active');
    document.getElementById('final-message').innerHTML = finalMessage;
}

function restartJourney() {
    finalScreen.classList.remove('active');
    welcomeScreen.classList.remove('hidden');
    document.body.style.overflow = '';
}

// ============================================
// EVENT LISTENERS
// ============================================

// Botón explorar
exploreBtn.addEventListener('click', showSolarSystem);

// Control de música de fondo
bgMusicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(err => {
            console.log('Error al reproducir música:', err);
        });
        bgMusicToggle.classList.add('playing');
        bgMusicToggle.querySelector('.music-label').textContent = 'Sonando';
    } else {
        backgroundMusic.pause();
        bgMusicToggle.classList.remove('playing');
        bgMusicToggle.querySelector('.music-label').textContent = 'Música';
    }
});

// Actualizar estado del botón cuando la música termine o se pause
backgroundMusic.addEventListener('pause', () => {
    bgMusicToggle.classList.remove('playing');
    bgMusicToggle.querySelector('.music-label').textContent = 'Música';
});

backgroundMusic.addEventListener('play', () => {
    bgMusicToggle.classList.add('playing');
    bgMusicToggle.querySelector('.music-label').textContent = 'Sonando';
});

// Selección de planetas
planetItems.forEach(item => {
    item.addEventListener('click', () => {
        const planetKey = item.getAttribute('data-planet');
        showPlanet(planetKey);
    });
});

// Botón reiniciar
restartBtn.addEventListener('click', restartJourney);

// ============================================
// EFECTOS ADICIONALES
// ============================================

// Efecto de hover mejorado en planetas
planetItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Animación suave al cargar
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Detectar si se han visto todos los planetas (opcional - para mostrar pantalla final)
let viewedPlanets = new Set();

function checkAllPlanetsViewed() {
    if (viewedPlanets.size === Object.keys(planetsData).length) {
        // Esperar un poco antes de mostrar la pantalla final
        setTimeout(() => {
            showFinalScreen();
        }, 2000);
    }
}

// Actualizar el listener de planetas para rastrear los vistos
planetItems.forEach(item => {
    item.addEventListener('click', () => {
        const planetKey = item.getAttribute('data-planet');
        viewedPlanets.add(planetKey);
        showPlanet(planetKey);
        // Comentar la siguiente línea si no quieres la pantalla final automática
        // checkAllPlanetsViewed();
    });
});

// ============================================
// INICIALIZACIÓN DE IMÁGENES
// ============================================

function initializePlanetImages() {
    planetItems.forEach(item => {
        const planetKey = item.getAttribute('data-planet');
        const planet = planetsData[planetKey];
        const iconElement = item.querySelector('.planet-icon');
        
        if (planet && planet.image && iconElement) {
            // Aplicar imagen de fondo al icono del menú
            iconElement.style.backgroundImage = `url(${planet.image})`;
            iconElement.style.backgroundSize = 'cover';
            iconElement.style.backgroundPosition = 'center';
            iconElement.style.backgroundRepeat = 'no-repeat';
        }
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Inicializar imágenes cuando la página cargue
window.addEventListener('load', () => {
    initializePlanetImages();
});

// Suprimir errores de Sentry y otros errores comunes de extensiones
const originalError = console.error;
const originalWarn = console.warn;

console.error = function(...args) {
    const errorMessage = args[0]?.toString() || '';
    if (errorMessage.includes('sentry.io') || 
        errorMessage.includes('ERR_BLOCKED_BY_CLIENT') ||
        errorMessage.includes('net::ERR')) {
        return; // Ignorar errores de Sentry y bloqueos de extensiones
    }
    originalError.apply(console, args);
};

console.warn = function(...args) {
    const warnMessage = args[0]?.toString() || '';
    if (warnMessage.includes('sentry.io')) {
        return; // Ignorar warnings de Sentry
    }
    originalWarn.apply(console, args);
};

// También interceptar errores no capturados
window.addEventListener('error', function(e) {
    if (e.message && e.message.includes('sentry.io')) {
        e.preventDefault();
        return false;
    }
});

// Interceptar errores de recursos (como iframes bloqueados)
window.addEventListener('error', function(e) {
    if (e.target && e.target.tagName === 'IFRAME' && e.target.src && e.target.src.includes('sentry.io')) {
        e.preventDefault();
        return false;
    }
}, true);

console.log('🌟 Sistema Solar Interactivo cargado correctamente');
console.log('💡 Edita los mensajes, canciones e imágenes en script.js');
console.log('📸 Agrega tus imágenes en la carpeta "images" y actualiza las rutas en planetsData');

