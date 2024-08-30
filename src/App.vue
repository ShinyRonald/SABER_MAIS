<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.app-container {
  min-height: 100vh;
  background-color: #f0f0f0; /* Tema claro padrão */
  color: #333;
  transition: background-color 0.3s;
}
</style>