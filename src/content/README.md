# Content Pages

Este directorio contiene todas las páginas de contenido estático generadas desde archivos Markdown.

## Estructura

Todos los archivos `.md` en el directorio `pages/` serán convertidos automáticamente en páginas estáticas por Astro. La estructura de carpetas se mantiene en las URLs finales.

### Ejemplos:

- `src/content/pages/example-1.md` → `/example-1`
- `src/content/pages/sub-folder/example-2.md` → `/sub-folder/example-2`

## Formato de Archivo

Cada archivo Markdown debe incluir un frontmatter con los siguientes campos:

```markdown
---
title: "Título de la Página"
description: "Descripción opcional de la página"
publishDate: 2024-01-15
---

Tu contenido en Markdown aquí...
```

### Campos del Frontmatter

- **title** (requerido): El título principal de la página
- **description** (opcional): Una descripción breve que se muestra debajo del título
- **publishDate** (opcional): Fecha de publicación que se muestra en formato legible

## Contenido Markdown

Puedes usar todo el formato estándar de Markdown:

### Encabezados
```markdown
## Encabezado Nivel 2
### Encabezado Nivel 3
#### Encabezado Nivel 4
```

### Texto
```markdown
**Texto en negrita**
*Texto en cursiva*
```

### Listas
```markdown
- Item 1
- Item 2
- Item 3
```

### Enlaces
```markdown
[Texto del enlace](https://ejemplo.com)
```

### Código
```markdown
`código en línea`

\`\`\`javascript
// Bloque de código
function ejemplo() {
  console.log("Hola mundo");
}
\`\`\`
```

### Citas
```markdown
> Esta es una cita
```

### Imágenes
```markdown
![Texto alternativo](ruta/a/imagen.jpg)
```

## Estilos

Las páginas de contenido utilizan estilos personalizados que coinciden con el diseño del sitio principal:

- Encabezados en color turquesa (`--nav-bg`)
- Enlaces con efecto hover
- Bloques de código con fondo semi-transparente
- Diseño responsive

## Desarrollo

Para ver tus cambios en desarrollo:

```bash
npm run dev
```

Para generar las páginas estáticas:

```bash
npm run build
```

Las páginas generadas estarán en el directorio `dist/`.
