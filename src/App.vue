<template>
  <div class="app">
    <MenuItem />
    <router-view />
  </div>
</template>

<script>
  import MenuItem from './components/MenuItem.vue'
  export default {
    name: "App",
    components: {
      MenuItem
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
