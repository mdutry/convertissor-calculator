<template>
  <div class="mt-4">
    <h2 class="text-2xl font-bold text-center">Convertisseur de vitesse</h2>
    <p class="text-center text-xl">avec <span class="text-primary">Vue.js</span></p>

    <div class="py-4 w-1/2 flex justify-center mx-auto"><SpeedIcon /></div>
    
    <div class="py-4 flex justify-around items-center">
      <div class="flex">
          <input type="number" v-model="valueInput" @change="convertedTemperature" class="border-2 border-primary px-2" />
          <span class="bg-primary inline-flex px-2">
            <select class="bg-primary" v-model="unitySelected" @change="convertedTemperature">
                <option class="h-full" v-for="unity in unityArray" :value="unity" :key="unity">
                    {{ unity }}
                </option>
            </select>
          </span>
      </div>
      
      <div class="flex">
          <input type="number" :value="parseFloat(valueConverted.toFixed(6))" disabled class="border-2 border-primary px-2" />
          <span class="bg-primary inline-flex px-2">
            <select class="bg-primary" v-model="unityResultSelected" @change="convertedTemperature">
                <option v-for="unity in unityResultFilter" :value="unity" :key="unity">
                    {{ unity }}
                </option>
            </select>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  // import InputAndUnity from "../components/InputAndUnity.vue"
  import SpeedIcon from "../components/svg/SpeedIcon.vue"
  export default {
    name: 'Speed',
    components: {
        SpeedIcon
    },
    data() {
        return {
            unityArray: ["Mille par heure", "Pied par seconde", "Kilomètre par heure", "Mètre par seconde", "Noeud"],
            valueInput: 0,
            valueConverted: 0,
            unitySelected: "",
            unityResultSelected: ""
        }
    },
    computed: {
      unityResultFilter() {
        return this.unityArray.filter(unity => unity != this.unitySelected)
      }
    },
    methods: {
      convertedTemperature() {
        if (this.valueInput && this.unitySelected && this.unityResultSelected) {
          switch (this.unitySelected) {
            case "Mille par heure":
              switch (this.unityResultSelected) {
                case "Pied par seconde":
                  this.valueConverted = this.valueInput * 1.467
                  break;
                case "Kilomètre par heure":
                  this.valueConverted = this.valueInput * 1.609
                  break;
                case "Mètre par seconde":
                  this.valueConverted = this.valueInput / 2.237
                  break;
                case "Noeud":
                  this.valueConverted = this.valueInput / 1.151
                  break;
              }
              break;

            case "Pied par seconde":
              switch (this.unityResultSelected) {
                case "Mille par heure":
                  this.valueConverted = this.valueInput / 1.467
                  break;
                case "Kilomètre par heure":
                  this.valueConverted = this.valueInput * 1.097
                  break;
                case "Mètre par seconde":
                  this.valueConverted = this.valueInput / 3.281
                  break;
                case "Noeud":
                  this.valueConverted = this.valueInput / 1.688
                  break;
              }
              break;

            case "Kilomètre par heure":
              switch (this.unityResultSelected) {
                case "Mille par heure":
                  this.valueConverted = this.valueInput / 1.609
                  break;
                case "Pied par seconde":
                  this.valueConverted = this.valueInput / 1.097
                  break;
                case "Mètre par seconde":
                  this.valueConverted = this.valueInput / 3.6
                  break;
                case "Noeud":
                  this.valueConverted = this.valueInput / 1.852
                  break;
              }
              break;

            case "Mètre par seconde":
              switch (this.unityResultSelected) {
                case "Mille par heure":
                  this.valueConverted = this.valueInput * 2.237
                  break;
                case "Pied par seconde":
                  this.valueConverted = this.valueInput * 3.281
                  break;
                case "Kilomètre par heure":
                  this.valueConverted = this.valueInput * 3.6
                  break;
                case "Noeud":
                  this.valueConverted = this.valueInput * 1.944
                  break;
              }
              break;

            case "Noeud":
              switch (this.unityResultSelected) {
                case "Mille par heure":
                  this.valueConverted = this.valueInput / 1.151
                  break;
                case "Pied par seconde":
                  this.valueConverted = this.valueInput / 1.688
                  break;
                case "Kilomètre par heure":
                  this.valueConverted = this.valueInput * 1.852
                  break;
                case "Mètre par seconde":
                  this.valueConverted = this.valueInput / 1.944
                  break;
              }
              break;
          }
        }
      }
    }
    // components: {
    //   InputAndUnity
    // }
  }
</script>
