<template>
  <form class="flex flex-col bg-white m-5 p-6 border rounded-lg" @submit.prevent>
    <h4 class="text-3xl mb-4 text-center">Create post</h4>
    <Input
        v-model="post.title"
        placeholder="Post title"
    />
    <Textarea
        v-model="post.description"
        placeholder="Post description"
    />
    <Button @click="createPost">Create post</Button>
  </form>
</template>

<script lang="ts">

import Input from "./UI/Input.vue";
import Textarea from "./UI/Textarea.vue";

export default {
  components: { Textarea, Input },
  data() {
    return {
      post: {
        title: '', description: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('createPost', this.post)
      this.post = { ...this.post, title: '', description: '' }
    },
  }
}
</script>
