<script setup lang="ts">
import { ref } from 'vue';
import { type IPost } from './stores/posts';
import Post from './components/Post.vue';
import { getData } from './stores/stores';

const posts = ref<IPost[]>([]);
getData().then(res => posts.value = res.posts);
</script>

<template>
  <section class="row row-cols-4 py-5">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<style scoped></style>
