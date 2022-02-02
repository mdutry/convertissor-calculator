<template>
  <div class="mt-4">
    <h2 class="text-2xl font-bold text-center">This is a temperature page</h2>
    <p class="text-center text-xl">avec <span class="text-primary">Vue.js</span></p>
    
    <div>
        <input type="number" v-model="valueInput" @change="convertedTemperature" class="border border-black" />
        <select class="border border-black" v-model="unitySelected" @change="convertedTemperature">
            <option v-for="unity in unityArray" :value="unity" :key="unity">
                {{ unity }}
            </option>
        </select>
    </div>
    
    <div>
        <input type="number" :value="valueConverted" disabled class="border border-black" />
        <select class="border border-black" v-model="unityResultSelected" @change="convertedTemperature">
            <option v-for="unity in unityResultFilter" :value="unity" :key="unity">
                {{ unity }}
            </option>
        </select>
    </div>
  </div>
</template>

<script>
  // import InputAndUnity from "../components/InputAndUnity.vue" 
  export default {
    name: 'Temperature',
    data() {
        return {
            unityArray: ["Celsius", "Fahrenheit", "Kelvin"],
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
            case "Celsius":
              if (this.unityResultSelected === "Fahrenheit") {
                this.valueConverted = (this.valueInput * 9/5) + 32
              } else if (this.unityResultSelected === "Kelvin") {
                this.valueConverted = this.valueInput + 273.15
              }
              break;
          
            case "Fahrenheit":
              if (this.unityResultSelected === "Celsius") {
                this.valueConverted = (this.valueInput - 32) * 5/9
              } else if (this.unityResultSelected === "Kelvin") {
                this.valueConverted = (this.valueInput - 32) * 5/9 + 273.15
              }
              break;
          
            case "Kelvin":
              if (this.unityResultSelected === "Fahrenheit") {
                this.valueConverted = (this.valueInput - 273.15) * 9/5 + 32
              } else if (this.unityResultSelected === "Celsius") {
                this.valueConverted = this.valueInput - 273.15
              }
              break;
          
            default:
              this.valueConverted = 0
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
