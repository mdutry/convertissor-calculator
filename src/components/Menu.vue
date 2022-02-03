<script>
    export default {
        name: 'Menu',
    }
</script>

<template>
  <div id="nav" class="flex justify-center items-center py-4">
    <router-link to="/" class="mx-2 font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    </router-link> |
    <router-link to="/temperature" class="mx-2 font-bold">Temperature</router-link> |
    <router-link to="/length" class="mx-2 font-bold">Length</router-link> |
    <router-link to="/weight" class="mx-2 font-bold">Weight</router-link> |
    <router-link to="/speed" class="mx-2 font-bold">Speed</router-link>
  </div>
</template>

<style>
    #nav a {
      color: #2c3e50;
    }

    #nav a.router-link-exact-active {
      color: #42b983;
    }
</style>