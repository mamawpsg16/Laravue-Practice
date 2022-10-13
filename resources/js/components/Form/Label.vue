<template>
    <div>
        <label :for="name" class="block font-medium text-md text-gray-700">{{ name }}</label>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    }
})


</script>

<style lang="scss" scoped>

</style>