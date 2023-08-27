<template>
  <div class="relative my-4 p-4 border bg-white rounded-lg shadow-md">
    <p class="text-lg font-semibold mb-1">Название: {{ post.id + ') ' + post.title }}</p>
    <p class="text-gray-700">{{ post.description }}</p>
    <button
        class="absolute right-0 top-0 m-1 bg-transparent"
        @click="$emit('remove', post.id)"
    >
      <img alt="delete icon" src="../assets/delete.svg" width="23">
    </button>
  </div>
</template>

<script lang="ts">
import { Post } from '../types/post.ts'

export default {
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    }
  },
}
</script>
