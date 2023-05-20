
import ErrorBoundary from './utils/ErrorBoundary.vue';

<template>
        <article>
            this is Card
        </article>
</template>

<script setup lang="ts">

const props = defineProps<{
    isError: boolean;
    index: number;
}>();

if (props.isError) {
    throw new Error('Error in Card');
}
</script>

<style scoped>
article {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);  
}
</style>
