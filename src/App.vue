<script setup lang="ts">
import { ref } from 'vue';
import { getPosts, type IPost } from './network/posts';
import Post from './components/Post.vue';

const posts = ref<IPost[]>([])
getPosts().then(res => posts.value = res).then(res => console.log(res));
</script>

<template>
  <section class="row row-cols-3 py-5">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<style scoped></style>
