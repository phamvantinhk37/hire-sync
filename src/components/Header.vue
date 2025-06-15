<template>
  <div class="header-container bg-primary-500">
    <Button @click="toggleTheme">Toggle Theme</Button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
import {Button} from "primevue";

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark', isDark.value);
}
onMounted(() => {
  if (window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches) {
    isDark.value = true;
    document.body.classList.add('dark');
  } else {
    isDark.value = false;
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
});
</script>
<style scoped>
  .header-container {
    height: 4rem;
    width: 100%;
    position: fixed;
  }
</style>
