<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import HeadingCard from "@/components/HeadingCard.vue"
</script>

<template>
  <div class="d-flex h-100">
    <nav-bar class="float-start"></nav-bar>
    <main class="float-end content w-100 overflow-auto">
      <HeadingCard :title="'Dashboard'" class="mb-4"></HeadingCard>
      <RouterView />
    </main>
  </div>
  <footer></footer>



</template>

<style scoped>
  .content {
    height: 100%;
    padding: 12px;
  }
</style>
