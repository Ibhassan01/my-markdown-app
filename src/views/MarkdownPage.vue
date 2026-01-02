<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import Editor from '../components/Editor.vue'
import Preview from '../components/Preview.vue'
import FileHandler from '../components/FileHandler.vue'
import { saveToLocal, loadFromLocal } from '../utils'

const markdown = ref(loadFromLocal() || "# Welcome\n\nStart typing Markdown on the left.")
const saving = ref(false)
let saveTimeout

watch(markdown, (newVal) => {
    saving.value = true
    clearTimeout(saveTimeout)

    saveTimeout = setTimeout(() => {
        saveToLocal(newVal)
        saving.value = false
    }, 500)
})

onBeforeUnmount(() => {
    clearTimeout(saveTimeout)
})
</script>

<template>
    <main class="max-w-6xl my-4 mx-auto py-4 px-3">
        <div class="flex items-center justify-between mb-3">
            <h1 class="text-xl font-semibold">Live Markdown Editor</h1>
            <div class="text-sm text-slate-600">
                {{ saving ? "Saving..." : "✓ Saved locally" }}
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4 h-screen">
            <section class="md:w-1/2 h-96 md:h-full flex flex-col">
                <div
                    class="flex items-center justify-between p-2 bg-gray-50 border border-b-0 border-orange-500 rounded-t-md">
                    <div class="text-sm font-medium text-slate-700">Editor</div>
                    <FileHandler v-model:value="markdown" />
                </div>
                <div class="flex-1 rounded-b-md overflow-hidden">
                    <Editor v-model:value="markdown" />
                </div>
            </section>

            <section class="md:w-1/2 h-96 md:h-full flex flex-col">
                <div
                    class="flex items-center justify-between p-3 bg-gray-50 border border-orange-500 border-b-0 rounded-t-md">
                    <div class="text-sm font-medium text-slate-700">Preview</div>
                    <div class="text-xs text-slate-500">Rendering in real time</div>
                </div>
                <div class="flex-1 overflow-hidden">
                    <Preview :markdown="markdown" />
                </div>
            </section>
        </div>
    </main>
</template>