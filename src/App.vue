<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Inicio de Sesión</router-link></li>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Estilo básico */
body {
  font-family: Arial, sans-serif;
  /* margin: 0; */
  padding: 0;
}

header {
  background-color: #333;
  padding: 10px;
  color: white;
  text-align: center;
}

header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

header nav ul li {
  display: inline;
}

header nav ul li a {
  color: white;
  text-decoration: none;
}

header nav ul li a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
  text-align: center;
}
</style>
