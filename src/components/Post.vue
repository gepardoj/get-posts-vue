<script setup lang="ts">
import type { IPost } from '../network/posts';
defineProps<{ post: IPost }>()
</script>

<template>
  <article class="col">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </article>
</template>

<style scoped></style>
