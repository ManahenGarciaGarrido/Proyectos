# 🛒 TechStore

E-commerce moderno y headless para productos tecnológicos con CMS, carrito de compras, checkout y pasarela de pago (modo test/simulado).

---

## 🎯 Objetivo del Proyecto

Crear una plataforma e-commerce profesional y escalable que demuestre conocimientos en arquitectura headless, gestión de contenido, procesamiento de pagos y SEO.

---

## ✨ Características

- 🛍️ **Catálogo de productos:** Listado y detalle de productos
- 🔍 **Búsqueda y filtros:** Por categoría, precio, marca
- 🛒 **Carrito de compras:** Gestión completa con localStorage
- 💳 **Checkout completo:** Proceso de pago con Stripe (test mode)
- 🎨 **CMS headless:** Gestión de contenido con Sanity Studio
- 📱 **Responsive design:** Mobile-first approach
- 🚀 **SEO optimizado:** Meta tags, sitemap, structured data
- ⚡ **Performance:** Next.js App Router, Image optimization
- 🔐 **Seguridad:** Validación de formularios, sanitización
- 📊 **Panel de administración:** Sanity Studio para gestionar productos

---

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** o **Context API** (state management)

### Backend/CMS
- **Sanity CMS** (headless CMS)
- **GROQ** (query language de Sanity)

### Payments
- **Stripe** (modo test/simulado)

### Deployment
- **Frontend:** Vercel
- **CMS:** Sanity Cloud (gratuito)

---

## 📁 Estructura del Proyecto

```
05-techstore/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── products/
│   │   │   │   ├── page.tsx           # Lista de productos
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx       # Detalle de producto
│   │   │   ├── cart/
│   │   │   │   └── page.tsx           # Carrito
│   │   │   ├── checkout/
│   │   │   │   ├── page.tsx           # Checkout
│   │   │   │   └── success/
│   │   │   │       └── page.tsx       # Confirmación
│   │   │   ├── api/
│   │   │   │   ├── checkout/
│   │   │   │   │   └── route.ts       # API Stripe checkout
│   │   │   │   └── webhook/
│   │   │   │       └── route.ts       # Webhook Stripe
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx               # Home
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Modal.tsx
│   │   │   ├── products/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductList.tsx
│   │   │   │   ├── ProductDetail.tsx
│   │   │   │   └── ProductFilters.tsx
│   │   │   ├── cart/
│   │   │   │   ├── CartItem.tsx
│   │   │   │   ├── CartSummary.tsx
│   │   │   │   └── CartIcon.tsx
│   │   │   ├── checkout/
│   │   │   │   ├── CheckoutForm.tsx
│   │   │   │   └── PaymentForm.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── lib/
│   │   │   ├── sanity.ts              # Cliente Sanity
│   │   │   ├── stripe.ts              # Cliente Stripe
│   │   │   └── queries.ts             # Queries GROQ
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── styles/
│   │       └── globals.css
│   ├── public/
│   │   ├── images/
│   │   └── icons/
│   ├── .env.example
│   ├── .env.local
│   ├── next.config.js
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── sanity-studio/
│   ├── schemas/
│   │   ├── product.ts                 # Schema de Producto
│   │   ├── category.ts                # Schema de Categoría
│   │   └── index.ts
│   ├── components/
│   │   └── CustomPreview.tsx
│   ├── sanity.config.ts               # Config Sanity Studio
│   ├── sanity.cli.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ instalado
- Cuenta en Sanity.io (gratuita)
- Cuenta en Stripe (modo test)
- npm o yarn

### Setup Sanity Studio

```bash
# 1. Navegar al directorio sanity-studio
cd 05-techstore/sanity-studio

# 2. Instalar Sanity CLI globalmente
npm install -g @sanity/cli

# 3. Login en Sanity
sanity login

# 4. Inicializar proyecto (si no está hecho)
sanity init

# 5. Instalar dependencias
npm install

# 6. Iniciar Sanity Studio
npm run dev

# Studio disponible en http://localhost:3333
```

### Setup Frontend

```bash
# 1. Navegar al directorio frontend
cd 05-techstore/frontend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# 4. Iniciar servidor de desarrollo
npm run dev

# App disponible en http://localhost:3000
```

---

## 🔑 Variables de Entorno

### Frontend (.env.local)
```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_with_read_permissions

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📝 Scripts Disponibles

### Frontend
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm start            # Servidor de producción
npm run lint         # ESLint
```

### Sanity Studio
```bash
npm run dev          # Iniciar Studio (port 3333)
sanity deploy        # Deploy Studio
sanity dataset       # Gestionar datasets
```

---

## 🗄️ Schemas de Sanity

### Product
```typescript
{
  _type: 'product'
  name: string
  slug: { current: string }
  description: text
  price: number
  images: [image]
  category: reference -> category
  brand: string
  specs: {
    processor?: string
    ram?: string
    storage?: string
    display?: string
  }
  stock: number
  featured: boolean
  createdAt: datetime
}
```

### Category
```typescript
{
  _type: 'category'
  name: string
  slug: { current: string }
  description: text
  image: image
}
```

---

## 🔌 API Routes

### Checkout
```
POST /api/checkout
Body: { items: CartItem[] }
Response: { sessionId: string }
```

### Webhook (Stripe)
```
POST /api/webhook
Body: Stripe Event
Response: { received: true }
```

---

## 💳 Integración con Stripe

### Flujo de Checkout

1. **Cliente:** Añade productos al carrito
2. **Cliente:** Click en "Proceder al pago"
3. **Frontend:** POST a `/api/checkout` con items del carrito
4. **Backend:** Crea Stripe Checkout Session
5. **Backend:** Retorna `sessionId`
6. **Frontend:** Redirige a Stripe Checkout
7. **Stripe:** Usuario completa pago
8. **Stripe:** Webhook notifica al backend
9. **Backend:** Procesa orden (guardar en BD, enviar email, etc.)
10. **Stripe:** Redirige a `/checkout/success`

### Tarjetas de Prueba (Stripe Test Mode)

```
Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
3D Secure: 4000 0027 6000 3184

Fecha: Cualquier fecha futura
CVC: Cualquier 3 dígitos
```

---

## 🎨 Componentes Principales

### ProductCard.tsx
Tarjeta de producto con:
- Imagen optimizada (Next.js Image)
- Nombre y precio
- Botón "Añadir al carrito"
- Badge de "Destacado"

### CartSummary.tsx
Resumen del carrito:
- Lista de items
- Subtotal
- Impuestos (si aplica)
- Total
- Botón checkout

### CheckoutForm.tsx
Formulario de checkout:
- Datos de envío
- Validación
- Integración con Stripe Elements

---

## 📊 Queries GROQ

### Obtener todos los productos
```groq
*[_type == "product"] | order(createdAt desc) {
  _id,
  name,
  slug,
  price,
  "image": images[0].asset->url,
  category->{name}
}
```

### Obtener producto por slug
```groq
*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description,
  price,
  images,
  category->{name, slug},
  brand,
  specs,
  stock
}
```

### Productos destacados
```groq
*[_type == "product" && featured == true] | order(createdAt desc) [0...6]
```

---

## 🧪 Testing

```bash
# Frontend tests
npm test

# E2E tests
npm run test:e2e

# Stripe webhooks locales
stripe listen --forward-to localhost:3000/api/webhook
```

---

## 🚢 Deployment

### Sanity Studio
```bash
cd sanity-studio
sanity deploy
# Studio estará en https://your-project.sanity.studio
```

### Frontend (Vercel)

1. Conectar repositorio a Vercel
2. Configurar Root Directory: `05-techstore/frontend`
3. Añadir variables de entorno
4. Deploy automático

**IMPORTANTE:** Configurar Stripe Webhook para producción:
- Crear webhook en Stripe Dashboard
- URL: `https://tu-dominio.vercel.app/api/webhook`
- Eventos: `checkout.session.completed`

---

## 🔒 Seguridad

- ✅ Validación de formularios (Zod/Yup)
- ✅ Sanitización de inputs
- ✅ Verificación de webhook signature (Stripe)
- ✅ Variables sensibles en .env (nunca en código)
- ✅ HTTPS en producción
- ✅ Rate limiting en API routes
- ✅ Content Security Policy headers

---

## ⚡ Optimizaciones

- Next.js Image Optimization
- Static Generation para páginas de productos
- Incremental Static Regeneration (ISR)
- CDN (Vercel Edge Network)
- Lazy loading de componentes
- Debounce en búsquedas
- Caché de queries Sanity

---

## 🎯 Features Roadmap

### v1.0 (MVP)
- ✅ Catálogo de productos
- ✅ Carrito básico
- ✅ Checkout con Stripe

### v1.1
- 🔄 Búsqueda y filtros avanzados
- 🔄 Wishlist
- 🔄 Reviews de productos

### v2.0
- 📅 Autenticación de usuarios
- 📅 Historial de pedidos
- 📅 Sistema de cupones
- 📅 Envío de emails
- 📅 Multi-idioma

---

## 🐛 Troubleshooting

### Error: Cannot connect to Sanity
- Verificar PROJECT_ID y DATASET en .env
- Asegurar que el token tenga permisos

### Stripe webhook no funciona localmente
- Usar Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhook`
- Verificar STRIPE_WEBHOOK_SECRET

### Imágenes no cargan
- Configurar dominio de Sanity en next.config.js
- Verificar permisos de CORS en Sanity

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
- [Sanity.io Docs](https://www.sanity.io/docs)
- [Stripe Docs](https://stripe.com/docs)
- [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)

---

**Estado:** 🟡 En desarrollo
**Versión:** 0.1.0
**Última actualización:** 2025-11-12
