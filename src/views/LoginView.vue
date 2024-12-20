<template>
  <div class="login">
    <h1>Inicio de Sesión</h1>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Correo electrónico" />
      <input type="password" v-model="password" placeholder="Contraseña" />
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/dashboard");
      } catch (err) {
        this.error = "Credenciales incorrectas. Intente nuevamente.";
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
