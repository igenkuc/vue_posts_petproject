<template>
  <input
      :value="modelValue"
      class="p-2 mb-2 border outline-none"
      @input="updateInput"
  >
</template>

<script lang="ts">
export default {
  name: 'Input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event: InputEvent) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
    },
  },
}
</script>
