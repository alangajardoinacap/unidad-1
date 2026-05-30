# Café Bits & Bytes — Bootstrap

Sitio web estático. Misma estructura que la versión CSS pura, ahora con Bootstrap 5.

## Estructura

```
app-bs/
├── index.html
├── .gitignore
├── README.md
└── src/
    ├── components/
    │   ├── menu.html
    │   ├── horarios.html
    │   └── contacto.html
    ├── css/
    │   ├── global.css     ← variables, navbar, footer, card-hover, btn-cafe
    │   ├── home.css       ← solo el hero (gradiente)
    │   ├── menu.css       ← solo altura de imagen en cards
    │   ├── horarios.css   ← vacío (Bootstrap cubre todo)
    │   └── contacto.css   ← solo .alert-exito / .visible
    ├── js/
    │   └── form.js
    └── assets/
        ├── logo.svg
        └── favicon.svg
```

## Cómo abrir

```bash
python3 -m http.server 8000
```

Luego visitar `http://localhost:8000`.
