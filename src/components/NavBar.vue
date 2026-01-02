<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { FilePlus } from 'lucide-vue-next'

const route = useRoute()
</script>

<template>
    <nav class="bg-white border-b border-orange-500">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <RouterLink to="/" class="flex items-center gap-2">
                    <FilePlus class="w-6 h-6 text-orange-600" />
                    <span class="font-semibold text-lg">Markdown Preview</span>
                </RouterLink>
            </div>

            <div class="flex items-center gap-4 text-sm">
                <RouterLink to="/" :class="route.path === '/' ? 'text-orange-600' : 'text-slate-600'">
                    Editor
                </RouterLink>
                <RouterLink to="/error-test" :class="route.path === '/error-test' ? 'text-red-600' : 'text-slate-600'">
                    Error Test
                </RouterLink>
            </div>
        </div>
    </nav>
</template>