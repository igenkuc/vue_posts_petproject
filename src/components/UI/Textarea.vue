<template>
  <textarea
      :value="modelValue"
      class="h-16 p-2 mb-4 border outline-none"
      @input="updateTextarea"
  ></textarea>
</template>

<script lang="ts">
export default {
  name: 'Textarea',
  props: {
    modelValue: [String]
  },
  methods: {
    updateTextarea(event: InputEvent) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
    }
  }
}
</script>
