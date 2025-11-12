# 📋 PLAN MAESTRO DE DESARROLLO - PORTFOLIO DE PROYECTOS

## 🎯 Objetivo General

Desarrollar 5 proyectos profesionales que demuestren habilidades full-stack, integración con IA, y buenas prácticas de desarrollo. Todos los proyectos serán desplegados gratuitamente y documentados en LinkedIn.

---

## 📌 PRINCIPIOS FUNDAMENTALES PARA TODOS LOS PROYECTOS

### Antes de Comenzar Cualquier Proyecto

**1. Planificación Previa (30 minutos)**
- Define el problema específico que resuelve tu proyecto
- Identifica 3-5 características principales (MVP)
- Dibuja un wireframe básico en papel o Excalidraw
- Lista las tecnologías que usarás y por qué

**2. Setup Inicial Obligatorio (1 hora)**
- Crear repositorio en GitHub con `.gitignore` apropiado
- Configurar ESLint + Prettier para código consistente
- Crear archivo README.md básico desde el día 1
- Configurar estructura de carpetas desde el inicio
- Hacer primer commit: "Initial commit"

**3. Desarrollo Iterativo (Metodología para todos)**
- Divide el proyecto en sprints de 1-2 días
- Cada sprint debe resultar en funcionalidad deployable
- Commits frecuentes con mensajes descriptivos
- Testea cada funcionalidad antes de seguir
- Documenta decisiones importantes en el README

**4. Calidad del Código (Checklist)**
- [ ] Variables y funciones con nombres descriptivos
- [ ] Comentarios solo donde sea necesario (código auto-explicativo)
- [ ] Manejo de errores en TODAS las operaciones asíncronas
- [ ] Validación de inputs del usuario
- [ ] Loading states en todas las operaciones
- [ ] Responsive design (mobile-first)
- [ ] Accesibilidad básica (alt tags, semantic HTML, ARIA labels)

**5. README Profesional (Template para todos)**

Cada README DEBE incluir:
```markdown
# 🚀 [Nombre del Proyecto]

[Badge de deploy] [Badge de licencia] [Badge de tecnologías]

## 📸 Demo
[GIF animado del proyecto funcionando]

## 🎯 Problema que Resuelve
[2-3 líneas explicando el "por qué"]

## ✨ Características
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3

## 🛠️ Tecnologías
| Categoría | Tecnología | Por qué |
|-----------|-----------|---------|
| Frontend  | X         | Razón   |

## 🚀 Instalación Local
[Pasos numerados claros]

## 🏗️ Arquitectura
[Diagrama simple de flujo de datos]

## 📝 API Documentation (si aplica)
[Endpoints con ejemplos]

## 🤝 Contribuir
[Guía de contribución]

## 👨‍💻 Autor
[Tu información + LinkedIn]

## 📄 Licencia
MIT
```

**6. Testing Antes de Deploy (No negociable)**
- [ ] Funciona en Chrome, Firefox y Safari
- [ ] Responsive en móvil (iPhone y Android)
- [ ] Manejo de errores de red (desconectar WiFi y probar)
- [ ] Validaciones de formularios funcionan
- [ ] No hay errores en consola del navegador
- [ ] Tiempos de carga aceptables (<3 segundos)

---

# 🚀 PROYECTO 1: Mini-SaaS con IA - "CodeExplainer"

## 📝 Concepto del Proyecto

**Nombre:** CodeExplainer  
**Tagline:** "Tu asistente personal para entender cualquier código"  
**Problema:** Desarrolladores pierden tiempo descifrando código heredado o complejo  
**Solución:** IA que explica código en lenguaje natural en segundos

**Valor del Proyecto para Portfolio:**
- Demuestra integración con APIs de IA (tendencia actual)
- Manejo de estado asíncrono
- Validación de datos
- Experiencia de usuario pulida

---

## 🏗️ STACK TECNOLÓGICO (100% Gratuito)

**Frontend:** Next.js 14 + TypeScript + Tailwind CSS + Shadcn/ui  
**Backend:** Next.js API Routes (serverless)  
**IA:** Google Gemini API (60 req/min gratis)  
**Deploy:** Vercel  
**Otros:** Zod (validación), React Hook Form, Monaco Editor

---

## 📂 ESTRUCTURA DE CARPETAS RECOMENDADA

```
code-explainer/
├── src/
│   ├── app/              # Páginas y API routes
│   │   ├── api/
│   │   │   └── explain/route.ts
│   │   └── page.tsx
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes base (Shadcn)
│   │   └── [features]/  # Componentes por característica
│   ├── lib/             # Lógica de negocio
│   │   ├── gemini.ts
│   │   └── validations.ts
│   ├── hooks/           # Custom hooks
│   ├── types/           # TypeScript types
│   └── constants/       # Constantes globales
├── public/              # Assets estáticos
└── .env.local          # Variables de entorno
```

---

## 🔧 PROCESO DE DESARROLLO DETALLADO

### **DÍA 1: Setup y Configuración**

**Tarea 1.1: Crear Proyecto (30 min)**
- Ejecutar `npx create-next-app@latest code-explainer --typescript --tailwind --app`
- Configurar Shadcn/ui con `npx shadcn-ui@latest init`
- Instalar dependencias: Monaco Editor, Zod, React Hook Form, Gemini API
- Crear `.env.local` con estructura de variables

**Tarea 1.2: Estructura Base (30 min)**
- Crear todas las carpetas de la estructura
- Configurar TypeScript paths en `tsconfig.json`
- Configurar Tailwind con tema personalizado
- Setup de ESLint y Prettier

**Tarea 1.3: Obtener API Key (15 min)**
- Registrarse en Google AI Studio (https://makersuite.google.com)
- Generar API Key gratuita
- Probar la API con un request simple en Postman
- Guardar key en `.env.local`

**Entregable Día 1:** Proyecto iniciado, estructura creada, API key configurada

---

### **DÍA 2: Backend - API Route**

**Tarea 2.1: Cliente de Gemini (1 hora)**

Crear archivo `src/lib/gemini.ts`:
- Instanciar cliente de Google Generative AI
- Crear función `explainCode(code: string, language: string)`
- Construir prompt efectivo para explicaciones
- Manejar errores de API (rate limits, timeouts)
- Agregar tipos TypeScript para las respuestas

**Tarea 2.2: Validación con Zod (30 min)**

Crear archivo `src/lib/validations.ts`:
- Schema para validar código (min 10 chars, max 5000)
- Schema para validar lenguaje (enum de lenguajes soportados)
- Tipos TypeScript inferidos de los schemas

**Tarea 2.3: API Route Principal (1 hora)**

Crear archivo `src/app/api/explain/route.ts`:
- Handler POST que recibe código y lenguaje
- Validar datos con Zod
- Llamar al cliente de Gemini
- Retornar respuesta estructurada
- Manejo completo de errores con status codes apropiados
- Rate limiting básico (opcional: Map en memoria)

**Tarea 2.4: Testing del Backend (30 min)**
- Testear con Postman/Thunder Client
- Probar casos edge: código vacío, muy largo, caracteres especiales
- Verificar manejo de errores
- Documentar ejemplos de request/response

**Entregable Día 2:** API funcionando y probada, lista para conectar frontend

---

### **DÍA 3-4: Frontend - Componentes y UI**

**Tarea 3.1: Definir Tipos (30 min)**

Crear archivo `src/types/index.ts`:
- Interfaces para lenguajes soportados
- Tipos para respuestas de API
- Estados de la aplicación (loading, error, success)

**Tarea 3.2: Constantes (15 min)**

Crear archivo `src/constants/languages.ts`:
- Array de 10+ lenguajes soportados
- Con iconos emoji y colores para UI

**Tarea 3.3: Custom Hook (45 min)**

Crear archivo `src/hooks/useCodeExplanation.ts`:
- Estado para: explanation, isLoading, error
- Función `explainCode` que llama a la API
- Función `reset` para limpiar estado
- Manejo de errores con mensajes user-friendly
- Integrar toast notifications

**Tarea 3.4: Componente Editor (1 hora)**

Crear archivo `src/components/CodeEditor.tsx`:
- Integrar Monaco Editor
- Configurar syntax highlighting
- Props: value, onChange, language
- Tema oscuro por defecto
- Opciones: sin minimap, line numbers, tab size 2

**Tarea 3.5: Componente Panel de Explicación (1 hora)**

Crear archivo `src/components/ExplanationPanel.tsx`:
- Estados: loading (skeleton), error, empty, success
- Renderizar markdown de la explicación
- Diseño tipo "card" con título
- Animación de entrada suave

**Tarea 3.6: Página Principal (2 horas)**

Crear archivo `src/app/page.tsx`:
- Layout con header profesional
- Hero section con descripción del proyecto
- Grid de 2 columnas: Editor | Explicación
- Selector de lenguaje (dropdown)
- Botón "Explicar Código" con estado de loading
- Footer con créditos
- Responsive: stack vertical en móvil

**Entregable Día 3-4:** Interfaz completa y funcional, conectada al backend

---

### **DÍA 5: Pulido y Optimización**

**Tarea 5.1: Mejorar UX (2 horas)**
- Agregar ejemplos de código predefinidos (botones con snippets)
- Keyboard shortcuts (Cmd+Enter para explicar)
- Auto-focus en el editor al cargar
- Mensajes de error específicos y útiles
- Agregar tips/hints en la interfaz

**Tarea 5.2: Performance (1 hora)**
- Implementar debounce en cambios de código (opcional)
- Lazy loading de Monaco Editor
- Optimizar imágenes en `/public`
- Verificar bundle size con `next build`

**Tarea 5.3: Accesibilidad (30 min)**
- ARIA labels en botones y inputs
- Contraste de colores adecuado
- Navegación por teclado funcional
- Alt text en imágenes

**Entregable Día 5:** Proyecto pulido, optimizado y accesible

---

### **DÍA 6: README y Documentación**

**Tarea 6.1: Screenshots y GIF (1 hora)**
- Tomar capturas de pantalla de calidad
- Crear GIF demo con ScreenToGif o Gifox
- Optimizar peso de las imágenes
- Guardar en `/public/images`

**Tarea 6.2: README Profesional (2 horas)**
- Seguir template proporcionado arriba
- Sección "Lo que aprendí" detallada
- Instrucciones de instalación paso a paso
- Documentar decisiones técnicas importantes
- Agregar badges (Vercel deploy status, license, etc.)

**Tarea 6.3: Comentarios en Código (30 min)**
- Revisar código y agregar JSDoc donde corresponda
- Documentar funciones complejas
- Agregar TODOs para futuras mejoras

**Entregable Día 6:** Documentación completa y profesional

---

### **DÍA 7: Deploy y Publicación**

**Tarea 7.1: Preparar para Producción (30 min)**
- Verificar que `.env.local` esté en `.gitignore`
- Eliminar console.logs innecesarios
- Verificar que no hay warnings en build
- Ejecutar `npm run build` localmente

**Tarea 7.2: Deploy en Vercel (30 min)**
- Push a GitHub (repo público)
- Conectar Vercel con el repo
- Configurar variables de entorno en Vercel
- Deploy
- Verificar que funciona en producción

**Tarea 7.3: Testing Post-Deploy (30 min)**
- Probar todas las funcionalidades en producción
- Verificar en diferentes dispositivos
- Pedir a un amigo que lo pruebe

**Tarea 7.4: Configuración Final (30 min)**
- Configurar dominio personalizado (opcional)
- Agregar Google Analytics (opcional)
- Configurar OG tags para compartir en redes

**Entregable Día 7:** Proyecto desplegado y funcional en producción

---

## 📱 MENSAJE PARA LINKEDIN

```
🚀 [NUEVO PROYECTO] CodeExplainer: Tu Asistente IA para Entender Código

Acabo de lanzar CodeExplainer, una aplicación web que usa Google Gemini AI para explicar cualquier fragmento de código en lenguaje natural.

🎯 ¿Por qué lo hice?
Como desarrollador, constantemente me enfrento a código heredado o snippets complejos que me cuesta entender. CodeExplainer resuelve esto en segundos usando IA.

💡 Características principales:
✅ Soporte para 11+ lenguajes de programación
✅ Explicaciones detalladas paso a paso
✅ Editor de código integrado con syntax highlighting
✅ Interfaz responsive y moderna
✅ 100% gratuito y open source

🛠️ Stack tecnológico:
• Frontend: Next.js 14 + TypeScript + Tailwind CSS
• IA: Google Gemini API (60 requests/min gratis)
• Deployment: Vercel (serverless, zero config)
• UI: Shadcn/ui + Monaco Editor (el mismo de VS Code)

📚 Lo que aprendí construyendo este proyecto:
• Integración de APIs de IA en producción
• Manejo de serverless functions con Next.js
• Optimización de prompts para mejores respuestas
• TypeScript avanzado con Zod para validaciones type-safe
• Diseño de UX para aplicaciones de IA

🔗 Demo en vivo: [TU_URL].vercel.app
💻 Código fuente: github.com/tu-usuario/code-explainer

El código completo está disponible en GitHub. Si te interesa la IA o el desarrollo web, ¡échale un vistazo!

¿Qué otros problemas de desarrollo podríamos resolver con IA? 👇

#WebDevelopment #NextJS #AI #GoogleGemini #OpenSource #FullStack #TypeScript #JavaScript
```

---

---

# 🚀 PROYECTO 2: Dashboard Interactivo - "CryptoTracker Pro"

## 📝 Concepto del Proyecto

**Nombre:** CryptoTracker Pro  
**Tagline:** "Monitorea el mercado crypto en tiempo real"  
**Problema:** Plataformas premium de tracking cripto cuestan $50-100/mes  
**Solución:** Dashboard gratuito con datos en tiempo real de CoinGecko API

**Valor del Proyecto para Portfolio:**
- Demuestra consumo y manejo de APIs REST
- Visualización de datos con gráficos interactivos
- Gestión de estado complejo
- Optimización de performance (caching, React Query)

---

## 🏗️ STACK TECNOLÓGICO (100% Gratuito)

**Frontend:** React + Vite + TypeScript + Tailwind CSS  
**Data Fetching:** TanStack Query (React Query) + Axios  
**Charts:** Recharts  
**State:** Zustand + localStorage  
**Routing:** React Router DOM  
**API:** CoinGecko (sin API key, gratuita)  
**Deploy:** Netlify

---

## 📂 ESTRUCTURA DE CARPETAS RECOMENDADA

```
crypto-tracker/
├── src/
│   ├── api/              # Cliente API y endpoints
│   │   ├── coingecko.ts
│   │   └── endpoints.ts
│   ├── components/       # Componentes React
│   │   ├── layout/      # Header, Footer, Sidebar
│   │   ├── crypto/      # CryptoCard, CryptoList
│   │   ├── dashboard/   # StatCard, TrendingCoins
│   │   └── ui/          # Componentes reutilizables
│   ├── pages/           # Páginas/Rutas
│   │   ├── Dashboard.tsx
│   │   ├── CoinDetail.tsx
│   │   └── Watchlist.tsx
│   ├── hooks/           # Custom hooks
│   ├── store/           # Zustand stores
│   ├── types/           # TypeScript types
│   ├── utils/           # Helpers y utilities
│   └── lib/             # Configuraciones (React Query)
└── public/              # Assets estáticos
```

---

## 🔧 PROCESO DE DESARROLLO DETALLADO

### **DÍA 1: Setup y API Client**

**Tarea 1.1: Crear Proyecto (30 min)**
- Ejecutar `npm create vite@latest crypto-tracker -- --template react-ts`
- Instalar dependencias clave
- Configurar Tailwind CSS
- Setup de ESLint + Prettier

**Tarea 1.2: Explorar API de CoinGecko (45 min)**
- Leer documentación: https://www.coingecko.com/en/api/documentation
- Identificar endpoints necesarios:
  - `/coins/markets` (lista de monedas)
  - `/coins/{id}` (detalle de moneda)
  - `/coins/{id}/market_chart` (histórico de precios)
  - `/global` (datos globales del mercado)
  - `/search/trending` (monedas trending)
- Probar endpoints en Postman
- Anotar límites de rate (50 requests/minuto)

**Tarea 1.3: Cliente de API (1 hora)**

Crear archivo `src/api/coingecko.ts`:
- Crear instancia de Axios con base URL
- Configurar timeout (10 segundos)
- Interceptor para logging de requests
- Interceptor para manejo de rate limits
- Tipos TypeScript para configuración

**Tarea 1.4: Endpoints Tipados (1.5 horas)**

Crear archivo `src/api/endpoints.ts`:
- Función `getCoins()` con paginación
- Función `getCoinDetail(id)` para detalle
- Función `getCoinHistory(id, days)` para gráficos
- Función `getGlobalMarketData()` para stats
- Función `getTrendingCoins()` para trending
- Función `searchCoins(query)` para búsqueda
- Todas con tipos de retorno TypeScript
- Manejo de errores en cada función

**Entregable Día 1:** Cliente API funcional y probado

---

### **DÍA 2: Tipos y React Query**

**Tarea 2.1: Definir Tipos (1 hora)**

Crear archivo `src/types/crypto.ts`:
- Interface `Coin` (20+ propiedades de CoinGecko)
- Interface `CoinDetail` (extendida de Coin)
- Interface `MarketData` (datos globales)
- Interface `TrendingCoin`
- Enum para prioridades, períodos de tiempo, etc.

**Tarea 2.2: Configurar React Query (30 min)**

Crear archivo `src/lib/queryClient.ts`:
- Instanciar QueryClient
- Configurar opciones por defecto:
  - staleTime: 5 minutos
  - cacheTime: 10 minutos
  - refetchOnWindowFocus: false
- Configurar retry logic

Configurar en `main.tsx`:
- Wrap app con QueryClientProvider

**Tarea 2.3: Custom Hooks (2 horas)**

Crear archivos en `src/hooks/`:

`useCoins.ts`:
- Hook que usa useQuery
- Acepta parámetros: page, perPage
- Query key: ['coins', page, perPage]
- Retorna data, isLoading, error, refetch

`useCoinDetail.ts`:
- Hook para detalle de moneda
- Parámetro: coinId
- enabled: !!coinId (solo si hay ID)

`useCoinHistory.ts`:
- Hook para histórico de precios
- Parámetros: coinId, days
- Configurar staleTime más corto (2 min)

`useMarketData.ts`:
- Hook para datos globales del mercado

`useTrendingCoins.ts`:
- Hook para monedas trending

**Tarea 2.4: Testing de Hooks (30 min)**
- Crear componente de prueba simple
- Verificar que los datos se cargan
- Verificar estados de loading
- Verificar manejo de errores

**Entregable Día 2:** Sistema de data fetching completo con React Query

---

### **DÍA 3-4: Componentes UI y Visualización**

**Tarea 3.1: Utilidades de Formateo (45 min)**

Crear archivo `src/utils/format.ts`:
- `formatCurrency()` con opción compact ($1.5M, $2.3B)
- `formatPercentage()` con signo +/-
- `formatNumber()` con separadores de miles
- `formatDate()` para timestamps
- Tests manuales de cada función

**Tarea 3.2: Componentes Base UI (1 hora)**

Crear en `src/components/ui/`:
- `LoadingSkeleton.tsx`: Placeholder animado
- `ErrorMessage.tsx`: Mensajes de error user-friendly
- `SearchBar.tsx`: Input con debounce
- `Card.tsx`: Contenedor reutilizable
- Todos responsive y accesibles

**Tarea 3.3: Componentes de Crypto (2 horas)**

Crear en `src/components/crypto/`:

`CryptoCard.tsx`:
- Muestra: imagen, nombre, símbolo, rank
- Precio actual formateado
- Cambio 24h con indicador visual (verde/rojo)
- Market cap y volumen (formato compact)
- onClick para navegar a detalle
- Hover effect suave

`CryptoList.tsx`:
- Grid responsive de CryptoCards
- Loading state con skeletons
- Empty state si no hay datos
- Paginación (botones next/prev)

`PriceChart.tsx`:
- Integrar Recharts LineChart
- Datos: array de [timestamp, price]
- Tooltip personalizado
- Responsive container
- Color dinámico (verde si subió, rojo si bajó)
- Eje X: fechas formateadas
- Eje Y: precios con formato $

**Tarea 3.4: Componentes de Dashboard (2 horas)**

Crear en `src/components/dashboard/`:

`StatCard.tsx`:
- Título del stat
- Valor formateado (número grande)
- Cambio 24h con indicador
- Icono decorativo
- Diseño tipo card elevada

`TrendingCoins.tsx`:
- Lista horizontal scroll de monedas trending
- Badges con rank
- Mini cards clickables

`MarketOverview.tsx`:
- Resumen de market cap total
- Volumen 24h
- Dominancia BTC/ETH
- Gráfico de distribución (pie chart)

`TopMovers.tsx`:
- Top 5 gainers (mayores subidas)
- Top 5 losers (mayores caídas)
- Diseño de tabla o cards

**Entregable Día 3-4:** Todos los componentes UI funcionando con datos reales

---

### **DÍA 5: Páginas y Routing**

**Tarea 5.1: Configurar Router (30 min)**

Configurar en `main.tsx` o `App.tsx`:
- BrowserRouter
- Rutas: /, /coin/:id, /watchlist, /markets
- Layout compartido (Header siempre visible)

**Tarea 5.2: Página Dashboard (1.5 horas)**

Crear `src/pages/Dashboard.tsx`:
- Stats globales en la parte superior (3 StatCards)
- Sección de "Trending" horizontal
- Lista de top 50 criptomonedas
- Búsqueda en la parte superior
- Loading y error states bien manejados

**Tarea 5.3: Página Detalle de Moneda (2 horas)**

Crear `src/pages/CoinDetail.tsx`:
- Header con: imagen, nombre, símbolo, rank
- Precio actual destacado
- Estadísticas clave en grid:
  - Market cap, Volume 24h, Supply
  - ATH, ATL, Cambios 7d/30d
- Gráfico de precio (tabs: 7d, 30d, 90d, 1y)
- Descripción de la moneda (HTML desde API)
- Links oficiales (website, explorers, repos)
- Botón "Agregar a Watchlist"

**Tarea 5.4: Página Watchlist (1.5 horas)**

Crear `src/pages/Watchlist.tsx`:
- Lista de monedas guardadas
- Empty state si no hay favoritos
- Botón para remover de watchlist
- Actualización automática cada 5 min

**Tarea 5.5: Zustand Store para Watchlist (1 hora)**

Crear `src/store/useWatchlistStore.ts`:
- Estado: array de coinIds
- Acción: `addToWatchlist(coinId)`
- Acción: `removeFromWatchlist(coinId)`
- Acción: `isInWatchlist(coinId)` (helper)
- Persistir en localStorage con middleware

**Entregable Día 5:** Aplicación navegable completa con todas las páginas

---

### **DÍA 6: Pulido, Performance y UX**

**Tarea 6.1: Optimizaciones de Performance (2 horas)**
- Implementar React.memo en componentes pesados
- useMemo para cálculos complejos (ej: filtrado de coins)
- useCallback para funciones pasadas como props
- Lazy loading de rutas con React.lazy
- Verificar bundle size con `npm run build`

**Tarea 6.2: Mejoras de UX (2 horas)**
- Agregar toast notifications (react-hot-toast)
- Implementar skeleton screens en todos los loadings
- Animaciones suaves con CSS transitions
- Feedback visual en todos los clicks
- Agregar "Pull to refresh" simulado

**Tarea 6.3: Error Boundaries (45 min)**
- Crear ErrorBoundary component
- Wrap páginas principales
- Fallback UI amigable

**Tarea 6.4: Responsive Final (1 hora)**
- Verificar en: móvil (320px), tablet (768px), desktop (1200px+)
- Ajustar grids y layouts
- Menú hamburguesa en móvil

**Entregable Día 6:** Aplicación optimizada y pulida

---

### **DÍA 7: Documentación y Deploy**

**Tarea 7.1: Screenshots y Assets (1 hora)**
- Captura de dashboard
- Captura de detalle de moneda
- GIF de navegación
- Logo o favicon personalizado

**Tarea 7.2: README Completo (2 horas)**
- Seguir template proporcionado
- Sección técnica detallada
- Diagramas de arquitectura (opcional: Excalidraw)
- Troubleshooting común

**Tarea 7.3: Deploy en Netlify (1 hora)**
- Build del proyecto
- Conectar repo a Netlify
- Configurar redirects para SPA
- Agregar variables de entorno (si las hay)
- Verificar funcionalidad en producción

**Tarea 7.4: Mejoras Futuras (30 min)**
- Documentar en README sección "Roadmap"
- Crear issues en GitHub para features futuras
- Agregar contributing guidelines

**Entregable Día 7:** Proyecto desplegado y documentado

---

## 📱 MENSAJE PARA LINKEDIN

```
📊 [NUEVO PROYECTO] CryptoTracker Pro: Dashboard de Criptomonedas en Tiempo Real

Acabo de lanzar CryptoTracker Pro, un dashboard interactivo para monitorear el mercado de criptomonedas, consumiendo la API gratuita de CoinGecko.

🎯 El desafío:
Las plataformas premium de tracking cripto pueden costar hasta $100/mes. Quise demostrar que se puede construir una alternativa poderosa usando herramientas gratuitas y modernas.

⚡ Características implementadas:
✅ Monitoreo de +100 criptomonedas en tiempo real
✅ Gráficos interactivos de precios históricos
✅ Trending coins y top movers del mercado
✅ Watchlist personalizada (persiste en localStorage)
✅ Estadísticas globales del mercado
✅ Búsqueda y filtrado avanzado

🛠️ Stack técnico:
• Frontend: React 18 + TypeScript + Vite
• Data Fetching: TanStack Query (React Query) para caching inteligente
• Charts: Recharts para visualización de datos
• State: Zustand + localStorage para persistencia
• API: CoinGecko (completamente gratuita)
• Deploy: Netlify

📈 Lo que aprendí:
• Gestión eficiente de cache y refetch con React Query
• Optimización de renderizado para grandes listas (virtualization podría ser siguiente paso)
• Integración y customización de librerías de gráficos
• Manejo de rate limits de APIs públicas
• Diseño de UX para visualización de datos financieros

🎓 Aprendizajes técnicos clave:
La API de CoinGecko ofrece 50 requests/minuto en su tier gratuito. Implementé una estrategia de caching agresiva (5 min staleTime) que hace el app super fluida sin desperdiciar requests.

React Query fue game-changer: manejo automático de loading states, error handling, cache invalidation y background refetching. Redujo el código boilerplate en un 70%.

🔗 Demo en vivo: [TU_URL].netlify.app
💻 Código completo: github.com/tu-usuario/crypto-tracker

El proyecto está 100% open source. Si te interesa data visualization o fintech, el código está bien documentado.

¿Qué otra fuente de datos públicos sería interesante visualizar? 💭

#React #TypeScript #DataVisualization #Cryptocurrency #WebDevelopment #OpenSource #Frontend #TanStackQuery
```

---

---

# 🚀 PROYECTO 3: Kanban Board - "TaskFlow"

## 📝 Concepto del Proyecto

**Nombre:** TaskFlow  
**Tagline:** "Gestión de proyectos simplificada"  
**Problema:** Equipos pagan $10-20/usuario/mes por Trello, Asana o Linear  
**Solución:** Kanban board full-stack con autenticación y drag & drop

**Valor del Proyecto para Portfolio:**
- Proyecto Full-Stack completo (frontend + backend + DB)
- Sistema de autenticación JWT
- CRUD complejo con relaciones
- Drag & Drop avanzado
- Deploy de múltiples servicios

---

## 🏗️ STACK TECNOLÓGICO (100% Gratuito)

**Frontend:** React + Vite + TypeScript + Tailwind CSS  
**Backend:** Node.js + Express + TypeScript  
**ORM:** Prisma  
**Base de Datos:** PostgreSQL (Supabase free tier)  
**Auth:** JWT + bcrypt  
**Drag & Drop:** React Beautiful DnD  
**Deploy:**  
- Frontend: Vercel  
- Backend: Render  
- DB: Supabase

---

## 📂 ESTRUCTURA DE PROYECTO (Monorepo Recomendado)

```
taskflow/
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/        # API client, auth utils
│   │   ├── context/    # Auth context
│   │   └── types/
│   └── package.json
│
├── server/              # Backend Node.js
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── types/
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
└── README.md           # Documentación global
```

---

## 🗄️ DISEÑO DE BASE DE DATOS

**Modelo de Datos (Prisma Schema):**

```
User (id, email, name, password, createdAt)
  └─ 1:N → Board (id, title, description, color, userId)
              └─ 1:N → Column (id, title, position, boardId)
                          └─ 1:N → Task (id, title, description, priority, position, dueDate, columnId, userId)
```

**Relaciones:**
- User tiene muchos Boards
- Board tiene muchas Columns
- Column tiene muchas Tasks
- Task pertenece a un User (creador)
- Cascade deletes: Si eliminas Board, se eliminan Columns y Tasks

---

## 🔧 PROCESO DE DESARROLLO DETALLADO

### **DÍA 1-2: Setup Backend y Base de Datos**

**Tarea 1.1: Inicializar Backend (1 hora)**
- Crear carpeta `server/`
- `npm init -y`
- Instalar dependencias:
  - Express, cors, dotenv
  - @prisma/client, prisma (dev)
  - jsonwebtoken, bcryptjs, @types/...
  - TypeScript, ts-node-dev
- Configurar TypeScript (`tsconfig.json`)
- Configurar scripts en `package.json`:
  - `dev`: ts-node-dev
  - `build`: tsc
  - `start`: node dist/server.js

**Tarea 1.2: Configurar Prisma y DB (1.5 horas)**
- `npx prisma init`
- Crear cuenta en Supabase
- Crear proyecto y obtener connection string
- Configurar `.env` con DATABASE_URL
- Diseñar schema completo en `prisma/schema.prisma`
- Ejecutar `npx prisma migrate dev --name init`
- Verificar tablas en Supabase Dashboard
- Generar Prisma Client: `npx prisma generate`

**Tarea 1.3: Estructura de Carpetas Backend (30 min)**
- Crear todas las carpetas: controllers, middleware, routes, services, utils
- Crear archivos base vacíos para organización

**Tarea 1.4: Utilidades JWT y Bcrypt (1 hora)**

Crear `server/src/utils/jwt.ts`:
- `generateToken(payload)`: Genera JWT con expiración 7d
- `verifyToken(token)`: Verifica y decodifica token
- Tipos TypeScript para payload

Crear `server/src/utils/hash.ts`:
- `hashPassword(password)`: Hash con bcrypt (10 rounds)
- `comparePassword(plain, hashed)`: Compara contraseñas

**Tarea 1.5: Validaciones Zod (45 min)**

Crear `server/src/utils/validation.ts`:
- `registerSchema`: email, name (min 2 chars), password (min 6 chars)
- `loginSchema`: email, password
- `boardSchema`: title (required), description (optional), color
- `columnSchema`: title, position
- `taskSchema`: title, description, priority enum, dueDate

**Entregable Día 1-2:** Backend estructurado, DB configurada, utils listos

---

### **DÍA 3-4: Controllers, Services y Rutas**

**Tarea 3.1: Auth Service (2 horas)**

Crear `server/src/services/authService.ts`:

Función `register()`:
- Validar datos con Zod
- Verificar si email ya existe (Prisma)
- Hash de contraseña
- Crear usuario en DB
- Generar JWT
- Retornar user (sin password) + token

Función `login()`:
- Validar datos
- Buscar usuario por email
- Comparar contraseñas
- Si es válido, generar JWT
- Retornar user + token

Función `getUserById()`:
- Buscar usuario por ID
- Retornar datos sin password

**Tarea 3.2: Auth Controller (1 hora)**

Crear `server/src/controllers/authController.ts`:

Endpoints:
- `POST /register`: Llama a authService.register()
- `POST /login`: Llama a authService.login()
- `GET /profile`: Llama a authService.getUserById() (requiere auth)

Manejo de errores:
- Try/catch en cada handler
- Retornar status codes apropiados (201, 200, 400, 401, 500)
- Formato de respuesta consistente: `{ success, message, data }`

**Tarea 3.3: Middleware de Autenticación (1 hora)**

Crear `server/src/middleware/auth.ts`:

Función `authMiddleware`:
- Extraer token del header `Authorization: Bearer <token>`
- Verificar token con `verifyToken()`
- Si es válido, adjuntar user al request: `req.user = decoded`
- Si no, retornar 401 Unauthorized
- Tipos TypeScript: extend Express Request con property `user`

**Tarea 3.4: Board Service (2 horas)**

Crear `server/src/services/boardService.ts`:

Funciones:
- `getBoards(userId)`: Todos los boards del user, con columns y tasks incluidos
- `getBoardById(boardId, userId)`: Un board específico (verificar ownership)
- `createBoard(data, userId)`: Crear nuevo board
- `updateBoard(boardId, data, userId)`: Actualizar board (verificar ownership)
- `deleteBoard(boardId, userId)`: Eliminar board (verificar ownership)

**Tarea 3.5: Board Controller (1 hora)**

Crear `server/src/controllers/boardController.ts`:

Endpoints (todos requieren auth):
- `GET /api/boards` → getBoards()
- `GET /api/boards/:id` → getBoardById()
- `POST /api/boards` → createBoard()
- `PUT /api/boards/:id` → updateBoard()
- `DELETE /api/boards/:id` → deleteBoard()

**Tarea 3.6: Column y Task Services/Controllers (3 horas)**

Repetir proceso similar para:

**Column Service:**
- `getColumns(boardId)`
- `createColumn(boardId, data)`
- `updateColumn(columnId, data)` (para cambiar título o posición)
- `deleteColumn(columnId)`

**Task Service:**
- `getTasks(columnId)`
- `getTaskById(taskId)`
- `createTask(columnId, data, userId)`
- `updateTask(taskId, data)` (cambiar título, descripción, priority, dueDate, position, columnId para mover)
- `deleteTask(taskId)`

Controllers correspondientes para cada uno.

**Tarea 3.7: Rutas Principales (1 hora)**

Crear archivos de rutas:
- `server/src/routes/authRoutes.ts`
- `server/src/routes/boardRoutes.ts`
- `server/src/routes/columnRoutes.ts`
- `server/src/routes/taskRoutes.ts`

Configurar en `server/src/app.ts`:
- Montar rutas en `/api/auth`, `/api/boards`, `/api/columns`, `/api/tasks`
- Configurar CORS para permitir frontend
- Middleware de error handling global

**Tarea 3.8: Testing con Postman/Thunder Client (2 horas)**
- Crear colección de requests
- Testear TODOS los endpoints
- Verificar autenticación funciona
- Verificar validaciones funcionan
- Verificar relaciones (cascade delete)
- Guardar ejemplos de requests

**Entregable Día 3-4:** API REST completa y funcional

---

### **DÍA 5-6: Frontend - Auth y Components**

**Tarea 5.1: Setup Frontend (1 hora)**
- Crear proyecto React con Vite + TS
- Instalar dependencias:
  - react-router-dom
  - axios
  - react-beautiful-dnd
  - react-hook-form + zod
  - react-hot-toast
  - date-fns
- Configurar Tailwind CSS
- Configurar variables de entorno (API URL)

**Tarea 5.2: Cliente API y Auth (2 horas)**

Crear `client/src/lib/api.ts`:
- Instancia de Axios con base URL
- Interceptor para agregar token a requests
- Interceptor para manejar errores (401 → logout)

Crear `client/src/lib/auth.ts`:
- `saveAuth(token, user)`: Guardar en localStorage
- `getToken()`: Obtener token
- `getUser()`: Obtener user
- `clearAuth()`: Limpiar localStorage (logout)
- `isAuthenticated()`: Verificar si hay token válido

**Tarea 5.3: Auth Context (1.5 horas)**

Crear `client/src/context/AuthContext.tsx`:
- Estado: user, token, isLoading
- Funciones: login(), register(), logout(), checkAuth()
- useEffect para verificar token al montar
- Proveer contexto a toda la app

**Tarea 5.4: Páginas de Auth (2 horas)**

Crear `client/src/pages/Login.tsx`:
- Form con react-hook-form
- Validación con Zod
- Llamar a `/api/auth/login`
- Guardar token y user en contexto
- Redirect a /dashboard

Crear `client/src/pages/Register.tsx`:
- Similar a Login pero con campo "name"
- Llamar a `/api/auth/register`

Crear componente `ProtectedRoute`:
- Verificar autenticación
- Si no está autenticado, redirect a /login

**Tarea 5.5: Hooks Personalizados (2 horas)**

Crear `client/src/hooks/useBoards.ts`:
- `useQuery` para obtener boards
- `useMutation` para crear, actualizar, eliminar
- Invalidar cache después de mutaciones

Crear `client/src/hooks/useTasks.ts`:
- Similar para tareas

**Tarea 5.6: Componentes del Board (4 horas)**

Crear `client/src/components/board/Board.tsx`:
- Container principal del board
- Integrar React Beautiful DnD (DragDropContext)
- Manejar onDragEnd:
  - Si se mueve dentro de misma columna: reordenar position
  - Si se mueve a otra columna: cambiar columnId y position
  - Llamar a API para actualizar

Crear `client/src/components/board/Column.tsx`:
- Droppable de react-beautiful-dnd
- Header con título de columna
- Lista de TaskCards
- Botón "Add task"

Crear `client/src/components/board/TaskCard.tsx`:
- Draggable de react-beautiful-dnd
- Mostrar: título, priority badge, due date
- Click para abrir modal de detalle
- Botón de eliminar

Crear `client/src/components/task/TaskModal.tsx`:
- Modal para crear/editar tarea
- Form completo con todos los campos
- Selector de priority
- Date picker para dueDate

**Entregable Día 5-6:** Frontend funcional con auth y drag & drop

---

### **DÍA 7: Dashboard, Pulido y Deploy**

**Tarea 7.1: Página Dashboard (2 horas)**

Crear `client/src/pages/Dashboard.tsx`:
- Lista de todos los boards del user
- Cards clickables para cada board
- Botón "Create new board"
- Modal para crear board
- Loading y empty states

**Tarea 7.2: Página Board View (1 hora)**

Crear `client/src/pages/BoardView.tsx`:
- Obtener board por ID de URL
- Renderizar componente Board
- Breadcrumb navigation
- Botón para settings del board

**Tarea 7.3: Mejoras de UX (2 horas)**
- Toast notifications en todas las acciones
- Loading spinners en mutations
- Confirmación antes de eliminar
- Animaciones smooth en drag & drop
- Teclado shortcuts (opcional)

**Tarea 7.4: README Completo (1.5 horas)**
- Documentar arquitectura completa
- Diagramas de flujo de datos
- Instrucciones de setup para frontend Y backend
- Variables de entorno necesarias
- Scripts de prisma (migrate, generate, studio)

**Tarea 7.5: Deploy Backend (1 hora)**
- Push servidor a GitHub
- Conectar Render con repo
- Configurar build command
- Agregar variables de entorno
- Verificar que Prisma funciona en producción

**Tarea 7.6: Deploy Frontend (30 min)**
- Push frontend a GitHub
- Conectar Vercel
- Agregar variable de entorno API_URL (apuntar a Render)
- Deploy y verificar

**Tarea 7.7: Testing E2E (1 hora)**
- Registro de nuevo usuario
- Login
- Crear board
- Crear columnas
- Crear tareas
- Drag & drop entre columnas
- Editar y eliminar tareas
- Logout

**Entregable Día 7:** Aplicación full-stack desplegada y funcional

---

## 📱 MENSAJE PARA LINKEDIN

```
🎯 [NUEVO PROYECTO] TaskFlow: Kanban Board Full-Stack con Drag & Drop

Acabo de lanzar TaskFlow, un sistema completo de gestión de proyectos tipo Trello, construido desde cero con autenticación, base de datos y funcionalidad de drag & drop.

💡 La motivación:
Las herramientas de gestión de proyectos pueden costar $10-20 por usuario al mes. Quise construir una alternativa open source que demuestre cómo crear un producto SaaS completo sin gastar dinero en infraestructura.

⚡ Características principales:
✅ Sistema completo de autenticación (JWT)
✅ CRUD de boards, columnas y tareas
✅ Drag & drop fluido entre columnas
✅ Prioridades, fechas límite y descripciones
✅ Responsive design (funciona en móvil)
✅ Arquitectura escalable y bien estructurada

🛠️ Stack técnico:

Backend:
• Node.js + Express + TypeScript
• Prisma ORM con PostgreSQL (Supabase)
• JWT para autenticación + bcrypt para seguridad
• Arquitectura en capas (controllers → services → DB)

Frontend:
• React 18 + TypeScript + Vite
• React Beautiful DnD para drag & drop
• React Hook Form + Zod para validaciones
• TanStack Query para state management
• Tailwind CSS para UI moderna

Deploy (100% gratuito):
• Backend: Render
• Frontend: Vercel
• Base de datos: Supabase

📚 Lo que aprendí construyendo esto:

Backend:
• Diseño de APIs RESTful con buenas prácticas
• Autenticación y autorización con JWT
• ORM (Prisma) y manejo de relaciones complejas
• Middleware de autenticación y validación
• Gestión de migraciones de base de datos

Frontend:
• Implementación de drag & drop performante
• Gestión de estado global con Context API
• Protected routes y flujos de autenticación
• Optimistic updates para mejor UX
• Comunicación eficiente con backend (axios interceptors)

DevOps:
• Deploy de aplicaciones Node.js en Render
• Configuración de CORS para desarrollo y producción
• Manejo de variables de entorno en diferentes entornos
• Build y optimización de aplicaciones React

🎓 Decisiones técnicas interesantes:

1. **Monorepo structure**: Mantener frontend y backend en el mismo repo facilita desarrollo pero requiere builds separados.

2. **Position-based ordering**: En lugar de timestamps para ordenar tareas, uso un campo "position" que actualizo dinámicamente. Más complejo pero permite reordenamiento perfecto.

3. **Cascade deletes**: Configuré Prisma para que al eliminar un board, automáticamente se eliminen sus columnas y tareas. Simplifica lógica pero hay que documentar bien.

🔗 Demo en vivo: [TU_URL].vercel.app
💻 Código completo: github.com/tu-usuario/taskflow

El proyecto está completamente documentado. Si te interesa full-stack development o SaaS, ¡échale un vistazo!

¿Qué feature agregarías a un gestor de tareas como este? 💭

#FullStack #NodeJS #React #TypeScript #PostgreSQL #Prisma #WebDevelopment #SaaS #OpenSource
```

---

---

# 🚀 PROYECTO 4: API REST Documentada - "URL Shortener API"

## 📝 Concepto del Proyecto

**Nombre:** Shrt.link API  
**Tagline:** "API de acortador de URLs con analíticas"  
**Problema:** Servicios como Bitly cobran por analíticas y tienen límites  
**Solución:** API REST completa, documentada con Swagger, con analíticas básicas

**Valor del Proyecto para Portfolio:**
- Demuestra habilidades puras de backend
- Diseño de API RESTful profesional
- Documentación con estándares de industria (OpenAPI/Swagger)
- Validación y seguridad
- Rate limiting y prevención de abuso

---

## 🏗️ STACK TECNOLÓGICO (100% Gratuito)

**Backend:** Node.js + Express + TypeScript  
**Base de Datos:** PostgreSQL (Supabase)  
**ORM:** Prisma  
**Documentación:** Swagger UI + OpenAPI 3.0  
**Validación:** Zod  
**Rate Limiting:** express-rate-limit  
**Deploy:** Render  
**Testing:** Jest + Supertest (opcional)

---

## 📂 ESTRUCTURA DE PROYECTO

```
url-shortener-api/
├── src/
│   ├── controllers/
│   │   ├── urlController.ts
│   │   └── analyticsController.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── rateLimit.ts
│   │   └── validateRequest.ts
│   ├── routes/
│   │   ├── urlRoutes.ts
│   │   └── analyticsRoutes.ts
│   ├── services/
│   │   ├── urlService.ts
│   │   └── analyticsService.ts
│   ├── utils/
│   │   ├── shortCodeGenerator.ts
│   │   ├── validation.ts
│   │   └── errors.ts
│   ├── types/
│   │   └── express.d.ts
│   ├── docs/
│   │   └── swagger.ts
│   ├── app.ts
│   └── server.ts
├── prisma/
│   └── schema.prisma
├── tests/
│   └── url.test.ts
├── .env.example
├── README.md
└── package.json
```

---

## 🗄️ DISEÑO DE BASE DE DATOS

**Modelo de Datos:**

```
URL (id, originalUrl, shortCode, userId, createdAt, expiresAt)
Click (id, urlId, ipAddress, userAgent, referer, country, timestamp)
User (id, apiKey, email, tier, createdAt)
```

**Índices importantes:**
- `shortCode` (unique, búsqueda rápida)
- `urlId` en Click (analíticas rápidas)
- `apiKey` en User (autenticación)

---

## 🔧 PROCESO DE DESARROLLO DETALLADO

### **DÍA 1: Setup y Base de Datos**

**Tarea 1.1: Inicializar Proyecto (45 min)**
- Crear estructura de carpetas
- Configurar TypeScript + ESLint + Prettier
- Instalar dependencias core
- Configurar scripts de desarrollo

**Tarea 1.2: Configurar Prisma (1 hora)**
- Diseñar schema completo
- Definir relaciones
- Configurar índices para performance
- Ejecutar primera migración
- Seed database con datos de ejemplo

**Tarea 1.3: Algoritmo de Short Code (1.5 horas)**

Crear `src/utils/shortCodeGenerator.ts`:

Requisitos:
- Generar códigos de 6-8 caracteres
- Usar caracteres alfanuméricos (a-z, A-Z, 0-9)
- Evitar caracteres confusos (0/O, 1/l/I)
- Verificar unicidad antes de retornar

Implementar dos estrategias:
1. **Random generation**: Rápido, puede tener colisiones
2. **Hash-based**: Usar hash del URL + timestamp, más único

Función `generateShortCode()`:
- Genera código random
- Verifica en DB si existe
- Si existe, intenta 3 veces más
- Si falla, lanza error

**Tarea 1.4: Utilidades de Validación (1 hora)**

Crear `src/utils/validation.ts`:

Schemas Zod:
- `createUrlSchema`: originalUrl (valid URL), customCode (optional), expiresAt (optional)
- `updateUrlSchema`: Para actualizar URLs
- Validador de URL personalizado (verifica formato y dominio válido)

**Entregable Día 1:** Base de datos y utilidades core listas

---

### **DÍA 2-3: Core API - URL Service**

**Tarea 2.1: URL Service (3 horas)**

Crear `src/services/urlService.ts`:

**Función `createShortUrl()`:**
- Validar URL original
- Verificar si ya existe (opcional: retornar existente)
- Si se provee customCode, verificar disponibilidad
- Si no, generar código automáticamente
- Crear registro en DB
- Retornar datos del URL creado

**Función `getOriginalUrl(shortCode)`:**
- Buscar en DB por shortCode
- Verificar si expiró (comparar expiresAt con fecha actual)
- Incrementar contador de clicks (opcional aquí o en controller)
- Retornar originalUrl

**Función `getUserUrls(userId)`:**
- Obtener todos los URLs del usuario
- Incluir estadísticas básicas (total clicks)
- Paginar resultados

**Función `updateUrl()`:**
- Actualizar URL (permitir cambiar originalUrl, expiresAt)
- Verificar ownership

**Función `deleteUrl()`:**
- Eliminar URL (soft delete recomendado)
- Verificar ownership

**Tarea 2.2: URL Controller (2 horas)**

Crear `src/controllers/urlController.ts`:

**Endpoints:**

`POST /api/urls`:
- Body: { originalUrl, customCode?, expiresAt? }
- Llamar a urlService.createShortUrl()
- Retornar: { shortUrl, shortCode, originalUrl, createdAt, expiresAt }

`GET /api/urls/:shortCode`:
- Llamar a urlService.getOriginalUrl()
- Retornar solo originalUrl (este endpoint es para el redirect)

`GET /api/urls/user/me`:
- Requiere auth
- Llamar a urlService.getUserUrls()
- Retornar lista con analíticas

`PATCH /api/urls/:shortCode`:
- Requiere auth + ownership
- Actualizar URL

`DELETE /api/urls/:shortCode`:
- Requiere auth + ownership
- Eliminar URL

**Tarea 2.3: Redirect Endpoint (30 min)**

`GET /:shortCode`:
- Este es el endpoint principal de redirect
- Buscar URL en DB
- Registrar click (IP, userAgent, referer)
- Hacer redirect 301 a originalUrl

**Entregable Día 2-3:** CRUD completo de URLs funcional

---

### **DÍA 4: Analytics y API Keys**

**Tarea 4.1: Analytics Service (2 horas)**

Crear `src/services/analyticsService.ts`:

**Función `trackClick()`:**
- Recibe: shortCode, request metadata
- Extraer: IP, userAgent, referer
- Opcional: usar API de geolocalización (ip-api.com gratis)
- Crear registro en tabla Click
- Esta función se llama en cada redirect

**Función `getUrlAnalytics(shortCode)`:**
- Total clicks
- Clicks por día (últimos 30 días)
- Top referers
- Distribución por país (si se implementó)
- Browser/Device stats (parsear userAgent)

**Función `getUserAnalytics(userId)`:**
- Total URLs creados
- Total clicks across todos los URLs
- Top performing URLs

**Tarea 4.2: Analytics Controller (1 hora)**

Crear `src/controllers/analyticsController.ts`:

Endpoints:
- `GET /api/analytics/:shortCode` (requiere auth + ownership)
- `GET /api/analytics/user/me` (requiere auth)

**Tarea 4.3: Sistema de API Keys (2 horas)**

**Middleware de API Key:**

Crear `src/middleware/apiKeyAuth.ts`:
- Extraer API key de header `X-API-Key`
- Buscar user en DB por apiKey
- Si válido, adjuntar user a request
- Si no, retornar 401

**Generar API Keys:**

Crear endpoint `POST /api/auth/generate-key`:
- Requiere registro previo (email + password)
- Generar key random (UUID v4)
- Guardar hash en DB
- Retornar key (solo se muestra una vez)

**Tarea 4.4: Rate Limiting (1 hora)**

Crear `src/middleware/rateLimit.ts`:

Configurar diferentes límites:
- Free tier: 100 requests/hora
- Pro tier: 1000 requests/hora
- Unlimited para desarrollo

Usar `express-rate-limit`:
- Store en memoria (para producción: Redis)
- Mensaje customizado cuando se alcanza límite
- Headers con info de límite

**Entregable Día 4:** Analytics completo y sistema de autenticación

---

### **DÍA 5-6: Documentación con Swagger**

**Tarea 5.1: Configurar Swagger (1 hora)**

Instalar:
- `swagger-ui-express`
- `swagger-jsdoc`

Crear `src/docs/swagger.ts`:
- Configuración básica de OpenAPI 3.0
- Información del API (título, versión, descripción)
- Servers (localhost, producción)
- Components: securitySchemes (API Key)

**Tarea 5.2: Documentar Endpoints (4 horas)**

Para CADA endpoint, agregar comentarios JSDoc con:

Ejemplo:
```typescript
/**
 * @swagger
 * /api/urls:
 *   post:
 *     summary: Crear URL acortada
 *     tags: [URLs]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - originalUrl
 *             properties:
 *               originalUrl:
 *                 type: string
 *                 format: uri
 *                 example: https://ejemplo.com/mi-pagina-larga
 *               customCode:
 *                 type: string
 *                 minLength: 4
 *                 maxLength: 12
 *                 example: mi-link
 *               expiresAt:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: URL creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Url'
 *       400:
 *         description: Datos inválidos
 *       429:
 *         description: Rate limit excedido
 */
```

Documentar:
- Todos los endpoints
- Todos los parámetros (path, query, body)
- Todas las respuestas posibles
- Ejemplos de requests y responses
- Códigos de error

**Tarea 5.3: Schemas Reutilizables (1 hora)**

Definir en `components/schemas`:
- `Url`: Estructura completa de un URL
- `Click`: Estructura de un click
- `Analytics`: Estructura de analytics
- `Error`: Estructura de errores

**Tarea 5.4: Montar Swagger UI (30 min)**

En `app.ts`:
- Montar `/api-docs` con Swagger UI
- Configurar opciones visuales
- Agregar logo personalizado (opcional)

**Entregable Día 5-6:** Documentación completa y profesional accesible en /api-docs

---

### **DÍA 7: Testing, README y Deploy**

**Tarea 7.1: Tests Básicos (3 horas - opcional)**

Crear `tests/url.test.ts`:

Tests a implementar:
- POST /api/urls: Crear URL correctamente
- POST /api/urls: Rechazar URL inválido
- POST /api/urls: Crear con customCode
- POST /api/urls: Rechazar customCode duplicado
- GET /:shortCode: Redirect correctamente
- GET /:shortCode: Retornar 404 si no existe
- GET /api/analytics/:shortCode: Retornar stats
- Rate limiting: Verificar que se aplica

**Tarea 7.2: README Completo (2 horas)**

Secciones específicas para API:

**Autenticación:**
- Cómo obtener API key
- Cómo incluir key en requests
- Diferentes tiers y límites

**Endpoints:**
- Tabla con método, ruta, descripción
- Link a Swagger docs para detalles

**Ejemplos de Uso:**
- Código en diferentes lenguajes:
  - cURL
  - JavaScript (fetch)
  - Python (requests)
  - PHP (cURL)

**Rate Limits:**
- Tabla de límites por tier
- Cómo monitorear uso (headers)

**Casos de Uso:**
- Marketing campaigns
- Social media managers
- Developers building apps

**Tarea 7.3: Deploy en Render (1 hora)**
- Build del proyecto
- Configurar variables de entorno
- Ejecutar migraciones en producción
- Verificar Swagger accesible públicamente

**Tarea 7.4: Postman Collection (30 min)**
- Exportar colección con todos los endpoints
- Incluir ejemplos de requests
- Agregar al README link a colección

**Entregable Día 7:** API desplegada, documentada y lista para usar

---

## 📱 MENSAJE PARA LINKEDIN

```
🔗 [NUEVO PROYECTO] Shrt.link API: Acortador de URLs con Analíticas

Acabo de lanzar una API REST completa de acortador de URLs con sistema de analíticas, documentación profesional con Swagger y sistema de API keys.

🎯 El concepto:
Servicios como Bitly cobran desde $29/mes por features básicas. Quise demostrar cómo construir una alternativa robusta y bien documentada usando solo herramientas open source.

⚡ Características de la API:
✅ Acortamiento de URLs con códigos personalizados
✅ Sistema de analíticas (clicks, referers, geolocalización)
✅ Autenticación con API keys y rate limiting
✅ URLs con expiración automática
✅ Documentación interactiva con Swagger/OpenAPI
✅ Endpoints RESTful siguiendo mejores prácticas

🛠️ Stack técnico:
• Backend: Node.js + Express + TypeScript
• Base de datos: PostgreSQL (Supabase) + Prisma ORM
• Documentación: Swagger UI + OpenAPI 3.0 Specification
• Seguridad: Rate limiting, validación exhaustiva con Zod
• Deploy: Render (con auto-deploy desde GitHub)

📚 Lo que aprendí:

Diseño de APIs:
• Convenciones RESTful (recursos, verbos HTTP, status codes)
• Versionado de API (preparar para v2)
• Paginación y filtrado eficiente
• Rate limiting por tiers de usuario
• Manejo de errores consistente

Documentación:
• OpenAPI 3.0 specification
• JSDoc annotations para auto-generación
• Swagger UI para testing interactivo
• Ejemplos claros en múltiples lenguajes

Seguridad:
• API keys con hashing
• Validación de inputs (prevenir XSS, SQL injection)
• Rate limiting para prevenir abuso
• Sanitización de URLs para evitar phishing

Performance:
• Índices en base de datos para búsquedas rápidas
• Pooling de conexiones
• Caching estratégico (para implementar: Redis)

🎓 Decisión técnica interesante:

Implementé un algoritmo de generación de short codes que balancea unicidad y legibilidad. Excluye caracteres confusos (0/O, 1/l) y verifica colisiones antes de retornar. Simple pero efectivo.

La documentación con Swagger no es solo para mostrar - permite a developers probar la API directamente desde el navegador sin Postman. Game changer para onboarding.

📊 Métricas del proyecto:
• 12 endpoints documentados
• 100% cobertura de casos de error
• < 100ms respuesta promedio
• Swagger docs con 15+ ejemplos interactivos

🔗 API en vivo: [TU_URL].onrender.com
📖 Documentación: [TU_URL].onrender.com/api-docs
💻 Código: github.com/tu-usuario/url-shortener-api
📦 Postman Collection: [LINK]

El código está completamente documentado y listo para extender. Próximas features planeadas: webhooks para notificaciones, QR code generation, y custom domains.

¿Qué otras features esperarías de un servicio de URL shortening? 💭

#Backend #NodeJS #API #TypeScript #Swagger #OpenAPI #PostgreSQL #WebDevelopment #OpenSource
```

---

---

# 🚀 PROYECTO 5: E-commerce "Headless" - "TechStore"

## 📝 Concepto del Proyecto

**Nombre:** TechStore  
**Tagline:** "E-commerce moderno de tecnología"  
**Problema:** E-commerces tradicionales son lentos y difíciles de mantener  
**Solución:** Arquitectura headless con CMS, carrito funcional y checkout simulado

**Valor del Proyecto para Portfolio:**
- Arquitectura headless moderna (frontend desacoplado de backend)
- Integración con CMS headless (Sanity.io)
- Gestión de estado complejo (carrito, checkout)
- Integración de pagos (Stripe en modo test)
- SEO optimization con Next.js SSR
- UI/UX de e-commerce profesional

---

## 🏗️ STACK TECNOLÓGICO (100% Gratuito)

**Frontend:** Next.js 14 (App Router) + TypeScript  
**CMS:** Sanity.io (tier gratuito: 3 users, 10GB assets)  
**Styling:** Tailwind CSS + Shadcn/ui  
**Pagos:** Stripe (modo test)  
**State:** Zustand + localStorage  
**Imágenes:** Sanity CDN (optimización automática)  
**Deploy:** Vercel  
**Email:** Resend (tier gratuito: 3000 emails/mes) para confirmaciones

---

## 📂 ESTRUCTURA DE PROYECTO

```
techstore/
├── sanity/              # CMS Sanity Studio
│   ├── schemas/
│   │   ├── product.ts
│   │   ├── category.ts
│   │   └── order.ts
│   ├── sanity.config.ts
│   └── package.json
│
├── src/               # Next.js App
│   ├── app/
│   │   ├── (shop)/          # Rutas públicas
│   │   │   ├── page.tsx     # Home
│   │   │   ├── products/
│   │   │   ├── cart/
│   │   │   └── checkout/
│   │   ├── api/
│   │   │   ├── stripe/
│   │   │   └── sanity/
│   │   └── studio/          # Sanity Studio embebido
│   ├── components/
│   │   ├── product/
│   │   ├── cart/
│   │   ├── checkout/
│   │   └── ui/
│   ├── lib/
│   │   ├── sanity.ts        # Cliente Sanity
│   │   ├── stripe.ts        # Cliente Stripe
│   │   └── queries.ts       # GROQ queries
│   ├── store/
│   │   └── useCartStore.ts  # Zustand cart
│   └── types/
│       └── product.ts
└── README.md
```

---

## 🗄️ MODELO DE DATOS (Sanity CMS)

**Schemas principales:**

**Product:**
- name (string, required)
- slug (slug, required, único)
- price (number, required)
- description (text)
- images (array de imágenes)
- category (reference a Category)
- stock (number)
- featured (boolean)
- specs (array de key-value pairs)
- createdAt (datetime)

**Category:**
- name (string)
- slug (slug)
- description (text)
- image (image)

**Order:**
- orderNumber (string, auto-generated)
- customerEmail (string)
- items (array de product references con quantity)
- total (number)
- status (string: pending, paid, shipped, completed)
- stripeSessionId (string)
- createdAt (datetime)

---

## 🔧 PROCESO DE DESARROLLO DETALLADO

### **DÍA 1: Setup y Sanity CMS**

**Tarea 1.1: Crear Proyectos (1 hora)**

Paso 1: Crear proyecto Next.js
```bash
npx create-next-app@latest techstore --typescript --tailwind --app
```

Paso 2: Crear proyecto Sanity
```bash
cd techstore
npm create sanity@latest -- --template clean --create-project "TechStore CMS" --dataset production
```

Esto crea carpeta `sanity/` con Sanity Studio.

**Tarea 1.2: Configurar Sanity Schemas (2 horas)**

Crear `sanity/schemas/product.ts`:
- Definir todos los campos del producto
- Configurar validaciones (price > 0, stock >= 0)
- Preview configuration (mostrar nombre e imagen)

Crear `sanity/schemas/category.ts`:
- Campos de categoría
- Slug auto-generado desde nombre

Crear `sanity/schemas/order.ts`:
- Campos de orden
- orderNumber auto-generado (ej: ORD-20240120-001)

Registrar schemas en `sanity.config.ts`

**Tarea 1.3: Agregar Contenido en Sanity (1.5 horas)**

- Correr Sanity Studio: `cd sanity && npm run dev`
- Acceder a localhost:3333
- Crear 5-6 categorías (Laptops, Smartphones, Tablets, Accesorios, etc.)
- Crear 20-30 productos con:
  - Imágenes reales (usar Unsplash)
  - Precios realistas
  - Descripciones completas
  - Specs detallados
- Marcar 6 productos como "featured"

**Tarea 1.4: Cliente de Sanity (45 min)**

Instalar:
```bash
npm install @sanity/client @sanity/image-url next-sanity
```

Crear `src/lib/sanity.ts`:
- Configurar cliente de Sanity
- Exportar funciones helpers:
  - `client`: Cliente configurado
  - `urlFor(image)`: Helper para URLs de imágenes
  - Configurar CDN y preview modes

**Entregable Día 1:** Sanity CMS configurado y poblado con productos

---

### **DÍA 2-3: Queries y Páginas de Productos**

**Tarea 2.1: GROQ Queries (2 horas)**

Crear `src/lib/queries.ts`:

**getAllProducts:**
```groq
*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  slug,
  price,
  "imageUrl": images[0].asset->url,
  category->{name, slug}
}
```

**getProductBySlug:**
```groq
*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  price,
  description,
  images,
  stock,
  specs,
  category->{name, slug}
}
```

**getFeaturedProducts, getProductsByCategory, searchProducts**

Crear funciones TypeScript que ejecuten estas queries

**Tarea 2.2: Tipos TypeScript (45 min)**

Crear `src/types/product.ts`:
- Interface Product (completa con todos los campos)
- Interface Category
- Interface CartItem (Product + quantity)
- Interface Order

**Tarea 2.3: Componentes de Producto (3 horas)**

Crear `src/components/product/ProductCard.tsx`:
- Imagen del producto (optimizada con next/image + Sanity CDN)
- Nombre y precio
- Badge de categoría
- Badge si stock < 5 ("Pocas unidades")
- Botón "Add to Cart"
- Hover effects profesionales

Crear `src/components/product/ProductGrid.tsx`:
- Grid responsive (1 col móvil, 3-4 desktop)
- Loading state con skeletons
- Empty state

Crear `src/components/product/ProductDetail.tsx`:
- Gallery de imágenes (con thumbnails)
- Información completa
- Selector de cantidad
- Botón "Add to Cart" grande
- Tabla de especificaciones
- Relacionados (misma categoría)

**Tarea 2.4: Páginas de Productos (2 horas)**

Crear `src/app/(shop)/page.tsx` (Home):
- Hero section con llamado a acción
- Sección "Featured Products"
- Sección "All Products" con paginación
- Categories sidebar/filter

Crear `src/app/(shop)/products/[slug]/page.tsx`:
- Obtener producto por slug en server component
- Renderizar ProductDetail
- Metadata dinámica para SEO
- Breadcrumbs
- generateStaticParams para SSG

Crear `src/app/(shop)/products/category/[slug]/page.tsx`:
- Filtrar productos por categoría
- Similar a home pero filtrado

**Entregable Día 2-3:** Catálogo de productos completo y navegable

---

### **DÍA 4: Carrito de Compras**

**Tarea 4.1: Zustand Store del Carrito (2 horas)**

Crear `src/store/useCartStore.ts`:

Estado:
- `items`: CartItem[] (producto + quantity)
- `isOpen`: boolean (para drawer del carrito)

Acciones:
- `addItem(product, quantity)`: Agregar o incrementar
- `removeItem(productId)`: Eliminar completamente
- `updateQuantity(productId, quantity)`: Cambiar cantidad
- `clearCart()`: Vaciar carrito
- `toggleCart()`: Abrir/cerrar drawer

Getters (selectores):
- `totalItems`: Total de items (suma de quantities)
- `subtotal`: Suma de price * quantity
- `total`: Subtotal + impuestos/envío

Persistencia:
- Usar Zustand persist middleware
- Guardar en localStorage
- Hidratación en cliente

**Tarea 4.2: Componentes del Carrito (3 horas)**

Crear `src/components/cart/CartButton.tsx`:
- Botón en header con badge (totalItems)
- Click abre CartDrawer

Crear `src/components/cart/CartDrawer.tsx`:
- Drawer lateral (Headless UI o Radix)
- Lista de items en el carrito
- Botones +/- para cantidad
- Botón eliminar item
- Subtotal y total
- Botón "Proceed to Checkout"
- Empty state

Crear `src/components/cart/CartItem.tsx`:
- Card con imagen miniatura
- Nombre y precio
- Controles de cantidad
- Botón eliminar
- Subtotal del item

**Tarea 4.3: Página del Carrito (1.5 horas)**

Crear `src/app/(shop)/cart/page.tsx`:
- Versión completa del carrito (no drawer)
- Tabla con todos los productos
- Resumen del pedido en sidebar
- Campo para código de descuento (UI, no funcional)
- Botón "Proceed to Checkout"
- Recomendaciones de productos

**Entregable Día 4:** Sistema de carrito completamente funcional

---

### **DÍA 5-6: Checkout y Stripe**

**Tarea 5.1: Configurar Stripe (1 hora)**

- Crear cuenta en Stripe (https://stripe.com)
- Obtener API keys (test mode)
- Instalar `stripe` y `@stripe/stripe-js`
- Crear `.env.local` con keys

Crear `src/lib/stripe.ts`:
- Cliente de Stripe (server-side)
- Helper para crear Checkout Sessions

**Tarea 5.2: Página de Checkout (2 horas)**

Crear `src/app/(shop)/checkout/page.tsx`:

Secciones:
1. **Información del Cliente:**
   - Form con: nombre, email, teléfono
   - Validación con React Hook Form + Zod

2. **Dirección de Envío:**
   - Calle, ciudad, código postal, país

3. **Método de Pago:**
   - Solo mostrar "Stripe Checkout" (delegas a Stripe)
   - Opcional: radio buttons para métodos futuros

4. **Resumen del Pedido:**
   - Lista de productos del carrito
   - Subtotal, envío, impuestos, total

5. **Botón "Place Order":**
   - Valida form
   - Crea Stripe Checkout Session
   - Redirect a Stripe Checkout

**Tarea 5.3: API Route de Stripe Checkout (2 horas)**

Crear `src/app/api/stripe/checkout/route.ts`:

Flujo:
1. Recibir: items del carrito, email del cliente
2. Validar items (verificar que existen en Sanity)
3. Crear line_items para Stripe
4. Crear Checkout Session con:
   - mode: 'payment'
   - success_url: /checkout/success?session_id={CHECKOUT_SESSION_ID}
   - cancel_url: /checkout
   - customer_email
   - metadata: orderData JSON
5. Retornar sessionId al frontend
6. Frontend redirect a Stripe Checkout URL

**Tarea 5.4: Páginas Post-Checkout (2 horas)**

Crear `src/app/(shop)/checkout/success/page.tsx`:
- Obtener session_id de URL
- Llamar a Stripe para verificar payment
- Si es exitoso:
  - Crear orden en Sanity
  - Limpiar carrito
  - Mostrar "Thank you" message
  - Número de orden
  - Enviar email de confirmación (opcional)

Crear `src/app/(shop)/checkout/cancel/page.tsx`:
- Mensaje "Payment was cancelled"
- Botón para volver al checkout

**Tarea 5.5: Webhook de Stripe (2 horas - opcional pero recomendado)**

Crear `src/app/api/stripe/webhook/route.ts`:
- Recibir eventos de Stripe
- Verificar firma del webhook
- En evento `checkout.session.completed`:
  - Crear orden en Sanity
  - Enviar email de confirmación
  - Actualizar stock de productos

Configurar webhook en Stripe Dashboard

**Entregable Día 5-6:** Checkout funcional con Stripe integrado

---

### **DÍA 7: Pulido, SEO y Deploy**

**Tarea 7.1: SEO Optimization (2 horas)**

Para cada página:
- Metadata dinámica (title, description, OG tags)
- Structured data (JSON-LD para productos)
- Sitemap.xml generado dinámicamente
- robots.txt

Crear `src/app/sitemap.ts`:
- Generar sitemap con todos los productos
- Incluir prioridades y frecuencia de cambio

**Tarea 7.2: Mejoras de UX (2 horas)**
- Loading states en todas las acciones
- Toast notifications
- Animaciones smooth en carrito
- Breadcrumbs en todas las páginas
- 404 page personalizada

**Tarea 7.3: Responsive Final (1 hora)**
- Verificar todo funciona en móvil
- Menú hamburguesa
- Cart drawer responsive
- Checkout form en móvil

**Tarea 7.4: Performance (1 hora)**
- Optimizar imágenes (todas vía Sanity CDN)
- Implementar ISR (revalidate cada hora)
- Lazy loading de componentes pesados
- Analizar con Lighthouse

**Tarea 7.5: README Completo (1.5 horas)**
- Documentar arquitectura headless
- Explicar por qué Sanity + Next.js
- Instrucciones para setup de Sanity
- Instrucciones para setup de Stripe
- Variables de entorno necesarias
- Screenshots del CMS

**Tarea 7.6: Deploy (1 hora)**

Frontend (Vercel):
- Push a GitHub
- Conectar Vercel
- Agregar environment variables:
  - NEXT_PUBLIC_SANITY_PROJECT_ID
  - NEXT_PUBLIC_SANITY_DATASET
  - STRIPE_PUBLIC_KEY
  - STRIPE_SECRET_KEY
  - STRIPE_WEBHOOK_SECRET

Sanity Studio:
- Deploy con `sanity deploy`
- Configurar CORS en Sanity
- Agregar dominio de Vercel a allowed origins

**Tarea 7.7: Testing Final (1 hora)**
- Flujo completo: browse → add to cart → checkout → success
- Probar en diferentes browsers
- Probar checkout con tarjetas de test de Stripe
- Verificar emails se envían (si implementaste)

**Entregable Día 7:** E-commerce completo, optimizado y desplegado

---

## 📱 MENSAJE PARA LINKEDIN

```
🛒 [NUEVO PROYECTO] TechStore: E-commerce Headless Moderno

Acabo de lanzar TechStore, un e-commerce completo de tecnología construido con arquitectura headless, CMS, carrito funcional y checkout real con Stripe.

💡 ¿Por qué arquitectura headless?

Los e-commerces tradicionales (Wordpress + WooCommerce, Shopify básico) son monolitos lentos. La arquitectura headless separa el frontend del CMS, permitiendo:
• Performance superior (SSG + ISR)
• Flexibilidad total en el frontend
• Mejor experiencia de desarrollador
• Escalabilidad independiente

⚡ Características implementadas:
✅ Catálogo completo con 30+ productos
✅ Búsqueda y filtrado por categorías
✅ Carrito de compras (persistido en localStorage)
✅ Checkout funcional con Stripe
✅ CMS headless (Sanity) para gestión de productos
✅ Optimización SEO (metadata dinámica, structured data)
✅ Responsive design completo
✅ Confirmación de pedidos por email

🛠️ Stack tecnológico:

Frontend:
• Next.js 14 (App Router) + TypeScript
• Server-Side Rendering (SSR) y Static Site Generation (SSG)
• Tailwind CSS + Shadcn/ui para UI profesional
• Zustand para state management del carrito

CMS y Contenido:
• Sanity.io como headless CMS
• GROQ queries para fetching eficiente
• Sanity CDN para optimización automática de imágenes
• Sanity Studio embebido para gestión fácil

Pagos y Backend:
• Stripe Checkout para pagos seguros
• Webhooks para confirmación de pagos
• Resend para emails transaccionales
• Next.js API Routes para integración

Deploy:
• Frontend: Vercel (con preview deployments)
• CMS: Sanity Cloud
• 100% serverless y escalable

📚 Lo que aprendí:

Arquitectura Headless:
• Separación clara entre presentación y contenido
• Ventajas de SSG + ISR para e-commerce
• Cuándo usar Server Components vs Client Components

Sanity CMS:
• Diseño de schemas para productos complejos
• GROQ queries (similar a GraphQL pero más simple)
• Content modeling para e-commerce
• Image optimization automática

Stripe Integration:
• Checkout Sessions vs Payment Intents
• Webhook handling para eventos asíncronos
• Test mode y validación de pagos
• Gestión de metadata custom

Performance y SEO:
• Implementar JSON-LD structured data para productos
• Dynamic sitemaps con Next.js
• Image optimization strategies
• ISR para balance entre freshness y performance

🎓 Decisiones técnicas interesantes:

1. **ISR vs SSR**: Usé Incremental Static Regeneration para páginas de productos (revalidate cada hora). Esto da velocidad de sitio estático con contenido actualizado.

2. **Zustand sobre Redux**: Para el carrito, Zustand es suficiente y mucho más simple. Redux sería overkill para este caso de uso.

3. **Stripe Checkout vs Custom**: Elegí Stripe Checkout en lugar de implementar UI custom porque:
   - Certificación PCI-DSS incluida
   - UI optimizada y probada
   - Soporta múltiples métodos de pago
   - Menos código que mantener

4. **Sanity sobre alternativas**: Comparado con Contentful o Strapi, Sanity tiene mejor DX, queries más flexibles (GROQ) y tier gratuito más generoso.

📊 Métricas del proyecto:
• 95+ Lighthouse Score (Performance)
• <2s Time to Interactive
• 30+ productos con imágenes optimizadas
• 100% responsive (móvil first)

🔗 Demo en vivo: [TU_URL].vercel.app
📖 Sanity Studio: [TU_URL].vercel.app/studio
💻 Código: github.com/tu-usuario/techstore

Próximas features planeadas:
• Wishlist persistida
• Comparador de productos
• Reviews y ratings
• Multi-currency support
• Admin dashboard para gestión de órdenes

El proyecto está completamente open source. Si te interesa JAMstack, e-commerce o arquitecturas modernas, ¡el código está bien comentado y documentado!

¿Qué features son must-have en un e-commerce moderno? 💭

#Ecommerce #NextJS #Headless #Sanity #Stripe #TypeScript #JAMstack #WebDevelopment #OpenSource
```

---

---

# 📊 RESUMEN EJECUTIVO Y ROADMAP

## ⏱️ Timeline Completo (35 días totales)

| Proyecto | Duración | Complejidad | Skills Demostradas |
|----------|----------|-------------|-------------------|
| 1. CodeExplainer (IA) | 7 días | Baja | API integration, IA, Serverless |
| 2. CryptoTracker (Dashboard) | 7 días | Media | Data viz, React Query, State management |
| 3. TaskFlow (Kanban) | 7 días | Alta | Full-stack, Auth, Complex CRUD |
| 4. Shrt.link (API) | 7 días | Media | Backend puro, Docs, Security |
| 5. TechStore (E-commerce) | 7 días | Alta | Headless arch, CMS, Payments |

---

## 🎯 ESTRATEGIA DE EJECUCIÓN

### Orden Recomendado de Desarrollo

**Opción A - Dificultad Creciente (Recomendado para aprendizaje):**
1. CodeExplainer (calentamiento, proyecto corto)
2. CryptoTracker (introduce visualización de datos)
3. Shrt.link API (enfoque backend)
4. TaskFlow (full-stack completo)
5. TechStore (proyecto estrella final)

**Opción B - Máximo Impacto Rápido (Recomendado para búsqueda activa de empleo):**
1. TaskFlow (proyecto full-stack más completo)
2. TechStore (e-commerce impresiona)
3. CodeExplainer (trending: IA)
4. CryptoTracker (visualización de datos)
5. Shrt.link API (especializaciónen backend)

---

## 📝 CHECKLIST POST-PROYECTO (Aplicar a TODOS)

Después de terminar cada proyecto, ANTES de publicar:

### Código y Repositorio
- [ ] Código limpio y comentado donde sea necesario
- [ ] Sin console.logs innecesarios
- [ ] Sin credenciales hardcodeadas
- [ ] `.gitignore` configurado correctamente
- [ ] `.env.example` con todas las variables necesarias
- [ ] Commits organizados con mensajes descriptivos

### Documentación
- [ ] README completo siguiendo el template
- [ ] Screenshots/GIFs en alta calidad
- [ ] Instrucciones de instalación paso a paso testeadas
- [ ] Sección "Lo que aprendí" detallada
- [ ] Licencia incluida (MIT recomendada)
- [ ] CHANGELOG.md (opcional pero profesional)

### Testing Pre-Deploy
- [ ] Funciona en Chrome, Firefox y Safari
- [ ] Responsive en móvil (probar en device real)
- [ ] No hay errores en consola
- [ ] Loading states funcionan
- [ ] Error handling adecuado
- [ ] Formularios validan correctamente

### Deploy y Configuración
- [ ] Variables de entorno configuradas en plataforma
- [ ] Deploy exitoso y verificado
- [ ] Dominio custom configurado (opcional)
- [ ] HTTPS habilitado
- [ ] OG tags para compartir en redes sociales

### LinkedIn y Promoción
- [ ] Post escrito siguiendo templates proporcionados
- [ ] Link a demo incluido y verificado que funciona
- [ ] Link a repositorio incluido
- [ ] Hashtags relevantes (#WebDev, #OpenSource, etc.)
- [ ] Publicar en mejor horario (martes-jueves, 10am-2pm)

---

## 💰 COSTOS (Spoiler: $0)

**Confirmación de que TODO es gratuito:**

| Servicio | Tier Gratuito | Límites |
|----------|--------------|---------|
| Vercel | Forever Free | 100 deployments/día |
| Netlify | Free | 100GB bandwidth/mes |
| Render | Free | 750 horas/mes |
| Supabase | Free | 500MB DB, 1GB storage |
| Sanity.io | Free | 3 users, 10GB assets |
| Stripe | Free | Modo test ilimitado |
| Google Gemini | Free | 60 requests/minuto |
| CoinGecko API | Free | 50 requests/minuto |
| GitHub | Free | Repos ilimitados |

**Inversión total: $0**  
**Inversión de tiempo: 35 días**  
**ROI: Portfolio que puede conseguirte empleo de $30K-50K+/año**

---

## 🚀 SIGUIENTES PASOS DESPUÉS DE COMPLETAR LOS 5 PROYECTOS

### 1. Pulir Portfolio Personal (3 días)
- Crear sitio web personal que showcasee los 5 proyectos
- Usar Next.js + Tailwind
- Secciones: Hero, Projects, About, Skills, Contact
- Deploy en Vercel

### 2. Optimizar LinkedIn (1 día)
- Foto profesional
- Headline optimizado: "Full-Stack Developer | React, Node.js, TypeScript"
- About section con storytelling
- Agregar los 5 proyectos a "Featured"
- Solicitar recomendaciones

### 3. Preparar GitHub Profile (1 día)
- README.md en perfil con GIF/banner
- Pinear los mejores 4 proyectos
- Verificar que READMEs están perfectos
- Agregar badges de tecnologías

### 4. Aplicar Estratégicamente (ongoing)
- No aplicar masivamente
- Investigar empresa antes de aplicar
- Customizar cada aplicación
- Mencionar proyecto relevante en cover letter
- Follow up después de 1 semana

### 5. Seguir Aprendiendo
- Contribuir a open source
- Agregar features a proyectos existentes
- Aprender testing (Jest, Playwright)
- Explorar otras tecnologías según interés

---

## 💡 TIPS FINALES Y MINDSET

### Para Maximizar Aprendizaje:
1. **No copies y pegues**: Tipea cada línea, así internalizas
2. **Rompe cosas**: Experimenta cambiando código para entender qué hace
3. **Googlea errores**: Parte esencial del desarrollo
4. **Documenta lo que aprendes**: Blog personal o notas privadas
5. **Compara con otros**: Busca proyectos similares en GitHub, ve qué hacen diferente

### Para Mantenerte Motivado:
1. **Celebra pequeños wins**: Cada feature funcional es un logro
2. **Comparte progreso**: Twitter/X threads con updates diarios
3. **No compares tu inicio con el medio de otros**: Todos empezamos desde cero
4. **Toma descansos**: 1 día off cada 6 días de trabajo
5. **Visualiza el resultado**: Imagina mostrando esto en una entrevista

### Cuando Te Atores:
1. **Lee el error completo**: No entres en pánico, el error dice qué está mal
2. **Google el error**: Probablemente alguien ya lo tuvo
3. **Revisa la documentación oficial**: Mejor fuente de verdad
4. **Stack Overflow**: Para problemas específicos
5. **ChatGPT/Claude**: Para explicaciones conceptuales
6. **Toma un break de 15 min**: A veces la solución viene al descansar

---

## 🎓 RECURSOS ADICIONALES RECOMENDADOS

### Documentación Oficial (Marcadores obligatorios):
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind: https://tailwindcss.com/docs
- Prisma: https://www.prisma.io/docs
- Node.js: https://nodejs.org/docs

### Herramientas de Desarrollo:
- VS Code Extensions:
  - ES7+ React/Redux snippets
  - Tailwind CSS IntelliSense
  - Prettier
  - Error Lens
  - GitLens
  
### Diseño e Inspiración:
- Dribbble: Para UI inspiration
- Awwwards: Para websites de calidad
- Component galleries: ui.shadcn.com, daisyui.com

### Comunidades:
- Discord de Next.js
- Reddit: r/webdev, r/reactjs
- Twitter: Sigue a @leeerob, @rauchg, @wesbos

---

## ✅ CONCLUSIÓN

Siguiendo este plan de desarrollo durante 35 días (5 semanas aprox), tendrás:

- ✅ 5 proyectos profesionales desplegados
- ✅ GitHub activo con 5 repositorios bien documentados
- ✅ Portfolio que demuestra habilidades full-stack
- ✅ Experiencia con tecnologías demandadas (React, Node.js, TS, DBs, APIs)
- ✅ Presencia profesional en LinkedIn
- ✅ Proyectos para discutir en entrevistas técnicas

**Recuerda:** La consistencia es más importante que la perfección. Es mejor terminar un proyecto al 90% y pasar al siguiente que estar 3 meses perfeccionando el primero.

**¡Mucha suerte y a construir! 🚀**

---

*Última actualización: Noviembre 2025*  
*Mantén este documento como referencia durante todo el desarrollo*

---

## 🔧 DESARROLLO PASO A PASO

### FASE 1: Setup Inicial (Día 1)

#### 1.1 Crear proyecto Next.js

```bash
npx create-next-app@latest code-explainer --typescript --tailwind --app --eslint
cd code-explainer
```

#### 1.2 Instalar dependencias necesarias

```bash
npm install @google/generative-ai
npm install zustand
npm install react-hook-form zod @hookform/resolvers
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install @monaco-editor/react  # Editor de código
npm install react-hot-toast         # Notificaciones
npm install react-syntax-highlighter @types/react-syntax-highlighter
```

#### 1.3 Configurar Shadcn/ui

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add select
npx shadcn-ui@latest add skeleton
```

#### 1.4 Configurar variables de entorno

Crear `.env.local`:
```env
GEMINI_API_KEY=tu_clave_api_aqui
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Obtener la API Key gratuita: https://makersuite.google.com/app/apikey

---

### FASE 2: Backend - API Routes (Día 2-3)

#### 2.1 Crear cliente de Gemini

**Archivo: `src/lib/gemini.ts`**

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY no está definida en las variables de entorno');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const geminiModel = genAI.getGenerativeModel({ 
  model: 'gemini-pro' 
});

export async function explainCode(
  code: string, 
  language: string
): Promise<string> {
  const prompt = `
Eres un experto en programación. Analiza el siguiente código escrito en ${language} y proporciona:

1. **Resumen:** Una explicación breve de qué hace el código (2-3 líneas).
2. **Desglose línea por línea:** Explica las partes más importantes del código.
3. **Conceptos clave:** Menciona patrones, estructuras de datos o algoritmos utilizados.
4. **Posibles mejoras:** Sugiere optimizaciones o mejores prácticas si aplica.

Código a analizar:
\`\`\`${language}
${code}
\`\`\`

Responde en español de forma clara y educativa.
`;

  try {
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error al llamar a Gemini API:', error);
    throw new Error('No se pudo generar la explicación. Intenta de nuevo.');
  }
}
```

#### 2.2 Crear validaciones con Zod

**Archivo: `src/lib/validations.ts`**

```typescript
import { z } from 'zod';

export const explainCodeSchema = z.object({
  code: z
    .string()
    .min(10, 'El código debe tener al menos 10 caracteres')
    .max(5000, 'El código no puede exceder 5000 caracteres'),
  language: z.string().min(1, 'Debes seleccionar un lenguaje'),
});

export type ExplainCodeInput = z.infer<typeof explainCodeSchema>;
```

#### 2.3 Crear endpoint principal

**Archivo: `src/app/api/explain/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { explainCode } from '@/lib/gemini';
import { explainCodeSchema } from '@/lib/validations';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    // 1. Parsear el body
    const body = await request.json();

    // 2. Validar con Zod
    const validatedData = explainCodeSchema.parse(body);

    // 3. Llamar a la API de Gemini
    const explanation = await explainCode(
      validatedData.code,
      validatedData.language
    );

    // 4. Responder con éxito
    return NextResponse.json(
      { 
        success: true, 
        explanation,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    // Manejo de errores de validación
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Datos inválidos', 
          details: error.errors 
        },
        { status: 400 }
      );
    }

    // Manejo de otros errores
    console.error('Error en /api/explain:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error interno del servidor' 
      },
      { status: 500 }
    );
  }
}

// Configuración para Edge Runtime (opcional, para mayor velocidad)
export const runtime = 'edge';
```

---

### FASE 3: Frontend - Componentes (Día 4-5)

#### 3.1 Definir tipos TypeScript

**Archivo: `src/types/index.ts`**

```typescript
export interface Language {
  value: string;
  label: string;
  icon: string;
}

export interface ExplanationResponse {
  success: boolean;
  explanation?: string;
  error?: string;
  details?: any;
  timestamp?: string;
}

export interface CodeExplanationState {
  code: string;
  language: string;
  explanation: string | null;
  isLoading: boolean;
  error: string | null;
}
```

#### 3.2 Crear constantes de lenguajes

**Archivo: `src/constants/languages.ts`**

```typescript
import { Language } from '@/types';

export const SUPPORTED_LANGUAGES: Language[] = [
  { value: 'javascript', label: 'JavaScript', icon: '🟨' },
  { value: 'typescript', label: 'TypeScript', icon: '🔷' },
  { value: 'python', label: 'Python', icon: '🐍' },
  { value: 'java', label: 'Java', icon: '☕' },
  { value: 'cpp', label: 'C++', icon: '⚙️' },
  { value: 'csharp', label: 'C#', icon: '💜' },
  { value: 'go', label: 'Go', icon: '🐹' },
  { value: 'rust', label: 'Rust', icon: '🦀' },
  { value: 'php', label: 'PHP', icon: '🐘' },
  { value: 'ruby', label: 'Ruby', icon: '💎' },
  { value: 'sql', label: 'SQL', icon: '🗃️' },
];
```

#### 3.3 Crear hook personalizado

**Archivo: `src/hooks/useCodeExplanation.ts`**

```typescript
import { useState } from 'react';
import { ExplanationResponse } from '@/types';
import toast from 'react-hot-toast';

export function useCodeExplanation() {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const explainCode = async (code: string, language: string) => {
    setIsLoading(true);
    setError(null);
    setExplanation(null);

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      const data: ExplanationResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al explicar el código');
      }

      setExplanation(data.explanation || null);
      toast.success('¡Código explicado con éxito!');
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'Error desconocido';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setExplanation(null);
    setError(null);
  };

  return {
    explanation,
    isLoading,
    error,
    explainCode,
    reset,
  };
}
```

#### 3.4 Componente Editor de Código

**Archivo: `src/components/CodeEditor.tsx`**

```typescript
'use client';

import React from 'react';
import Editor from '@monaco-editor/react';
import { Card } from './ui/card';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
  placeholder?: string;
}

export function CodeEditor({ 
  value, 
  onChange, 
  language, 
  placeholder 
}: CodeEditorProps) {
  return (
    <Card className="overflow-hidden">
      <Editor
        height="400px"
        language={language}
        value={value}
        onChange={(value) => onChange(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </Card>
  );
}
```

#### 3.5 Componente Panel de Explicación

**Archivo: `src/components/ExplanationPanel.tsx`**

```typescript
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';
import ReactMarkdown from 'react-markdown';

interface ExplanationPanelProps {
  explanation: string | null;
  isLoading: boolean;
  error: string | null;
}

export function ExplanationPanel({ 
  explanation, 
  isLoading, 
  error 
}: ExplanationPanelProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Analizando código...</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-red-500">
        <CardHeader>
          <CardTitle className="text-red-600">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!explanation) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">
            La explicación aparecerá aquí...
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Explicación del Código</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <ReactMarkdown>{explanation}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}
```

#### 3.6 Página Principal

**Archivo: `src/app/page.tsx`**

```typescript
'use client';

import { useState } from 'react';
import { CodeEditor } from '@/components/CodeEditor';
import { ExplanationPanel } from '@/components/ExplanationPanel';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SUPPORTED_LANGUAGES } from '@/constants/languages';
import { useCodeExplanation } from '@/hooks/useCodeExplanation';
import { Toaster } from 'react-hot-toast';
import { Sparkles, Github } from 'lucide-react';

export default function Home() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const { explanation, isLoading, error, explainCode, reset } = useCodeExplanation();

  const handleExplain = () => {
    if (!code.trim()) {
      return;
    }
    explainCode(code, language);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">CodeExplainer</h1>
          </div>
          <a 
            href="https://github.com/tu-usuario/code-explainer" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
          Entiende cualquier código en segundos
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Powered by Google Gemini AI. Pega tu código, selecciona el lenguaje y obtén una explicación detallada al instante.
        </p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Editor */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[200px] bg-white">
                  <SelectValue placeholder="Selecciona lenguaje" />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.icon} {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                onClick={handleExplain}
                disabled={isLoading || !code.trim()}
                className="flex-1"
              >
                {isLoading ? 'Analizando...' : 'Explicar Código'}
              </Button>

              {explanation && (
                <Button variant="outline" onClick={reset}>
                  Limpiar
                </Button>
              )}
            </div>

            <CodeEditor
              value={code}
              onChange={setCode}
              language={language}
              placeholder="Pega tu código aquí..."
            />
          </div>

          {/* Right Panel - Explanation */}
          <div>
            <ExplanationPanel 
              explanation={explanation}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-lg mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-white/50">
          <p>Hecho con ❤️ usando Next.js y Google Gemini</p>
        </div>
      </footer>
    </main>
  );
}
```

---

### FASE 4: Testing y Optimización (Día 6)

#### 4.1 Agregar rate limiting (opcional)

**Archivo: `src/lib/rate-limit.ts`**

```typescript
// Rate limiting simple usando Map (en producción usar Redis)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(ip: string, maxRequests = 10, windowMs = 60000): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (userLimit.count >= maxRequests) {
    return false;
  }

  userLimit.count++;
  return true;
}
```

Actualizar `route.ts`:

```typescript
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || 'anonymous';
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Demasiadas solicitudes. Intenta en 1 minuto.' },
      { status: 429 }
    );
  }

  // ... resto del código
}
```

---

### FASE 5: README y Documentación (Día 7)

#### 5.1 Crear README espectacular

**Archivo: `README.md`**

```markdown
# 🚀 CodeExplainer - Tu Asistente IA para Entender Código

![CodeExplainer Demo](./public/images/demo.gif)

## 🌟 ¿Qué es CodeExplainer?

CodeExplainer es una aplicación web que utiliza inteligencia artificial (Google Gemini) para explicar cualquier fragmento de código en lenguaje natural. Ideal para:

- 📚 Estudiantes aprendiendo a programar
- 👨‍💻 Desarrolladores trabajando con código heredado
- 🔍 Code reviewers que necesitan entender código rápidamente

**[🔗 Ver Demo en Vivo](https://code-explainer-tu-usuario.vercel.app)**

---

## ✨ Características

- ✅ Soporte para 11+ lenguajes de programación
- ✅ Explicaciones detalladas con IA
- ✅ Editor de código integrado con syntax highlighting
- ✅ Interfaz responsive y moderna
- ✅ 100% gratuito y open source

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología |
|-----------|-----------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS |
| **UI Components** | Shadcn/ui, Radix UI |
| **IA** | Google Gemini API |
| **Editor** | Monaco Editor (VS Code) |
| **Validación** | Zod |
| **Deploy** | Vercel |

---

## 🚀 Instalación Local

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Cuenta de Google AI Studio (gratuita)

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/code-explainer.git
cd code-explainer
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crear un archivo `.env.local`:

```env
GEMINI_API_KEY=tu_api_key_aqui
```

Obtén tu API key gratis en: https://makersuite.google.com/app/apikey

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## 📸 Capturas de Pantalla

### Vista Principal
![Screenshot 1](./public/images/hero-screenshot.png)

---

## 🏗️ Arquitectura

```
┌─────────────┐
│   Cliente   │
│  (Next.js)  │
└──────┬──────┘
       │ HTTP POST /api/explain
       │
       ▼
┌─────────────────┐
│   API Route     │
│ (Serverless)    │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Gemini API     │
│  (Google AI)    │
└─────────────────┘
```

---

## 📝 Endpoints

### POST /api/explain

Explica un fragmento de código.

**Request:**
```json
{
  "code": "function hello() { return 'world'; }",
  "language": "javascript"
}
```

**Response:**
```json
{
  "success": true,
  "explanation": "Este código define una función...",
  "timestamp": "2024-01-20T10:30:00Z"
}
```

---

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

---

## 👨‍💻 Autor

**Tu Nombre**

- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tuemail@ejemplo.com

---

## 🙏 Agradecimientos

- Google AI por proporcionar Gemini API gratuitamente
- Vercel por el hosting gratuito
- La comunidad de Next.js

---

⭐️ Si te gustó este proyecto, ¡deja una estrella en GitHub!
```

---

### FASE 6: Deployment en Vercel (Día 7)

#### 6.1 Preparar para producción

1. Asegúrate de que `.env.local` esté en `.gitignore`
2. Optimizar imágenes en `/public`
3. Revisar que no haya console.logs en producción

#### 6.2 Deploy

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Agregar variable de entorno en Vercel Dashboard
# Settings > Environment Variables > GEMINI_API_KEY
```

#### 6.3 Configurar dominio personalizado (opcional)

En Vercel Dashboard: Settings > Domains

---

## 📱 MENSAJE PARA LINKEDIN - Proyecto 1

```
🚀 Nuevo proyecto: CodeExplainer - Tu asistente IA para entender código

Acabo de lanzar CodeExplainer, una aplicación web que usa inteligencia artificial (Google Gemini) para explicar cualquier fragmento de código en lenguaje natural.

🎯 ¿Por qué lo hice?
Muchas veces nos encontramos con código heredado o snippets complejos que nos cuesta entender. CodeExplainer resuelve esto en segundos.

🛠️ Stack tecnológico:
• Frontend: Next.js 14 + TypeScript + Tailwind CSS
• IA: Google Gemini API (60 requests/min gratis)
• Deployment: Vercel (serverless)
• UI: Shadcn/ui + Monaco Editor

✨ Características:
✅ Soporte para 11+ lenguajes de programación
✅ Explicaciones detalladas paso a paso
✅ Editor integrado con syntax highlighting
✅ 100% gratuito y open source

🔍 Lo que aprendí:
• Integración de APIs de IA en producción
• Manejo de serverless functions en Next.js
• Optimización de prompts para obtener mejores respuestas
• Rate limiting para proteger la API
• TypeScript avanzado con Zod para validaciones

🔗 Demo en vivo: [TU_URL_VERCEL]
💻 Código: github.com/tu-usuario/code-explainer

¿Qué otros problemas podríamos resolver con IA? ¡Leeré sus ideas en los comentarios! 👇

#WebDevelopment #NextJS #AI #OpenSource #FullStack #TypeScript
```

---

---

# 🚀 PROYECTO 2: Dashboard Interactivo - "CryptoTracker Pro"

## 📝 Descripción del Proyecto

**Nombre:** CryptoTracker Pro  
**Tagline:** "Monitorea el mercado crypto en tiempo real"  
**Problema que resuelve:** Los inversores en cripto necesitan una forma rápida y visual de monitorear precios, tendencias y estadísticas sin pagar por plataformas premium.

---

## 🏗️ ARQUITECTURA TÉCNICA

### Stack Tecnológico (100% Gratuito)

**Frontend:**
- React 18 + Vite
- TypeScript
- Tailwind CSS
- TanStack Query (React Query)
- Recharts (gráficos)
- Zustand (estado global)
- React Router DOM

**API:**
- CoinGecko API (gratuita, sin API key)

**Deployment:**
- Netlify

---

## 📂 ESTRUCTURA DEL PROYECTO

```
crypto-tracker/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── README.md
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── api/
│   │   ├── coingecko.ts         # Cliente API
│   │   └── endpoints.ts          # Endpoints
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── crypto/
│   │   │   ├── CryptoCard.tsx
│   │   │   ├── CryptoList.tsx
│   │   │   ├── CryptoDetail.tsx
│   │   │   └── PriceChart.tsx
│   │   ├── dashboard/
│   │   │   ├── StatCard.tsx
│   │   │   ├── TrendingCoins.tsx
│   │   │   ├── MarketOverview.tsx
│   │   │   └── TopMovers.tsx
│   │   └── ui/
│   │       ├── LoadingSkeleton.tsx
│   │       ├── ErrorMessage.tsx
│   │       └── SearchBar.tsx
│   ├── hooks/
│   │   ├── useCoins.ts
│   │   ├── useCoinDetail.ts
│   │   ├── useMarketData.ts
│   │   └── useTrendingCoins.ts
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── CoinDetail.tsx
│   │   ├── Markets.tsx
│   │   └── Watchlist.tsx
│   ├── store/
│   │   └── useWatchlistStore.ts  # Store de Zustand
│   ├── types/
│   │   └── crypto.ts
│   ├── utils/
│   │   ├── format.ts             # Formateo de números/fechas
│   │   └── constants.ts
│   └── lib/
│       └── queryClient.ts        # Config React Query
```

---

## 🔧 DESARROLLO PASO A PASO

### FASE 1: Setup (Día 1)

```bash
# Crear proyecto con Vite
npm create vite@latest crypto-tracker -- --template react-ts
cd crypto-tracker

# Instalar dependencias
npm install
npm install react-router-dom
npm install @tanstack/react-query
npm install zustand
npm install recharts
npm install axios
npm install date-fns
npm install lucide-react
npm install clsx tailwind-merge

# Instalar Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### FASE 2: API Client (Día 2)

#### 2.1 Cliente de CoinGecko

**Archivo: `src/api/coingecko.ts`**

```typescript
import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const coingeckoAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
  },
});

// Interceptor para manejo de errores
coingeckoAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      console.error('Rate limit alcanzado');
    }
    return Promise.reject(error);
  }
);
```

#### 2.2 Endpoints

**Archivo: `src/api/endpoints.ts`**

```typescript
import { coingeckoAPI } from './coingecko';
import { Coin, CoinDetail, MarketData, TrendingCoin } from '@/types/crypto';

// Obtener top 100 criptomonedas
export async function getCoins(
  page: number = 1,
  perPage: number = 50,
  currency: string = 'usd'
): Promise<Coin[]> {
  const response = await coingeckoAPI.get('/coins/markets', {
    params: {
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: perPage,
      page,
      sparkline: true,
      price_change_percentage: '24h,7d',
    },
  });
  return response.data;
}

// Obtener detalle de una moneda
export async function getCoinDetail(id: string): Promise<CoinDetail> {
  const response = await coingeckoAPI.get(`/coins/${id}`, {
    params: {
      localization: false,
      tickers: false,
      community_data: true,
      developer_data: false,
    },
  });
  return response.data;
}

// Obtener histórico de precios
export async function getCoinHistory(
  id: string,
  days: number = 7
): Promise<{ prices: [number, number][] }> {
  const response = await coingeckoAPI.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days,
    },
  });
  return response.data;
}

// Obtener datos globales del mercado
export async function getGlobalMarketData(): Promise<MarketData> {
  const response = await coingeckoAPI.get('/global');
  return response.data.data;
}

// Obtener trending coins
export async function getTrendingCoins(): Promise<TrendingCoin[]> {
  const response = await coingeckoAPI.get('/search/trending');
  return response.data.coins.map((item: any) => item.item);
}

// Buscar monedas
export async function searchCoins(query: string): Promise<Coin[]> {
  if (!query) return [];
  const response = await coingeckoAPI.get('/search', {
    params: { query },
  });
  return response.data.coins;
}
```

---

### FASE 3: Tipos TypeScript (Día 2)

**Archivo: `src/types/crypto.ts`**

```typescript
export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  sparkline_in_7d?: {
    price: number[];
  };
  last_updated: string;
}

export interface CoinDetail extends Coin {
  description: {
    en: string;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    repos_url: {
      github: string[];
    };
  };
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    total_volume: { usd: number };
  };
}

export interface MarketData {
  total_market_cap: { usd: number };
  total_volume: { usd: number };
  market_cap_percentage: { [key: string]: number };
  market_cap_change_percentage_24h_usd: number;
}

export interface TrendingCoin {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
  score: number;
  price_btc: number;
}
```

---

### FASE 4: Hooks React Query (Día 3)

#### 4.1 Configurar React Query

**Archivo: `src/lib/queryClient.ts`**

```typescript
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 10 * 60 * 1000, // 10 minutos
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});
```

#### 4.2 Hook para lista de monedas

**Archivo: `src/hooks/useCoins.ts`**

```typescript
import { useQuery } from '@tanstack/react-query';
import { getCoins } from '@/api/endpoints';
import { Coin } from '@/types/crypto';

export function useCoins(page: number = 1, perPage: number = 50) {
  return useQuery<Coin[], Error>({
    queryKey: ['coins', page, perPage],
    queryFn: () => getCoins(page, perPage),
    staleTime: 5 * 60 * 1000,
  });
}
```

#### 4.3 Hook para detalle de moneda

**Archivo: `src/hooks/useCoinDetail.ts`**

```typescript
import { useQuery } from '@tanstack/react-query';
import { getCoinDetail, getCoinHistory } from '@/api/endpoints';
import { CoinDetail } from '@/types/crypto';

export function useCoinDetail(coinId: string) {
  return useQuery<CoinDetail, Error>({
    queryKey: ['coin-detail', coinId],
    queryFn: () => getCoinDetail(coinId),
    enabled: !!coinId,
  });
}

export function useCoinHistory(coinId: string, days: number = 7) {
  return useQuery({
    queryKey: ['coin-history', coinId, days],
    queryFn: () => getCoinHistory(coinId, days),
    enabled: !!coinId,
  });
}
```

---

### FASE 5: Componentes UI (Día 4-5)

#### 5.1 Tarjeta de Crypto

**Archivo: `src/components/crypto/CryptoCard.tsx`**

```typescript
import { Coin } from '@/types/crypto';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency, formatPercentage } from '@/utils/format';

interface CryptoCardProps {
  coin: Coin;
  onClick?: () => void;
}

export function CryptoCard({ coin, onClick }: CryptoCardProps) {
  const isPositive = coin.price_change_percentage_24h > 0;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={coin.image} alt={coin.name} className="w-10 h-10" />
          <div>
            <h3 className="font-bold text-gray-800">{coin.name}</h3>
            <p className="text-sm text-gray-500 uppercase">{coin.symbol}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500">
          #{coin.market_cap_rank}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">
            {formatCurrency(coin.current_price)}
          </span>
          <span
            className={`flex items-center gap-1 text-sm font-semibold ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {formatPercentage(coin.price_change_percentage_24h)}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Market Cap</span>
          <span className="font-medium">
            {formatCurrency(coin.market_cap, { compact: true })}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Volume (24h)</span>
          <span className="font-medium">
            {formatCurrency(coin.total_volume, { compact: true })}
          </span>
        </div>
      </div>
    </div>
  );
}
```

#### 5.2 Gráfico de Precios

**Archivo: `src/components/crypto/PriceChart.tsx`**

```typescript
import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { format } from 'date-fns';

interface PriceChartProps {
  data: [number, number][];
  color?: string;
}

export function PriceChart({ data, color = '#8b5cf6' }: PriceChartProps) {
  const chartData = useMemo(() => {
    return data.map(([timestamp, price]) => ({
      timestamp,
      price,
      date: format(new Date(timestamp), 'MMM dd'),
    }));
  }, [data]);

  return (
    <div className="w-full h-[300px] bg-white rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            stroke="#888"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#888"
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
            labelFormatter={(label) => `Date: ${label}`}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
```

---

### FASE 6: Store Zustand (Día 5)

**Archivo: `src/store/useWatchlistStore.ts`**

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WatchlistStore {
  watchlist: string[];
  addToWatchlist: (coinId: string) => void;
  removeFromWatchlist: (coinId: string) => void;
  isInWatchlist: (coinId: string) => boolean;
}

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],
      
      addToWatchlist: (coinId) =>
        set((state) => ({
          watchlist: [...state.watchlist, coinId],
        })),
      
      removeFromWatchlist: (coinId) =>
        set((state) => ({
          watchlist: state.watchlist.filter((id) => id !== coinId),
        })),
      
      isInWatchlist: (coinId) => get().watchlist.includes(coinId),
    }),
    {
      name: 'crypto-watchlist',
    }
  )
);
```

---

### FASE 7: Utilidades (Día 5)

**Archivo: `src/utils/format.ts`**

```typescript
export function formatCurrency(
  value: number,
  options?: { compact?: boolean; decimals?: number }
): string {
  const { compact = false, decimals = 2 } = options || {};

  if (compact && value >= 1e9) {
    return `$${(value / 1e9).toFixed(1)}B`;
  }
  if (compact && value >= 1e6) {
    return `$${(value / 1e6).toFixed(1)}M`;
  }
  if (compact && value >= 1e3) {
    return `$${(value / 1e3).toFixed(1)}K`;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercentage(value: number): string {
  const formatted = Math.abs(value).toFixed(2);
  return `${value >= 0 ? '+' : '-'}${formatted}%`;
}

export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
```

---

### FASE 8: Página Dashboard (Día 6)

**Archivo: `src/pages/Dashboard.tsx`**

```typescript
import { useCoins } from '@/hooks/useCoins';
import { useMarketData } from '@/hooks/useMarketData';
import { useTrendingCoins } from '@/hooks/useTrendingCoins';
import { CryptoCard } from '@/components/crypto/CryptoCard';
import { StatCard } from '@/components/dashboard/StatCard';
import { TrendingCoins } from '@/components/dashboard/TrendingCoins';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();
  const { data: coins, isLoading: coinsLoading } = useCoins();
  const { data: marketData, isLoading: marketLoading } = useMarketData();
  const { data: trending, isLoading: trendingLoading } = useTrendingCoins();

  if (coinsLoading || marketLoading || trendingLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Market Cap"
            value={marketData?.total_market_cap.usd || 0}
            change={marketData?.market_cap_change_percentage_24h_usd || 0}
            format="currency"
          />
          <StatCard
            title="24h Volume"
            value={marketData?.total_volume.usd || 0}
            format="currency"
          />
          <StatCard
            title="BTC Dominance"
            value={marketData?.market_cap_percentage.btc || 0}
            format="percentage"
          />
        </div>

        {/* Trending Coins */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🔥 Trending Coins
          </h2>
          <TrendingCoins coins={trending || []} />
        </div>

        {/* Top Coins */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Top Cryptocurrencies by Market Cap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coins?.map((coin) => (
              <CryptoCard
                key={coin.id}
                coin={coin}
                onClick={() => navigate(`/coin/${coin.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

### FASE 9: README y Deploy (Día 7)

#### README similar al proyecto 1 con:
- Descripción del proyecto
- Tecnologías utilizadas
- Capturas de pantalla
- Instrucciones de instalación
- Arquitectura

#### Deploy en Netlify:

```bash
npm run build

# Instalar Netlify CLI
npm install -g netlify-cli

# Login y deploy
netlify login
netlify deploy --prod
```

---

## 📱 MENSAJE PARA LINKEDIN - Proyecto 2

```
📊 CryptoTracker Pro: Dashboard de criptomonedas en tiempo real

¡Nuevo proyecto lanzado! He creado un dashboard interactivo para monitorear el mercado de criptomonedas, consumiendo la API gratuita de CoinGecko.

🎯 El problema:
Las plataformas premium de tracking cripto cuestan hasta $50/mes. Muchos inversores necesitan una alternativa gratuita y completa.

⚡ Características principales:
• Monitoreo de +100 criptomonedas en tiempo real
• Gráficos interactivos de precios históricos
• Trending coins y top movers del día
• Watchlist personalizada (guardada en local)
• Estadísticas globales del mercado
• Búsqueda avanzada de activos

🛠️ Stack técnico:
• Frontend: React + TypeScript + Vite
• Data Fetching: TanStack Query (React Query)
• Charts: Recharts
• State: Zustand + localStorage
• API: CoinGecko (gratuita)
• Deploy: Netlify

📈 Lo que aprendí:
• Gestión eficiente de cache con React Query
• Optimización de renderizado con useMemo
• Integración de gráficos interactivos
• Manejo de grandes volúmenes de datos
• UI/UX responsive para visualización de datos

🔗 Demo: [TU_URL_NETLIFY]
💻 Código: github.com/tu-usuario/crypto-tracker

La API de CoinGecko ofrece 50 requests/minuto gratis, suficiente para aplicaciones personales. Perfecto para aprender a trabajar con APIs públicas.

¿Qué funcionalidad agregarías a un dashboard así? 💭

#React #TypeScript #DataVisualization #Crypto #WebDevelopment #OpenSource
```

---

---

# 🚀 PROYECTO 3: Kanban Board - "TaskFlow"

## 📝 Descripción del Proyecto

**Nombre:** TaskFlow  
**Tagline:** "Gestión de proyectos simplificada"  
**Problema que resuelve:** Los equipos necesitan una herramienta de gestión visual de tareas sin pagar por Trello Premium o Asana.

---

## 🏗️ ARQUITECTURA TÉCNICA

### Stack Tecnológico (100% Gratuito)

**Frontend:**
- React + Vite + TypeScript
- Tailwind CSS
- React Beautiful DnD (Drag & Drop)
- React Router DOM
- React Hook Form + Zod

**Backend:**
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL (Supabase)
- JWT (autenticación)
- bcrypt (hash de contraseñas)

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Base de datos: Supabase (PostgreSQL)

---

## 📂 ESTRUCTURA DEL PROYECTO

```
taskflow/
├── client/                      # Frontend React
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RegisterForm.tsx
│   │   │   ├── board/
│   │   │   │   ├── Board.tsx
│   │   │   │   ├── Column.tsx
│   │   │   │   ├── TaskCard.tsx
│   │   │   │   └── CreateColumn.tsx
│   │   │   ├── task/
│   │   │   │   ├── TaskModal.tsx
│   │   │   │   ├── CreateTask.tsx
│   │   │   │   └── TaskDetail.tsx
│   │   │   └── layout/
│   │   │       ├── Navbar.tsx
│   │   │       └── Sidebar.tsx
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   └── BoardView.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useBoards.ts
│   │   │   └── useTasks.ts
│   │   ├── lib/
│   │   │   ├── api.ts
│   │   │   └── auth.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── context/
│   │       └── AuthContext.tsx
│   └── package.json
│
└── server/                      # Backend Node.js
    ├── src/
    │   ├── controllers/
    │   │   ├── authController.ts
    │   │   ├── boardController.ts
    │   │   ├── columnController.ts
    │   │   └── taskController.ts
    │   ├── middleware/
    │   │   ├── auth.ts
    │   │   ├── errorHandler.ts
    │   │   └── validate.ts
    │   ├── routes/
    │   │   ├── authRoutes.ts
    │   │   ├── boardRoutes.ts
    │   │   ├── columnRoutes.ts
    │   │   └── taskRoutes.ts
    │   ├── services/
    │   │   ├── authService.ts
    │   │   ├── boardService.ts
    │   │   └── taskService.ts
    │   ├── types/
    │   │   └── express.d.ts
    │   ├── utils/
    │   │   ├── jwt.ts
    │   │   └── validation.ts
    │   ├── config/
    │   │   └── database.ts
    │   ├── app.ts
    │   └── server.ts
    ├── prisma/
    │   ├── schema.prisma
    │   └── migrations/
    ├── .env.example
    └── package.json
```

---

## 🗄️ DISEÑO DE BASE DE DATOS

### Schema Prisma

**Archivo: `server/prisma/schema.prisma`**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  boards    Board[]
  tasks     Task[]
}

model Board {
  id          String   @id @default(uuid())
  title       String
  description String?
  color       String   @default("#6366f1")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  userId   String
  user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  columns  Column[]

  @@index([userId])
}

model Column {
  id        String   @id @default(uuid())
  title     String
  position  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  boardId String
  board   Board  @relation(fields: [boardId], references: [id], onDelete: Cascade)
  tasks   Task[]

  @@index([boardId])
  @@unique([boardId, position])
}

model Task {
  id          String   @id @default(uuid())
  title       String
  description String?
  priority    Priority @default(MEDIUM)
  position    Int
  dueDate     DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  columnId String
  column   Column @relation(fields: [columnId], references: [id], onDelete: Cascade)

  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([columnId])
  @@index([userId])
  @@unique([columnId, position])
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}
```

---

## 🔧 DESARROLLO BACKEND

### FASE 1: Setup Backend (Día 1-2)

```bash
mkdir taskflow && cd taskflow
mkdir server && cd server

npm init -y
npm install express cors dotenv
npm install @prisma/client
npm install jsonwebtoken bcryptjs
npm install zod express-validator
npm install typescript @types/express @types/node @types/jsonwebtoken @types/bcryptjs ts-node-dev -D

npx prisma init
```

#### Configurar TypeScript

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

#### Variables de entorno

**.env:**

```env
DATABASE_URL="postgresql://usuario:password@db.supabase.co:5432/postgres"
JWT_SECRET="tu_secret_super_seguro_aqui"
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

---

### FASE 2: Controladores y Servicios (Día 3-4)

#### Auth Controller

**server/src/controllers/authController.ts:**

```typescript
import { Request, Response } from 'express';
import { authService } from '../services/authService';
import { registerSchema, loginSchema } from '../utils/validation';

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const validatedData = registerSchema.parse(req.body);
      const result = await authService.register(validatedData);
      
      res.status(201).json({
        success: true,
        message: 'Usuario registrado exitosamente',
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Error al registrar usuario',
      });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const validatedData = loginSchema.parse(req.body);
      const result = await authService.login(validatedData);
      
      res.json({
        success: true,
        message: 'Login exitoso',
        data: result,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message || 'Credenciales inválidas',
      });
    }
  },

  async getProfile(req: Request, res: Response) {
    try {
      const userId = req.user!.id;
      const user = await authService.getUserById(userId);
      
      res.json({
        success: true,
        data: user,
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }
  },
};
```

#### Auth Service

**server/src/services/authService.ts:**

```typescript
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';

const prisma = new PrismaClient();

export const authService = {
  async register(data: { email: string; name: string; password: string }) {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    // Generar token
    const token = generateToken({ id: user.id, email: user.email });

    return { user, token };
  },

  async login(data: { email: string; password: string }) {
    // Buscar usuario
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(data.password, user.password);

    if (!isValidPassword) {
      throw new Error('Credenciales inválidas');
    }

    // Generar token
    const token = generateToken({ id: user.id, email: user.email });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    };
  },

  async getUserById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    return user;
  },
};
```

#### Board Controller

**server/src/controllers/boardController.ts:**

```typescript
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const boardController = {
  // GET /api/boards - Obtener todos los boards del usuario
  async getBoards(req: Request, res: Response) {
    try {
      const userId = req.user!.id;

      const boards = await prisma.board.findMany({
        where: { userId },
        include: {
          columns: {
            orderBy: { position: 'asc' },
            include: {
              tasks: {
                orderBy: { position: 'asc' },
              },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      res.json({ success: true, data: boards });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // GET /api/boards/:id - Obtener un board específico
  async getBoardById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user!.id;

      const board = await prisma.board.findFirst({
        where: { id, userId },
        include: {
          columns: {
            orderBy: { position: 'asc' },
            include: {
              tasks: {
                orderBy: { position: 'asc' },
              },
            },
          },
        },
      });

      if (!board) {
        return res.status(404).json({
          success: false,
          message: 'Board no encontrado',
        });
      }

      res.json({ success: true, data: board });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /api/boards - Crear nuevo board
  async createBoard(req: Request, res: Response) {
    try {
      const userId = req.user!.id;
      const { title, description, color } = req.body;

      const board = await prisma.board.create({
        data: {
          title,
          description,
          color: color || '#6366f1',
          userId,
        },
      });

      res.status(201).json({ success: true, data: board });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  // PUT /api/boards/:id - Actualizar board
  async updateBoard(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user!.id;
      const { title, description, color } = req.body;

      const board = await prisma.board.findFirst({
        where: { id, userId },
      });

      if (!board) {
        return res.status(404).json({
          success: false,
          message: 'Board no encontrado',
        });
      }

      const updatedBoard = await prisma.board.update({
        where: { id },
        data: { title, description, color },
      });

      res.json({ success: true, data: updatedBoard });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  // DELETE /api/boards/:id - Eliminar board
  async deleteBoard(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user!.id;

      const board = await prisma.board.findFirst({
        where: { id, userId },
      });

      if (!board) {
        return res.status(404).json({
          success: false,
          message: 'Board no encontrado',
        });
      }

      await prisma.board.delete({ where: { id } });

      res.json({ success: true, message: 'Board eliminado' });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};
```

---

### FASE 3: Rutas y Middleware (Día 4)

#### Middleware de Autenticación

**server/src/middleware/auth.ts:**

```typescript
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Token no proporcionado',
      });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token inválido o expirado',
    });
  }
}
```

#### Rutas

**server/src/routes/authRoutes.ts:**

```typescript
import { Router } from 'express';
import { authController } from '../controllers/authController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authMiddleware, authController.getProfile);

export default router;
```

**server/src/routes/boardRoutes.ts:**

```typescript
import { Router } from 'express';
import { boardController } from '../controllers/boardController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// Todas las rutas requieren autenticación
router.use(authMiddleware);

router.get('/', boardController.getBoards);
router.get('/:id', boardController.getBoardById);
router.post('/', boardController.createBoard);
router.put('/:id', boardController.updateBoard);
router.delete('/:id', boardController.deleteBoard);

export default router;
```

#### App Principal

**server/src/app.ts:**

```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import boardRoutes from './routes/boardRoutes';
import columnRoutes from './routes/columnRoutes';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/columns', columnRoutes);
app.use('/api/tasks', taskRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
  });
});

export default app;
```

**server/src/server.ts:**

```typescript
import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
```

---

## 🔧 DESARROLLO FRONTEND

### FASE 4: Setup Frontend (Día 5)

```bash
cd ..