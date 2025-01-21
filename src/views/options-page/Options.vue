<template>
  <main>
    <h1>{{ message }}</h1>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref<string>("Options");
</script>

<style scoped lang="scss"></style>
