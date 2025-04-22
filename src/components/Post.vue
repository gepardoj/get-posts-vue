<script setup lang="ts">
import type { IPostWithAuthor } from '../stores/posts';
defineProps<{ post: IPostWithAuthor }>()
</script>

<template>
  <article class="col mb-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title text-primary">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <p class="card-text"><small class="text-muted">{{ post.author }}</small></p>
      </div>
    </div>
  </article>
</template>