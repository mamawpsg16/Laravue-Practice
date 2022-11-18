<template>
    <input
      class="bg-gray-300 p-2 text-black mb-2 rounded  focus:ring  shadow-sm"
      :id="id"
      :placeholder = placeholder
      :value="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>

defineProps({
  modelValue: [String, Date, Number],
  placeholder: String, default:null,
  id: String,
  type:String
});

defineEmits(['update:modelValue']);


</script>

<style lang="scss" scoped>
</style>