<script setup lang="ts">
import {Card} from "primevue"
import imgUrl from '../assets/underContruction.svg'

</script>

<template>
  <Card>
    <template #content>
      <img :src="imgUrl" width="auto" height="200" class="card-img">
      <h1 class="title">Under Construction</h1>
      <small class="text-muted d-flex justify-content-center">Our page is under construction, but we are ready to go! Special surprise for <you></you></small>
    </template>
  </Card>
</template>

<style scoped>
.card-img {
  text-align: center;
}
.title {
  text-align: center;
}
</style>
