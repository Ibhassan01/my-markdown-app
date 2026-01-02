<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="h-[calc(100vh-72px)] flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold">404</h1>
        <p class="mt-2 text-lg text-slate-600">Page not found</p>
        <RouterLink to="/" class="mt-4 text-violet-600 underline">Return home</RouterLink>
    </div>
</template>