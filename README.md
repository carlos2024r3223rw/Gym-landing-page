# ⚡ FORJA — Crossfit & Artes Marciales

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> **FORJA** es una Landing Page con temática **Dark / Cyberpunk** diseñada específicamente para un gimnasio boutique de Crossfit, MMA y entrenamiento de alto rendimiento. Su estética está pensada para transmitir fuerza, disciplina y adrenalina.

---

## 📸 Vista Previa

![FORJA Preview](hero.png)

---

## ✨ Características Principales

| Característica | Descripción Detallada |
|---|---|
| 🖤 **Estilo Dark Cyberpunk** | Diseño inmersivo con fondo negro profundo y acentos de neón (verde lima, cian y naranja) para un aspecto premium e industrial. |
| ⚡ **Efectos Visuales Avanzados** | Título principal con efecto "Glitch" interactivo, scanlines estilo monitor antiguo, y grano cinematográfico para darle un toque "gritty". |
| 📊 **Calculadora de Calorías** | Herramienta interactiva que calcula las calorías estimadas que quemará el usuario según su peso, duración del entreno, intensidad y disciplina (Crossfit, MMA, Boxeo, etc.). Cuenta con barras de progreso animadas. |
| 💰 **Planes de Membresía** | Visualización clara de los planes, destacando el plan "Espartano" con un efecto visual superior para atraer más conversiones. |
| 💬 **Integración con WhatsApp** | Botones de llamada a la acción (CTA) configurados con mensajes predefinidos de WhatsApp Business para reservas instantáneas. |
| 🎬 **Marquee Animado** | Banda de texto deslizante infinita para destacar las disciplinas clave. |
| 📱 **Responsive Design** | 100% adaptable a cualquier dispositivo móvil. Incluye una barra de acción ("Sticky CTA") en la parte inferior para dispositivos móviles. |
| 🔍 **SEO & Rendimiento** | Estructura semántica, fuentes auto-alojadas u optimizadas, y meta descripciones listas para indexación. |

---

## 🏗️ Secciones de la Landing Page

1. **Header & Navegación**: Menú minimalista que se vuelve traslúcido y fijo (sticky) al hacer scroll.
2. **Hero Section**: Primera impresión impactante con imagen full-screen oscura, estadísticas de la comunidad y un botón de reserva iluminado.
3. **Marquee**: Banda de neón continua.
4. **Disciplinas**: Tarjetas dinámicas que muestran las opciones de entrenamiento (MMA, BJJ, Muay Thai, etc.).
5. **Nosotros ("Esto no es un gimnasio")**: Sección de filosofía del box, enfatizando el equipo de élite y la comunidad brutal.
6. **Membresías**: Tabla de precios transparente.
7. **Calculadora de Rendimiento**: Componente interactivo único de este gimnasio.
8. **Testimonios ("Voces de la Forja")**: Opiniones de atletas reales para generar confianza social.
9. **Call-To-Action (CTA)**: Cierre de la página incentivando a la primera clase gratuita, con un fondo animado en cuadrícula de neón.
10. **Contacto & Footer**: Ubicación, horarios, teléfono, correo y redes sociales.

---

## 🚀 Instalación y Uso

Este proyecto no utiliza frameworks ni requiere procesos de compilación (build steps). Es puro HTML, CSS y JS.

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/carlos2024r3223rw/Gym-landing-page.git
   ```
2. **Abrir el proyecto:**
   - Simplemente abre el archivo `index.html` en tu navegador web de preferencia.
   - Alternativamente, puedes usar la extensión **Live Server** en Visual Studio Code para ver cambios en tiempo real.

---

## ✏️ Personalización Rápida

La lógica de negocio y el contenido textual están centralizados en el archivo `script.js` bajo un objeto de configuración.

Abre `script.js` y modifica el objeto `CONFIG` a tus necesidades:

```javascript
const CONFIG = {
  whatsappNumber: "50370000000",     // Cambia por el WhatsApp de tu gimnasio
  phoneNumber: "+50322000000",       // Cambia por el número fijo

  disciplines: [...],                // Añade o modifica las disciplinas ofrecidas
  plans: [...],                      // Configura los precios y beneficios
  reviews: [...],                    // Actualiza las reseñas
  calorieMultipliers: {...},         // Ajusta los cálculos de rendimiento si es necesario
};
```

*Las imágenes se pueden sustituir reemplazando `hero.png` y `trainers.png`.*

---

## 🛠️ Stack Tecnológico

- **HTML5**: Estructura limpia y accesible.
- **CSS3**: Variables CSS (Custom Properties), CSS Grid, Flexbox, y animaciones avanzadas (keyframes, glitch).
- **JavaScript**: Lógica interactiva en Vanilla JS (ES6+), sin dependencias como jQuery o React, manteniendo la carga instantánea.
- **Fuentes**: 
  - `Bebas Neue` (Títulos de gran impacto)
  - `Barlow & Barlow Condensed` (Cuerpos de texto y UI técnica)

---

## 📄 Licencia

Este proyecto está bajo uso libre. Puedes adaptarlo, modificarlo y usarlo para cualquier fin comercial o personal.

---

<p align="center">
  <strong>⚡ FORJADOS EN FUEGO ⚡</strong><br>
  Construido para romper límites.
</p>
