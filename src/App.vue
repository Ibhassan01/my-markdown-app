<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
</script>

<template>
  <div class="p-2">
    <ErrorBoundary>
      <Navbar />
      <RouterView />
    </ErrorBoundary>
  </div>
</template>