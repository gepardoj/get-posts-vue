<script setup lang="ts">
import type { IPost } from '../stores/posts';
defineProps<{ post: IPost }>()
</script>

<template>
  <article class="m-3 col card shadow-sm">
    <div class="card-body row">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <p class="card-text"><small class="text-muted">{{ post.author }}</small></p>
    </div>
  </article>
</template>

<style scoped></style>
