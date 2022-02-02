<template>
  <div class="mt-4">
    <h2 class="text-2xl font-bold text-center">Convertisseur de poids</h2>
    <p class="text-center text-xl">avec <span class="text-primary">Vue.js</span></p>

    <div class="py-4 w-1/2 flex justify-center mx-auto"><WeightIcon /></div>
    
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
  import WeightIcon from "../components/svg/WeightIcon.vue"
  export default {
    name: 'Weight',
    components: {
        WeightIcon
    },
    data() {
        return {
            unityArray: ["Tonne", "Kilogramme", "Gramme", "Milligramme", "Stone", "Livre", "Once"],
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
            case "Tonne":
              switch (this.unityResultSelected) {
                case "Kilogramme":
                  this.valueConverted = this.valueInput * 1000
                  break;
                case "Gramme":
                  this.valueConverted = this.valueInput *  1e+6
                  break;
                case "Milligramme":
                  this.valueConverted = this.valueInput *  1e+9
                  break;
                case "Stone":
                  this.valueConverted = this.valueInput *  157.5
                  break;
                case "Livre":
                  this.valueConverted = this.valueInput *  2205
                  break;
                case "Once":
                  this.valueConverted = this.valueInput *  35274
                  break;
              }
              break;
          
            case "Kilogramme":
              switch (this.unityResultSelected) {
                case "Tonne":
                  this.valueConverted = this.valueInput * 0.001
                  break;
                case "Gramme":
                  this.valueConverted = this.valueInput *  1000
                  break;
                case "Milligramme":
                  this.valueConverted = this.valueInput *  1e+6
                  break;
                case "Stone":
                  this.valueConverted = this.valueInput /  6.35
                  break;
                case "Livre":
                  this.valueConverted = this.valueInput *  2.205
                  break;
                case "Once":
                  this.valueConverted = this.valueInput *  35.274
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
