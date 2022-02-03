<template>
  <div class="mt-4">
    <h2 class="text-2xl font-bold text-center">Convertisseur de longueur</h2>
    <p class="text-center text-xl">avec <span class="text-primary">Vue.js</span></p>

    <div class="py-4 w-1/2 flex justify-center mx-auto"><LengthIcon /></div>
    
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
  import LengthIcon from "../components/svg/LengthIcon.vue"
  export default {
    name: 'Length',
    components: {
        LengthIcon
    },
    data() {
        return {
            unityArray: ["Kilomètre", "Mètre", "Centimètre", "Millimètre", "Micromètre", "Nanomètre", "Mile", "Yard", "Pied", "Pouce", "Mille marin"],
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
            case "Kilomètre":
              switch (this.unityResultSelected) {
                case "Mètre":
                  this.valueConverted = this.valueInput * 1000
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput * 100000
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 1e+6
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 1e+9
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput * 1e+12
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 1.609
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput * 1094
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput * 3281
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput * 39370
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 1.852
                  break;
              }
              break;

            case "Mètre":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 1000
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput * 100
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 1000
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 1e+6
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput * 1e+9
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 1609
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput * 1.094
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput * 3.281
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput * 39.37
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 1852
                  break;
              }
              break;

            case "Centimètre":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 100000
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput / 100
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 10
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 10000
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput * 1e+7
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 160934
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput / 91.44
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput / 30.48
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput / 2.54
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 185200
                  break;
              }
              break;

            case "Millimètre":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 1e+6
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput / 1000
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput / 10
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 1000
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput * 1e+6
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 1,609e+6
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput / 914
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput / 305
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput / 25.4
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 1.852e+6
                  break;
              }
              break;

            case "Micromètre":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 1e+9
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput / 1e+6
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput / 10000
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput / 1000
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput * 1000
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 1,609e+9
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput / 914400
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput / 304800
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput / 25400
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 1.852e+9
                  break;
              }
              break;

            case "Nanomètre":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 1e+12
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput / 1e+9
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput / 1e+7
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput / 1e+6
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput / 1000
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 1.609e+12
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput / 9.144e+8
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput / 3.048e+8
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput / 2.54e+7
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 1.852e+12
                  break;
              }
              break;

            case "Mile":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput * 1.609
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput * 1609
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput * 160934
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 1.609e+6
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 1.609e+12
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput * 1.609e+12
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput * 1760
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput * 5280
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput * 63360
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 1.151
                  break;
              }
              break;

            case "Yard":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 1094
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput / 1.094
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput * 91.44
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 914
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 914400
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput / 9.144e+8
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 1760
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput * 3
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput * 36
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 2025.37
                  break;
              }
              break;

            case "Pied":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 3281
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput / 3.281
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput * 30.48
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 305
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 304800
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput / 3.048e+8
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 5280
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput / 3
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput * 12
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 6076.12
                  break;
              }
              break;

            case "Pouce":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput / 39370
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput / 39.37
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput * 2.54
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 25.4
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 25400
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput / 2.54e+7
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput / 63360
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput / 36
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput / 12
                  break;
                case "Mille marin":
                  this.valueConverted = this.valueInput / 72913.4
                  break;
              }
              break;

            case "Mille marin":
              switch (this.unityResultSelected) {
                case "Kilomètre":
                  this.valueConverted = this.valueInput * 1.852
                  break;
                case "Mètre":
                  this.valueConverted = this.valueInput * 1852
                  break;
                case "Centimètre":
                  this.valueConverted = this.valueInput * 185200
                  break;
                case "Millimètre":
                  this.valueConverted = this.valueInput * 1.852e+6
                  break;
                case "Micromètre":
                  this.valueConverted = this.valueInput * 1.852e+9
                  break;
                case "Nanomètre":
                  this.valueConverted = this.valueInput * 1.852e+12
                  break;
                case "Mile":
                  this.valueConverted = this.valueInput * 1.152
                  break;
                case "Yard":
                  this.valueConverted = this.valueInput * 2025.37
                  break;
                case "Pied":
                  this.valueConverted = this.valueInput * 6076.12
                  break;
                case "Pouce":
                  this.valueConverted = this.valueInput * 72913.4
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
