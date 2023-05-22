<template>
  <section class="grid-view">
    <!-- iterating 10 times -->
    <CardErrorBoundary v-for="key in 10" :key="key">
      <Card v-bind:isError="key === 3" :index="key" />
    </CardErrorBoundary>
  </section>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import CardErrorBoundary from "@/components/utils/CardErrorBoundary.vue";
import { onErrorCaptured } from "vue";

onErrorCaptured((err, vm, info) => {
  console.log(err, vm, info);
  return false;
});
</script>

<style scoped>
.grid-view {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
}
</style>
