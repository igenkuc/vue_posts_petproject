<template>
  <div v-if="isShown" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div class="w-1/3  bg-white p-6 rounded-md shadow-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isShown: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
