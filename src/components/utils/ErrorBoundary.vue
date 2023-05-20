<template>
  <slot v-if="!hasError"></slot>
  <template v-else>
    this is error card
  </template>
</template>

<script setup lang="ts">
import { onErrorCaptured, type ComponentPublicInstance, ref } from 'vue';
const hasError = ref(false);

onErrorCaptured((err: unknown, instance: ComponentPublicInstance | null, info: string) => {
  hasError.value = true;
  return false;
});

</script>