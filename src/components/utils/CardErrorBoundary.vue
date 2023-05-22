<template>
  <slot v-if="!hasError"></slot>
  <!-- or give fallback  -->
  <template v-else> {{ message }} </template>
</template>

<script setup lang="ts">
import { onErrorCaptured, type ComponentPublicInstance, ref } from "vue";
import { CardError } from "../CustomError";
const hasError = ref(false);
const message = ref("");

onErrorCaptured(
  (err: unknown, instance: ComponentPublicInstance | null, info: string) => {
    if (err instanceof CardError) {
      // only catch CardError
      // errror wrapper
      hasError.value = true;
      message.value = `Original Error: ${err.cause}`;
      return false; // stop propagation
    }
    return true;
  }
);
</script>
