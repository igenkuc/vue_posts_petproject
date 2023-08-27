<template>
  <div class="flex flex-col items-center bg-gray-100">
    <div class="w-1/3">
      <PostList :posts="posts" @remove="removePost" />
    </div>
  </div>
  <Modal>
    <PostForm @createPost="createPost" />
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import Modal from "./components/UI/Modal.vue";
import { Post } from "./types/post.ts";

export default defineComponent({
      components: {
        Modal,
        PostList, PostForm
      },
      data() {
        return {
          posts: [
            { id: 0, title: 'JavaScript', description: 'Очень интересное описание поста' },
            { id: 1, title: 'TypeScript', description: 'Очень интересное описание поста' },
            { id: 2, title: 'PHP', description: 'Очень интересное описание поста' },
            { id: 3, title: 'Python', description: 'Очень интересное описание поста' },
            { id: 4, title: 'Golang', description: 'Очень интересное описание поста' },
          ] as Post[],
        };
      },
      methods: {
        createPost(post: Post) {
          this.posts.push(post)
        },
        removePost(id: Number) {
          this.posts = this.posts.filter(post => post.id !== id)
        }
      },
    }
)
</script>