<template>
  <div class="mt-4">
    <h2 class="text-2xl font-bold text-center">Convertisseur</h2>
    <p class="text-center text-xl">avec <span class="text-primary">Vue.js</span></p>
    <div class="px-8 py-4 grid grid-cols-3 gap-8 mt-4">
      <BlockItem title="Temperature" />
      <BlockItem title="Length" />
      <BlockItem title="Weight" />
    </div>
  </div>
</template>

<script>
  import BlockItem from "../components/BlockItem.vue" 
  export default {
    name: 'Home',
    components: {
      BlockItem
    }
  }
</script>
