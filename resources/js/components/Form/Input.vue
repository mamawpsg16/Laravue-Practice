<template>
    <input
      class="p-1"
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