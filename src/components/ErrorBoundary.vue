<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)

onErrorCaptured((err, instance, info) => {
    console.error("Error caught by ErrorBoundary:", err, info)
    hasError.value = true
    return false
})

function handleGoHome() {
    window.location.href = "/"
}
</script>

<template>
    <div v-if="hasError" class="flex flex-col items-center justify-center h-screen text-center">
        <h1 class="text-2xl font-bold text-red-600 mb-4">
            Something went wrong.
        </h1>
        <p class="mb-4">An unexpected error has occurred.</p>
        <button @click="handleGoHome" class="px-4 py-2 bg-red-600 text-white rounded-md">
            Go Home
        </button>
    </div>
    <slot v-else></slot>
</template>