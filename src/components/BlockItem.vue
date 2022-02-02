<template>
    <div class="cursor-pointer flex flex-col justify-center items-center p-4 bg-primary rounded-xl" @click="redirectTo">
        <div v-if="title === 'Weight'" class="flex flex-col justify-center items-center">
            <WeightIcon />
        </div>
        <div v-else-if="title === 'Length'" class="flex flex-col justify-center items-center">
            <LengthIcon />
        </div>
        <div v-else-if="title === 'Temperature'" class="flex flex-col justify-center items-center">
            <TemperatureIcon />
        </div>
        <h3 class="mt-4 font-bold text-xl uppercase">{{ title }}</h3>
    </div>
</template>

<script>
    import LengthIcon from './svg/LengthIcon.vue'
    import TemperatureIcon from "./svg/TemperatureIcon.vue"
    import WeightIcon from "./svg/WeightIcon.vue"
    export default {
        components: {
            TemperatureIcon,
            LengthIcon,
            WeightIcon
        },
        props: {
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            redirectTo() {
                this.$router.push({
                    path: `/${this.title.toLowerCase()}`
                })
            }
        }
    }
</script>