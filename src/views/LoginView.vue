<template>
  <div class="login">
    <h1>Inicio de Sesión</h1>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Correo electrónico" required />
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getUserRole } from "../firebaseUtils"; // Importa la función para obtener el rol

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handleLogin() {
      const auth = getAuth();
      try {
        // Iniciar sesión con Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        // Obtener el rol del usuario desde Firestore
        const role = await getUserRole(user.uid);

        // Redirigir según el rol del usuario
        if (role === "admin") {
          this.$router.push("/admin-dashboard");
        } else if (role === "developer") {
          this.$router.push("/developer-dashboard");
        } else if (role === "evaluator") {
          this.$router.push("/evaluator-dashboard");
        } else {
          this.error = "Rol no asignado. Contacta al administrador.";
        }
      } catch (err) {
        this.error = "Error al iniciar sesión. Verifica tus credenciales.";
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
