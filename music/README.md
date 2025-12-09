# 🎵 Carpeta de Música

Coloca aquí tus archivos MP3 de las canciones especiales.

## 📋 Nombres recomendados para las canciones:

- `sol.mp3`
- `mercurio.mp3`
- `venus.mp3`
- `tierra.mp3`
- `marte.mp3`
- `jupiter.mp3`
- `saturno.mp3`
- `urano.mp3`
- `neptuno.mp3`
- `luna.mp3`
- `eclipse.mp3`

## 💡 Consejos:

- **Formato**: MP3 es el formato recomendado (también funciona WAV, OGG, etc.)
- **Calidad**: Usa archivos de buena calidad para mejor experiencia
- **Tamaño**: Los archivos grandes pueden tardar en cargar, considera comprimirlos si son muy pesados

## 🔧 Cómo usar:

1. Agrega tus archivos MP3 en esta carpeta
2. Abre `script.js`
3. En el objeto `planetsData`, busca el campo `music` de cada planeta
4. Reemplaza el valor con la ruta de tu archivo, por ejemplo: `'music/sol.mp3'`

Ejemplo:
```javascript
sun: {
    name: 'Sol',
    message: '...',
    music: 'music/sol.mp3',  // ← Aquí va tu archivo MP3
    iconClass: 'sun-icon',
    image: 'images/sol.jpg'
}
```

## 🌐 Alternativas:

También puedes usar:
- **Links de Spotify**: `'https://open.spotify.com/embed/track/ID?utm_source=generator'`
- **Links de YouTube**: `'https://www.youtube.com/watch?v=VIDEO_ID'`
- **Cualquier otro link**: Se mostrará como un botón para abrir en nueva pestaña

Si no tienes una canción para un planeta, déjalo como `null` o un string vacío `''`.

