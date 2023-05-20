<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>
  <main>
    
    <RouterView />
  </main>

</template>

<style scoped>
main {
  padding: 3rem;
  text-align: center;
  width: 1080px;
}
</style>
