# 🤖 CodeExplainer

Mini-SaaS que utiliza Inteligencia Artificial (Google Gemini) para explicar código de manera automática y detallada.

---

## 🎯 Objetivo del Proyecto

Crear una herramienta web que permita a desarrolladores pegar código en cualquier lenguaje y obtener explicaciones claras y detalladas generadas por IA, mejorando la comprensión del código y acelerando el aprendizaje.

---

## ✨ Características

- 📝 **Input de código:** Editor de texto con syntax highlighting
- 🤖 **Explicación con IA:** Integración con Google Gemini API
- 🎨 **UI moderna:** Diseño responsive con Tailwind CSS y Shadcn/ui
- ⚡ **Respuestas rápidas:** API serverless optimizada
- 🌐 **Multi-lenguaje:** Soporte para todos los lenguajes de programación
- 📱 **Responsive:** Funciona en desktop, tablet y móvil

---

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/ui**

### Backend
- **Next.js API Routes** (serverless)
- **Google Gemini API** (tier gratuito)

### Deployment
- **Vercel** (despliegue gratuito)

---

## 📁 Estructura del Proyecto

```
01-code-explainer/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── explain/
│   │   │       └── route.ts          # API endpoint para explicación
│   │   ├── components/
│   │   │   ├── CodeInput.tsx         # Componente de input de código
│   │   │   ├── ExplanationDisplay.tsx # Visualización de explicación
│   │   │   ├── Header.tsx            # Header de la aplicación
│   │   │   └── ui/                   # Componentes Shadcn/ui
│   │   ├── lib/
│   │   │   ├── gemini.ts             # Cliente de Gemini API
│   │   │   └── utils.ts              # Utilidades
│   │   ├── styles/
│   │   │   └── globals.css           # Estilos globales
│   │   ├── layout.tsx                # Layout principal
│   │   └── page.tsx                  # Página principal
│   └── types/
│       └── index.ts                  # Tipos TypeScript
├── public/
│   ├── favicon.ico
│   └── images/
├── .env.example                      # Variables de entorno de ejemplo
├── .env.local                        # Variables de entorno (no commitear)
├── .eslintrc.json                    # Configuración ESLint
├── .gitignore
├── next.config.js                    # Configuración Next.js
├── package.json
├── postcss.config.js                 # Configuración PostCSS
├── README.md                         # Este archivo
├── tailwind.config.ts                # Configuración Tailwind
└── tsconfig.json                     # Configuración TypeScript
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ instalado
- Cuenta en Google AI Studio (gratuita)
- API Key de Gemini

### Pasos de instalación

```bash
# 1. Navegar al directorio del proyecto
cd 01-code-explainer

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local y agregar tu GEMINI_API_KEY

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:3000
```

---

## 🔑 Variables de Entorno

Crear archivo `.env.local` con:

```env
GEMINI_API_KEY=tu_api_key_aquí
```

Para obtener tu API key:
1. Visitar [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crear una nueva API key (gratuita)
3. Copiar y pegar en `.env.local`

---

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos TypeScript
```

---

## 🎨 Componentes Principales

### CodeInput.tsx
Componente para input de código con:
- Área de texto expandible
- Selector de lenguaje (opcional)
- Botón de explicar
- Estados de loading

### ExplanationDisplay.tsx
Muestra la explicación generada con:
- Formato markdown
- Syntax highlighting para código en la explicación
- Animaciones de entrada

### API Route: /api/explain
Endpoint serverless que:
- Recibe el código del frontend
- Hace la petición a Gemini API
- Retorna la explicación formateada

---

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Tests con cobertura
npm run test:coverage

# Tests e2e
npm run test:e2e
```

---

## 🚢 Deployment

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno en dashboard de Vercel
3. Deploy automático en cada push

```bash
# O usar Vercel CLI
npm install -g vercel
vercel
```

---

## 🔧 Configuración Adicional

### Shadcn/ui
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add card
```

---

## 📊 Plan de Desarrollo

- **Día 1-2:** Setup + UI básica
- **Día 3-4:** Integración Gemini API
- **Día 5-6:** Mejoras UI/UX + tests
- **Día 7:** Deploy + documentación

---

## 🐛 Troubleshooting

### Error: API Key inválida
- Verificar que la API key esté en `.env.local`
- Asegurarse de reiniciar el servidor después de modificar `.env.local`

### Error: Rate limit excedido
- Gemini tier gratuito tiene límites
- Implementar sistema de caché (próxima versión)

---

## 🤝 Contribuir

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📄 Licencia

MIT License - ver archivo LICENSE para más detalles

---

## 👨‍💻 Autor

**Tu Nombre**
- LinkedIn: [Tu perfil]
- GitHub: [@tu-usuario]

---

## 🔗 Links Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Google Gemini API](https://ai.google.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

---

**Estado:** 🟡 En desarrollo
**Versión:** 0.1.0
**Última actualización:** 2025-11-12
