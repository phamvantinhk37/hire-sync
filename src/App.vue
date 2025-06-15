<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div>
    <Header></Header>
    <!--  <nav>-->
    <!--    <RouterLink to="/">Dashboard Overview</RouterLink>-->
    <!--    <RouterLink to="/about">User Listing</RouterLink>-->
    <!--  </nav>-->
    <nav-bar></nav-bar>
    <main>
      <section></section>
    </main>
    <footer></footer>


    <RouterView />
  </div>
</template>

<style scoped>
</style>
