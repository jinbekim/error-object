<template>
  <article>
    this is trigger name or age property required error

    <button @click="handleClick">trigger Error</button>
  </article>
</template>

<script setup lang="ts">
import {
  PropertyRequiredError,
  CardError,
  ValidationError,
} from "./CustomError";

const props = defineProps<{
  isError: boolean;
  index: number;
}>();

const handleClick = () => {
  // get random number between 1 or 2 or 3;
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    taskOne();
  } else if (random === 2) {
    taskTwo;
  } else {
    taskThree();
  }
};

const taskOne = () => {
  try {
    // {..} //
    throw new PropertyRequiredError("Name");
  } catch (e) {
    if (e instanceof PropertyRequiredError) {
      throw new CardError(`property error`, e);
    }
    throw e;
  }
};

const taskTwo = () => {
  try {
    throw new PropertyRequiredError("Age");
  } catch (e) {
    if (e instanceof PropertyRequiredError) {
      throw new CardError(`syntax error`, e);
    }
    throw e;
  }
};

const taskThree = () => {
  try {
    throw new ValidationError("Validation Error");
  } catch (e) {
    if (e instanceof PropertyRequiredError) {
      throw new CardError(`Validation Error`, e);
    }
    throw e;
  }
};
</script>

<style scoped>
article {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
