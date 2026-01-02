<script setup>
import { Codemirror } from 'vue-codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'

const props = defineProps({
    value: String
})

const emit = defineEmits(['update:value'])

const extensions = [markdown()]

function handleClear() {
    if (window.confirm("Are you sure you want to clear the editor?")) {
        emit('update:value', "")
    }
}
</script>

<template>
    <div class="flex flex-col h-full">
        <Codemirror :model-value="value" @update:model-value="(val) => emit('update:value', val)"
            placeholder="Type here..." :style="{ height: '100%', textAlign: 'left' }" :autofocus="true"
            :indent-with-tab="true" :tab-size="2" :extensions="extensions" :theme="oneDark"
            class="flex-1 border border-gray-300 rounded-md overflow-hidden text-left" />

        <div class="p-2 border-t flex justify-center bg-gray-50">
            <button @click="handleClear"
                class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors">
                Clear
            </button>
        </div>
    </div>
</template>