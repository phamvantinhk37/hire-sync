<script setup lang="ts">
import {Card} from "primevue"
import { useRoute } from 'vue-router';

defineProps({
  title: String,
  subTitle: {
    type: String,
    required: false
  }
})
const route = useRoute();
</script>

<template>
  <Card class="card-container">
    <template #title>
      {{route.meta.title}}
    </template>
    <template #content>
      <small class="m-0 whitespace-nowrap text-muted max-w-full">
        {{route.meta.subTitle}}
      </small>
    </template>
  </Card>
</template>

<style>
  .card-container .p-card-body {
    gap: 0 !important;
    padding: 1rem !important;
  }
</style>
