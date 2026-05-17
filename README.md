# Lic. Priscila Giménez - Sitio Web Profesional

Sitio web profesional para la Lic. Priscila Giménez, Psicóloga Online. Construido con Astro y Tailwind CSS.

## 🚀 Tecnologías

- **Astro**: Framework web para la construcción de sitios rápidos y optimizados.
- **Tailwind CSS**: Framework de CSS para un diseño moderno y responsive.
- **TypeScript**: Para un desarrollo seguro y estructurado.
- **Vercel**: Plataforma de despliegue y analíticas.

## 🛠️ Estructura del Proyecto

```plaintext
/
├── public/          # Archivos estáticos (imágenes, favicons)
├── src/
│   ├── assets/      # Recursos estáticos (imágenes de la web)
│   ├── components/  # Componentes reutilizables (bloques y UI)
│   ├── config/      # Archivos de configuración de la identidad del sitio
│   ├── icons/       # Iconos utilizados en el sitio
│   ├── layouts/     # Estructura general de las páginas
│   └── pages/       # Rutas y páginas del sitio
└── package.json     # Dependencias y scripts
```

## ⚙️ Configuración

La identidad del sitio se puede gestionar desde `src/config/`:

| Archivo | Descripción |
| :--- | :--- |
| `config.ts` | Título del sitio, descripción SEO y configuración general. |
| `navigationBar.ts` | Enlaces y acciones de la barra de navegación. |
| `footerNavigation.ts` | Enlaces y textos del pie de página. |
| `socialLinks.ts` | Enlaces a redes sociales. |
| `analytics.ts` | IDs de seguimiento de Google Analytics y Tag Manager. |

## 📦 Comandos Disponibles

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321`. |
| `npm run build` | Construye el sitio para producción. |
| `npm run preview` | Previsualiza la construcción localmente. |

---

Desarrollado con ❤️ para Lic. Priscila Giménez.
