<template>
  <div class="mt-4">
    <h2 class="text-2xl font-bold text-center">Convertisseur de température</h2>
    <p class="text-center text-xl">avec <span class="text-primary">Vue.js</span></p>

    <div class="py-4 w-1/2 flex justify-center mx-auto"><TemperatureIcon /></div>
    
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
  import TemperatureIcon from "../components/svg/TemperatureIcon.vue"
  export default {
    name: 'Temperature',
    components: {
        TemperatureIcon
    },
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
