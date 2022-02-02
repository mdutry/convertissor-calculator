<template>
    <div>
        <input v-if="!disabled" type="text" v-model="value" class="border border-black" />
        <input v-else-if="disabled" type="text" :value="exemple" disabled class="border border-black" />
        <select class="border border-black" v-model="unitySelected">
            <option v-for="unity in unityArray" :value="unity" :key="unity">
                {{ unity }}
            </option>
        </select>
        <p>{{ selected }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "valueInput",
            unitySelected: ""
        }
    },
    props: {
        unityArray: {
            type: Array,
            required: true
        },
        disabled: {
            required: true
        },
        valueInput: {
            type: Number
        }
    }
}
</script>