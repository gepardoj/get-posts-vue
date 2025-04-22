<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Post from './components/Post.vue';
import Search from './components/Search.vue';
import { usePostsStore } from './stores/store';

const store = usePostsStore();
const { isLoading, postsWithAuthors } = storeToRefs(store);
</script>

<template>
  <Search />
  <div v-if="isLoading" class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <section class="row row-cols-md-3 py-5">
    <Post v-for="post in postsWithAuthors" :key="post.id" :post="post" />
  </section>
</template>

<style scoped></style>
