<script>
    export default {
        name: 'MenuItem',
    }
</script>

<template>
  <div id="menu-item">
    <router-link to="/">Home</router-link> |
    <router-link to="/temperature">Temperature</router-link> |
    <router-link to="/length">Length</router-link> |
    <router-link to="/weight">Weight</router-link> |
  </div>
</template>

<style>
    #nav {
    padding: 30px;
    }

    #nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    #nav a.router-link-exact-active {
    color: #42b983;
    }
</style>