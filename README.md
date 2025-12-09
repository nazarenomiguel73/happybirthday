# 🌌 Sistema Solar Interactivo - Regalo Romántico

Una página web interactiva con temática espacial, perfecta para un regalo romántico. Explora el sistema solar y descubre mensajes personalizados en cada planeta.

## ✨ Características

- 🎨 Diseño moderno y minimalista inspirado en "Solar System Explorer"
- 🌟 Fondo espacial con estrellas parpadeantes animadas
- 🪐 10 cuerpos celestes interactivos (Sol, 8 planetas + Luna)
- 📸 **Soporte para imágenes reales de planetas** (o iconos CSS si no tienes imágenes)
- 💌 Mensajes románticos personalizables para cada planeta
- 🎵 Integración con Spotify para canciones especiales
- 📱 Diseño completamente responsive
- ✨ Animaciones suaves y efectos visuales elegantes
- 🌙 Pantalla final con mensaje especial

## 🚀 Cómo usar

1. **Abre el proyecto**: Simplemente abre `index.html` en tu navegador
2. **Agrega tus imágenes** (opcional): Coloca las imágenes de planetas en la carpeta `images/` y actualiza las rutas en `script.js`
3. **Personaliza los mensajes**: Edita el archivo `script.js` en la sección `planetsData`
4. **Agrega tus canciones**: Reemplaza los links de Spotify en `script.js`
5. **Personaliza el mensaje final**: Edita la variable `finalMessage` en `script.js`

## 📝 Personalización

### Agregar imágenes de planetas

1. Coloca tus imágenes en la carpeta `images/` (puedes usar JPG o PNG)
2. Abre `script.js` y busca el objeto `planetsData`
3. Para cada planeta, actualiza el campo `image` con la ruta de tu imagen:

```javascript
sun: {
    name: 'Sol',
    message: 'Tu mensaje personalizado aquí...',
    music: 'https://open.spotify.com/embed/track/TU_CANCION',
    iconClass: 'sun-icon',
    image: 'images/sol.jpg'  // ← Agrega aquí la ruta de tu imagen
}
```

**Nota**: Si no tienes una imagen para un planeta, déjalo como `null` y se usará el icono CSS original con colores.

### Editar mensajes románticos

Abre `script.js` y busca el objeto `planetsData`. Cada planeta tiene:

```javascript
sun: {
    name: 'Sol',
    message: 'Tu mensaje personalizado aquí...',
    music: 'https://open.spotify.com/embed/track/TU_CANCION',
    iconClass: 'sun-icon',
    image: 'images/sol.jpg'
}
```

### Agregar canciones de Spotify

1. Ve a Spotify y encuentra tu canción
2. Haz clic en "..." → "Compartir" → "Insertar canción"
3. Copia el código iframe o el link
4. Reemplaza el valor de `music` en `script.js`

**Formato del link de Spotify:**
```
https://open.spotify.com/embed/track/ID_DE_LA_CANCION?utm_source=generator
```

### Personalizar el mensaje final

Edita la variable `finalMessage` en `script.js`. Puedes usar HTML básico como `<br>`, `<em>`, etc.

## 🎨 Personalización avanzada

### Cambiar colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --bg-dark: #0a0a0f;
    --accent-blue: #4a9eff;
    --accent-gold: #ffd700;
    /* ... más colores ... */
}
```

### Modificar animaciones

Las animaciones están definidas en `styles.css` con `@keyframes`. Puedes ajustar:
- Velocidad de rotación de planetas
- Efecto de flotación
- Parpadeo de estrellas
- Transiciones de modales

## 📱 Compatibilidad

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Dispositivos móviles (iOS y Android)

## 🛠️ Estructura del proyecto

```
happybirthday/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica e interacciones
├── images/             # Carpeta para imágenes de planetas
│   └── README.md       # Instrucciones para imágenes
└── README.md          # Este archivo
```

## 💡 Consejos

- **Imágenes**: Usa imágenes cuadradas o circulares para mejor resultado. Tamaño recomendado: 200x200px o más
- **Mensajes**: Sé creativo y personal. Los mensajes pueden ser tan largos o cortos como quieras
- **Canciones**: Si no tienes Spotify, puedes usar links directos a YouTube u otros servicios
- **Colores**: Si no usas imágenes, ajusta los colores de los planetas en las variables CSS
- **Pantalla final**: La pantalla final se puede activar automáticamente cuando se ven todos los planetas (código comentado en `script.js`)

## 🎁 Ideas adicionales

- Agrega más planetas o asteroides con mensajes especiales
- Incluye fotos personales en lugar de los iconos de planetas
- Agrega efectos de sonido al hacer clic en los planetas
- Crea una versión con múltiples idiomas

## 📄 Licencia

Este proyecto es de uso libre para fines personales.

---

**Hecho con ❤️ y muchas estrellas ⭐**
