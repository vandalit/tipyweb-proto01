import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // Importar el router
import app from './firebaseConfig'; // Importar configuración de Firebase

createApp(App)
  .use(router) // Registrar el router
  .mount('#app');
