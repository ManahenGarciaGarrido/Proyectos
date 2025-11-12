# 🔗 Shrt.link

API REST profesional para acortar URLs con sistema de analytics completo y documentación interactiva con Swagger/OpenAPI.

---

## 🎯 Objetivo del Proyecto

Crear una API REST robusta y escalable para acortamiento de URLs que incluya tracking de analytics, sistema de gestión de enlaces y documentación completa para desarrolladores.

---

## ✨ Características

- 🔗 **Acortamiento de URLs:** Generación de códigos únicos
- 📊 **Analytics completos:** Clicks, geografía, dispositivos, referrers
- 🔐 **Autenticación opcional:** Sistema de usuarios para gestionar enlaces
- ⏰ **Expiración de links:** Enlaces con fecha de caducidad
- 🎨 **URLs personalizadas:** Slugs customizados
- 📝 **Documentación Swagger:** API totalmente documentada
- 🚀 **Rate limiting:** Protección contra abuso
- 🔍 **QR Code generation:** Genera códigos QR para cada link
- 📈 **Dashboard stats:** Estadísticas detalladas por enlace

---

## 🛠️ Stack Tecnológico

### Backend
- **Node.js** + **Express**
- **TypeScript**
- **PostgreSQL** (base de datos relacional)
- **Prisma** o **TypeORM** (ORM)
- **JWT** (autenticación)

### Documentation
- **Swagger/OpenAPI** 3.0
- **Swagger UI Express**

### Testing
- **Jest** (tests unitarios)
- **Supertest** (tests de integración)

### Deployment
- **Render** (backend + PostgreSQL gratuito)

---

## 📁 Estructura del Proyecto

```
04-shrt-link/
├── src/
│   ├── controllers/
│   │   ├── urlController.ts         # Lógica de URLs
│   │   ├── authController.ts        # Autenticación
│   │   └── analyticsController.ts   # Analytics
│   ├── models/
│   │   ├── Url.ts                   # Modelo de URL
│   │   ├── User.ts                  # Modelo de Usuario
│   │   └── Analytics.ts             # Modelo de Analytics
│   ├── routes/
│   │   ├── urlRoutes.ts
│   │   ├── authRoutes.ts
│   │   └── analyticsRoutes.ts
│   ├── middleware/
│   │   ├── auth.ts                  # Middleware JWT
│   │   ├── rateLimit.ts             # Rate limiting
│   │   ├── validation.ts            # Validación de datos
│   │   └── errorHandler.ts          # Error handling
│   ├── config/
│   │   ├── database.ts              # Config PostgreSQL
│   │   └── swagger.ts               # Config Swagger
│   ├── types/
│   │   └── index.ts                 # Tipos TypeScript
│   ├── utils/
│   │   ├── generateCode.ts          # Generar códigos cortos
│   │   ├── qrCode.ts                # Generación QR
│   │   └── validators.ts            # Validadores
│   └── server.ts                    # Entry point
├── tests/
│   ├── url.test.ts
│   ├── auth.test.ts
│   └── analytics.test.ts
├── docs/
│   └── swagger.yaml                 # Especificación OpenAPI
├── prisma/
│   ├── schema.prisma                # Schema de base de datos
│   └── migrations/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ instalado
- PostgreSQL instalado localmente o cuenta en Render
- npm o yarn

### Pasos de instalación

```bash
# 1. Navegar al directorio del proyecto
cd 04-shrt-link

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# 4. Ejecutar migraciones de base de datos
npx prisma migrate dev

# 5. (Opcional) Seed de datos de prueba
npx prisma db seed

# 6. Iniciar servidor de desarrollo
npm run dev

# API corriendo en http://localhost:3000
# Documentación en http://localhost:3000/api-docs
```

---

## 🔑 Variables de Entorno

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/shrtlink"

# JWT
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRATION=7d

# Base URL (para generar links cortos)
BASE_URL=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW=15 # minutos
RATE_LIMIT_MAX_REQUESTS=100
```

---

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo (nodemon)
npm run build        # Compilar TypeScript
npm start            # Servidor de producción
npm test             # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:coverage # Tests con cobertura
npm run lint         # Ejecutar ESLint
npm run prisma:studio # Abrir Prisma Studio (GUI DB)
```

---

## 🗄️ Modelos de Datos

### URL
```typescript
{
  id: string (UUID)
  originalUrl: string
  shortCode: string (unique, indexed)
  customSlug?: string (unique)
  userId?: string (optional, para usuarios autenticados)
  title?: string
  description?: string
  expiresAt?: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
```

### User (opcional)
```typescript
{
  id: string (UUID)
  email: string (unique)
  password: string (hashed)
  name: string
  apiKey: string (unique)
  createdAt: Date
  updatedAt: Date
}
```

### Analytics
```typescript
{
  id: string (UUID)
  urlId: string (foreign key)
  timestamp: Date
  ipAddress: string
  userAgent: string
  referer?: string
  country?: string
  city?: string
  device: string (mobile/desktop/tablet)
  browser: string
  os: string
}
```

---

## 🔌 API Endpoints

### URLs
```
POST   /api/urls              # Crear URL corta
GET    /api/urls              # Listar URLs del usuario
GET    /api/urls/:code/stats  # Obtener estadísticas
PUT    /api/urls/:code        # Actualizar URL
DELETE /api/urls/:code        # Eliminar URL
GET    /api/urls/:code/qr     # Obtener QR code
GET    /:code                 # Redirigir a URL original
```

### Auth (opcional)
```
POST   /api/auth/register     # Registro
POST   /api/auth/login        # Login
GET    /api/auth/me           # Usuario actual
```

### Analytics
```
GET    /api/analytics/:code   # Analytics de un link
GET    /api/analytics/summary # Resumen general
```

---

## 📊 Ejemplo de Request/Response

### Crear URL corta

**Request:**
```bash
POST /api/urls
Content-Type: application/json

{
  "url": "https://www.example.com/very/long/url/path",
  "customSlug": "ejemplo" // opcional
  "expiresAt": "2025-12-31T23:59:59Z" // opcional
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "originalUrl": "https://www.example.com/very/long/url/path",
    "shortCode": "aB3Xy7",
    "shortUrl": "http://localhost:3000/aB3Xy7",
    "qrCode": "http://localhost:3000/api/urls/aB3Xy7/qr",
    "createdAt": "2025-11-12T10:00:00Z"
  }
}
```

### Obtener estadísticas

**Request:**
```bash
GET /api/urls/aB3Xy7/stats
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "shortCode": "aB3Xy7",
    "originalUrl": "https://www.example.com/...",
    "totalClicks": 1543,
    "uniqueClicks": 892,
    "clicksByDate": [...],
    "topCountries": [...],
    "topDevices": {
      "mobile": 720,
      "desktop": 623,
      "tablet": 200
    },
    "topBrowsers": [...],
    "topReferers": [...]
  }
}
```

---

## 📖 Documentación Swagger

La API está completamente documentada con Swagger/OpenAPI 3.0.

- **URL local:** http://localhost:3000/api-docs
- **Spec file:** `/docs/swagger.yaml`

Features de la documentación:
- Todos los endpoints documentados
- Ejemplos de request/response
- Modelos de datos
- Autenticación JWT
- Try it out interactivo

---

## 🧪 Testing

```bash
# Tests unitarios
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

Cobertura mínima objetivo: 80%

---

## 🚢 Deployment

### Render (Recomendado)

1. **Crear PostgreSQL Database:**
   - Dashboard de Render → New → PostgreSQL
   - Copiar `External Database URL`

2. **Crear Web Service:**
   - New → Web Service
   - Conectar repositorio
   - Build Command: `npm install && npm run build && npx prisma migrate deploy`
   - Start Command: `npm start`
   - Add Environment Variable: `DATABASE_URL`

3. **Variables de entorno:**
   - `DATABASE_URL`: URL de PostgreSQL
   - `JWT_SECRET`: Secret seguro
   - `BASE_URL`: URL de tu servicio (ej: https://shrt-link.onrender.com)

---

## 🔒 Seguridad

- ✅ Rate limiting para prevenir abuso
- ✅ Validación de URLs (evitar phishing, malware)
- ✅ Sanitización de inputs
- ✅ Headers de seguridad (Helmet)
- ✅ CORS configurado correctamente
- ✅ JWT con expiración
- ✅ Passwords hasheados con bcrypt
- ✅ SQL injection prevention (Prisma ORM)

---

## ⚡ Optimizaciones

- Índices en `shortCode` y `customSlug` (búsqueda O(1))
- Caché de URLs frecuentes (Redis - futura implementación)
- Paginación en listados
- Compresión de responses (gzip)
- CDN para QR codes (futura implementación)

---

## 🎯 Features Roadmap

### v1.0 (MVP)
- ✅ Acortamiento básico de URLs
- ✅ Redirección
- ✅ Analytics básico

### v1.1
- 🔄 Autenticación de usuarios
- 🔄 Custom slugs
- 🔄 QR codes

### v2.0
- 📅 Expiración de links
- 📅 Link password protection
- 📅 Bulk URL creation
- 📅 Webhooks
- 📅 API keys para desarrolladores

---

## 🐛 Troubleshooting

### Error: No se puede conectar a PostgreSQL
- Verificar `DATABASE_URL` en .env
- Asegurar que PostgreSQL está corriendo
- Revisar credenciales

### Error: Código corto ya existe
- Muy poco probable (62^6 = 56B combinaciones)
- Implementado retry automático con nuevo código

### Tests fallan
- Usar database de test separada
- Ejecutar migraciones: `npx prisma migrate dev`

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

- [Express.js Docs](https://expressjs.com/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Swagger/OpenAPI](https://swagger.io/specification/)

---

**Estado:** 🟡 En desarrollo
**Versión:** 0.1.0
**Última actualización:** 2025-11-12
