# 📊 CryptoTracker Pro

Dashboard en tiempo real para monitoreo del mercado de criptomonedas con gráficos interactivos, alertas de precio y seguimiento de portafolio.

---

## 🎯 Objetivo del Proyecto

Crear un dashboard profesional para traders e inversores de criptomonedas que permita monitorear precios en tiempo real, analizar tendencias con gráficos y gestionar un portafolio personal.

---

## ✨ Características

- 📈 **Precios en tiempo real:** Actualización automática de cotizaciones
- 📊 **Gráficos interactivos:** Visualización tipo TradingView
- 🔔 **Sistema de alertas:** Notificaciones de cambios de precio
- 💼 **Gestión de portafolio:** Seguimiento de inversiones personales
- 🔍 **Búsqueda avanzada:** Filtros y búsqueda de criptomonedas
- 🌙 **Modo oscuro:** Toggle light/dark theme
- 📱 **Responsive:** Optimizado para todos los dispositivos

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18**
- **Vite** (Build tool)
- **TypeScript**
- **Tailwind CSS**

### APIs
- **CoinGecko API** (datos de mercado - gratuita)

### Librerías
- **Recharts** o **Chart.js** (gráficos)
- **React Query** (gestión de estado servidor)
- **Axios** (HTTP client)

### Deployment
- **Netlify** (despliegue gratuito)

---

## 📁 Estructura del Proyecto

```
02-cryptotracker-pro/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── charts/
│   │   │   ├── PriceChart.tsx
│   │   │   ├── MarketCapChart.tsx
│   │   │   └── VolumeChart.tsx
│   │   ├── CryptoCard.tsx
│   │   ├── CryptoList.tsx
│   │   ├── Portfolio.tsx
│   │   ├── SearchBar.tsx
│   │   ├── AlertsPanel.tsx
│   │   └── Header.tsx
│   ├── services/
│   │   ├── coingecko.ts              # Cliente API CoinGecko
│   │   └── localStorage.ts           # Persistencia local
│   ├── hooks/
│   │   ├── useCryptoData.ts
│   │   ├── usePortfolio.ts
│   │   └── useAlerts.ts
│   ├── types/
│   │   └── index.ts                  # Tipos TypeScript
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   ├── formatters.ts             # Formateo de números/fechas
│   │   └── calculations.ts           # Cálculos financieros
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── images/
│   └── icons/
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Pasos de instalación

```bash
# 1. Navegar al directorio del proyecto
cd 02-cryptotracker-pro

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

---

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo (Vite)
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos TypeScript
```

---

## 🎨 Componentes Principales

### CryptoCard.tsx
Tarjeta individual de criptomoneda mostrando:
- Logo y nombre
- Precio actual
- Cambio 24h (con color según +/-)
- Sparkline (mini gráfico)

### PriceChart.tsx
Gráfico de precio con:
- Selección de timeframe (24h, 7d, 30d, 1y)
- Zoom e interactividad
- Indicadores técnicos básicos

### Portfolio.tsx
Gestión de portafolio:
- Lista de holdings
- Valor total
- Profit/Loss
- Distribución por asset

### AlertsPanel.tsx
Sistema de alertas:
- Crear alertas de precio
- Notificaciones cuando se activan
- Historial de alertas

---

## 🔌 API Integration

### CoinGecko API
```typescript
// Endpoints principales:
- /coins/markets        // Lista de monedas
- /coins/{id}           // Detalle de moneda
- /coins/{id}/market_chart  // Datos históricos
- /search               // Búsqueda
```

**Límites:**
- Tier gratuito: 10-50 calls/minuto
- Implementar caché para optimizar requests

---

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests con cobertura
npm run test:coverage

# Tests e2e con Cypress
npm run cypress:open
```

---

## 🚢 Deployment

### Netlify (Recomendado)

1. Conectar repositorio a Netlify
2. Configurar build:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automático en cada push

```bash
# O usar Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📊 Features Roadmap

### v1.0 (MVP)
- ✅ Lista de top 100 criptomonedas
- ✅ Gráficos de precio básicos
- ✅ Búsqueda y filtros

### v1.1
- 🔄 Sistema de alertas
- 🔄 Portfolio tracking
- 🔄 Modo oscuro

### v2.0
- 📅 Comparador de monedas
- 📅 News feed
- 📅 Indicadores técnicos avanzados

---

## 🐛 Troubleshooting

### Error: Rate limit de API
- CoinGecko limita requests en tier gratuito
- Implementar caché con React Query
- Reducir frecuencia de polling

### Gráficos no se renderizan
- Verificar datos de la API
- Revisar consola del navegador
- Asegurar formato correcto de datos

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

- [CoinGecko API Docs](https://www.coingecko.com/en/api)
- [Vite Docs](https://vitejs.dev/)
- [React Query](https://tanstack.com/query/latest)
- [Recharts](https://recharts.org/)

---

**Estado:** 🟡 En desarrollo
**Versión:** 0.1.0
**Última actualización:** 2025-11-12
