<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Heading from "@/components/Heading.vue"
</script>

<template>
  <div class="d-flex h-100">
    <nav-bar class="float-start"></nav-bar>
    <main class="float-end content w-100">
      <Heading :title="'Dashboard'" class="mb-4"></Heading>
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
