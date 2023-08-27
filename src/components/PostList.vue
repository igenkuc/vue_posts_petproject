<template>
  <div v-if="posts.length">
    <h3 class="text-3xl text-center mt-3">Post List:</h3>
    <Post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post.id)"
    />
  </div>
  <h3 v-else class="text-3xl text-center">There's no posts yet</h3>
</template>

<script lang="ts">
import { Post as PostType } from "../types/post.ts";
import Post from "./Post.vue";

export default {
  components: { Post },
  props: {
    posts: {
      type: Array<PostType>,
      required: true,
    }
  }
}
</script>

