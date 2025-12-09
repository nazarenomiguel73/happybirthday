# 📸 Carpeta de Imágenes

Coloca aquí las imágenes de los planetas.

## 📋 Nombres recomendados para las imágenes:

- `sol.jpg` o `sol.png`
- `mercurio.jpg` o `mercurio.png`
- `venus.jpg` o `venus.png`
- `tierra.jpg` o `tierra.png`
- `marte.jpg` o `marte.png`
- `jupiter.jpg` o `jupiter.png`
- `saturno.jpg` o `saturno.png`
- `urano.jpg` o `urano.png`
- `neptuno.jpg` o `neptuno.png`
- `luna.jpg` o `luna.png`

## 💡 Consejos:

- **Formato**: JPG o PNG funcionan perfectamente
- **Tamaño recomendado**: 200x200px o más (se ajustarán automáticamente)
- **Forma**: Las imágenes se mostrarán en círculo, así que si son cuadradas se verán mejor
- **Calidad**: Usa imágenes de buena calidad para que se vean nítidas

## 🔧 Cómo usar:

1. Agrega tus imágenes en esta carpeta
2. Abre `script.js`
3. En el objeto `planetsData`, busca el campo `image` de cada planeta
4. Reemplaza `null` con la ruta de tu imagen, por ejemplo: `'images/sol.jpg'`

Ejemplo:
```javascript
sun: {
    name: 'Sol',
    message: '...',
    music: '...',
    iconClass: 'sun-icon',
    image: 'images/sol.jpg'  // ← Aquí va tu imagen
}
```

Si no tienes una imagen para un planeta, déjalo como `null` y se usará el icono CSS original.

