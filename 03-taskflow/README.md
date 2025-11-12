# 📋 TaskFlow

Aplicación full-stack de gestión de proyectos tipo Kanban con autenticación, drag & drop y actualizaciones en tiempo real.

---

## 🎯 Objetivo del Proyecto

Crear una herramienta profesional de gestión de proyectos que permita a equipos organizar tareas en tableros Kanban, colaborar en tiempo real y mejorar la productividad.

---

## ✨ Características

- 📊 **Tableros Kanban:** Sistema drag & drop fluido
- 🔐 **Autenticación JWT:** Registro y login seguro
- 👥 **Gestión de equipos:** Múltiples usuarios por proyecto
- 🔄 **Tiempo real:** Actualizaciones instantáneas (Socket.io)
- 🏷️ **Etiquetas y prioridades:** Organización avanzada
- 📅 **Fechas límite:** Tracking de deadlines
- 💬 **Comentarios:** Colaboración en tareas
- 📱 **Responsive:** Funciona en todos los dispositivos

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React DnD** o **dnd-kit** (drag & drop)
- **React Query** (state management)
- **Axios** (HTTP client)

### Backend
- **Node.js** + **Express**
- **TypeScript**
- **MongoDB** + **Mongoose**
- **JWT** (autenticación)
- **Socket.io** (tiempo real)
- **Bcrypt** (hashing de contraseñas)

### Database
- **MongoDB Atlas** (tier gratuito)

### Deployment
- **Frontend:** Vercel
- **Backend:** Render (tier gratuito)

---

## 📁 Estructura del Proyecto

```
03-taskflow/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Modal.tsx
│   │   │   ├── boards/
│   │   │   │   ├── Board.tsx
│   │   │   │   ├── Column.tsx
│   │   │   │   └── BoardList.tsx
│   │   │   ├── tasks/
│   │   │   │   ├── TaskCard.tsx
│   │   │   │   ├── TaskModal.tsx
│   │   │   │   └── TaskForm.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   └── socket.ts
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useBoards.ts
│   │   │   └── useTasks.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── utils/
│   │   │   └── helpers.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   ├── boardController.ts
│   │   │   ├── taskController.ts
│   │   │   └── userController.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Board.ts
│   │   │   └── Task.ts
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   ├── boardRoutes.ts
│   │   │   └── taskRoutes.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── validation.ts
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   └── socket.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── helpers.ts
│   │   └── server.ts
│   ├── tests/
│   │   ├── auth.test.ts
│   │   └── boards.test.ts
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── nodemon.json
│
└── README.md
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ instalado
- MongoDB Atlas account (gratuita)
- npm o yarn

### Backend Setup

```bash
# 1. Navegar al directorio backend
cd 03-taskflow/backend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# 4. Iniciar servidor de desarrollo
npm run dev

# Servidor corriendo en http://localhost:5000
```

### Frontend Setup

```bash
# 1. Navegar al directorio frontend
cd 03-taskflow/frontend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crear .env.local con VITE_API_URL

# 4. Iniciar servidor de desarrollo
npm run dev

# Aplicación corriendo en http://localhost:5173
```

---

## 🔑 Variables de Entorno

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/taskflow
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

---

## 📝 Scripts Disponibles

### Backend
```bash
npm run dev          # Servidor de desarrollo (nodemon)
npm run build        # Compilar TypeScript
npm start            # Servidor de producción
npm test             # Ejecutar tests
npm run lint         # Ejecutar ESLint
```

### Frontend
```bash
npm run dev          # Servidor de desarrollo (Vite)
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Ejecutar ESLint
```

---

## 🗄️ Modelos de Datos

### User
```typescript
{
  _id: ObjectId
  name: string
  email: string (unique)
  password: string (hashed)
  avatar?: string
  createdAt: Date
  updatedAt: Date
}
```

### Board
```typescript
{
  _id: ObjectId
  title: string
  description?: string
  owner: ObjectId (ref: User)
  members: ObjectId[] (ref: User)
  columns: [
    {
      id: string
      title: string
      order: number
    }
  ]
  createdAt: Date
  updatedAt: Date
}
```

### Task
```typescript
{
  _id: ObjectId
  title: string
  description?: string
  board: ObjectId (ref: Board)
  column: string
  order: number
  assignees: ObjectId[] (ref: User)
  priority: 'low' | 'medium' | 'high'
  dueDate?: Date
  tags: string[]
  comments: [
    {
      user: ObjectId (ref: User)
      text: string
      createdAt: Date
    }
  ]
  createdAt: Date
  updatedAt: Date
}
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register    # Registro de usuario
POST   /api/auth/login       # Login
GET    /api/auth/me          # Usuario actual
```

### Boards
```
GET    /api/boards           # Listar boards del usuario
POST   /api/boards           # Crear board
GET    /api/boards/:id       # Obtener board por ID
PUT    /api/boards/:id       # Actualizar board
DELETE /api/boards/:id       # Eliminar board
POST   /api/boards/:id/members  # Añadir miembro
```

### Tasks
```
GET    /api/tasks?board=:id  # Listar tasks de un board
POST   /api/tasks            # Crear task
GET    /api/tasks/:id        # Obtener task por ID
PUT    /api/tasks/:id        # Actualizar task
DELETE /api/tasks/:id        # Eliminar task
PUT    /api/tasks/:id/move   # Mover task (drag & drop)
```

---

## 🔄 WebSocket Events

### Cliente → Servidor
```javascript
'join_board'       // Unirse a sala de board
'leave_board'      // Salir de sala de board
'task_updated'     // Tarea actualizada
'task_created'     // Tarea creada
'task_deleted'     // Tarea eliminada
```

### Servidor → Cliente
```javascript
'task_update'      // Notificar actualización
'task_create'      // Notificar creación
'task_delete'      // Notificar eliminación
'member_joined'    // Nuevo miembro
```

---

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Tests con cobertura
npm run test:coverage

# Frontend tests
cd frontend
npm test
```

---

## 🚢 Deployment

### Backend (Render)
1. Crear nuevo Web Service en Render
2. Conectar repositorio
3. Configurar:
   - Build Command: `cd backend && npm install && npm run build`
   - Start Command: `cd backend && npm start`
4. Añadir variables de entorno

### Frontend (Vercel)
1. Conectar repositorio a Vercel
2. Configurar Root Directory: `03-taskflow/frontend`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Añadir variables de entorno

---

## 🎨 Features Roadmap

### v1.0 (MVP)
- ✅ Autenticación JWT
- ✅ CRUD de boards y tasks
- ✅ Drag & drop básico

### v1.1
- 🔄 Tiempo real con Socket.io
- 🔄 Gestión de equipos
- 🔄 Comentarios en tareas

### v2.0
- 📅 Notificaciones
- 📅 Adjuntar archivos
- 📅 Historial de actividades
- 📅 Búsqueda avanzada

---

## 🐛 Troubleshooting

### Error de conexión a MongoDB
- Verificar MONGODB_URI en .env
- Asegurar IP whitelisting en MongoDB Atlas
- Revisar credenciales

### CORS errors
- Configurar FRONTEND_URL correctamente en backend
- Verificar headers CORS en Express

### Socket.io no conecta
- Verificar VITE_SOCKET_URL en frontend
- Revisar configuración de CORS en Socket.io

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
- [MongoDB Docs](https://docs.mongodb.com/)
- [Socket.io Docs](https://socket.io/docs/)
- [React DnD](https://react-dnd.github.io/react-dnd/)

---

**Estado:** 🟡 En desarrollo
**Versión:** 0.1.0
**Última actualización:** 2025-11-12
