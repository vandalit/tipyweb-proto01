# Proyecto: Sistema de Gestión con Roles

Este proyecto es una plataforma educativa diseñada para gestionar usuarios con roles específicos y mostrar dashboards personalizados. A continuación, se describen los pasos desarrollados para implementar el proyecto, junto con las credenciales de prueba.

---

## **Tecnologías Utilizadas**

1. **Frontend**: Vue 3
2. **Backend**: Firebase (Authentication, Firestore, Storage)
3. **Librerías Clave**:
   - Firebase SDK
   - Vue Router

---

## **Resumen de Desarrollo**

### **1. Configuración del Entorno**
1. Instalación de Vue 3 con Vite:
   ```bash
   npm create vite@latest nombre-del-proyecto --template vue
   cd nombre-del-proyecto
   npm install
   ```
2. Instalación de Firebase:
   ```bash
   npm install firebase
   ```

---

### **2. Configuración de Firebase**

1. **Firebase Authentication:**
   - Activación del método de inicio de sesión por correo y contraseña.

2. **Firestore Database:**
   - Creación de la colección `users`.
   - Inserción de documentos con los roles `admin`, `developer` y `evaluator`.

3. **Firebase Hosting:**
   - Configuración de Firebase CLI y despliegue del proyecto:
     ```bash
     firebase login
     firebase init hosting
     npm run build
     firebase deploy
     ```

---

### **3. Desarrollo de Funcionalidades**

#### **Login con Firebase Authentication**
- Implementación de un formulario para iniciar sesión.
- Validación de credenciales con Firebase Authentication.
- Redirección basada en el rol del usuario obtenido de Firestore.

#### **Roles y Dashboards Personalizados**
- Creación de dashboards individuales para los roles:
  - Administrador (`admin`)
  - Desarrollador (`developer`)
  - Evaluador (`evaluator`)

#### **Protección de Rutas con Vue Router**
- Configuración de rutas protegidas para asegurar que solo usuarios autenticados accedan a sus respectivas vistas.

---

## **Usuarios de Prueba**

A continuación, se incluyen las credenciales de prueba para los tres roles configurados en la plataforma:

### **Administrador**
- **Email:** admin@example.com
- **Contraseña:** admin123

### **Desarrollador**
- **Email:** developer@example.com
- **Contraseña:** dev123

### **Evaluador**
- **Email:** evaluator@example.com
- **Contraseña:** eval123

---

## **Cómo Probar la Plataforma**

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd nombre-del-proyecto
   npm install
   npm run dev
   ```

2. **Abrir el proyecto:**
   - Acceder a `http://localhost:3000` en el navegador.

3. **Iniciar sesión:**
   - Usar las credenciales de los usuarios de prueba para verificar el acceso y redirección a los dashboards personalizados.

---

## **Estructura del Proyecto**

```
src/
├── components/       # Componentes reutilizables
├── views/            # Vistas individuales (Login, Dashboards)
├── router/           # Configuración de rutas
├── firebaseConfig.js # Configuración de Firebase
├── firebaseUtils.js  # Funciones auxiliares para Firestore
└── main.js           # Archivo principal
```

---

## **Próximos Pasos**

1. Agregar funcionalidades específicas para cada dashboard.
2. Mejorar la experiencia de usuario con estilos avanzados y microinteracciones.
3. Implementar pruebas de integración y validación de seguridad.

---

### **Nota:**
Este proyecto está diseñado con fines educativos y es ideal para aprender sobre la integración de Vue con Firebase y la gestión de roles en aplicaciones web.


URL:  [text](https://tipyweb-proto.web.app)