<template>
    <input
      class="
        w-2/6
        border
        border-black
        focus:border-indigo-300
        focus:ring
        focus:ring-indigo-200
        focus:ring-opacity-50
        rounded-md
        shadow-sm
      "
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