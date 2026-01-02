<script setup>
import { ref } from "vue";

const props = defineProps({
    value: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["update:value"]);

const inputRef = ref(null);

function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        emit("update:value", String(reader.result || ""));
    };
    reader.readAsText(file);
}

function handleDownload() {
    const blob = new Blob([props.value || ""], {
        type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.md";
    a.click();
    URL.revokeObjectURL(url);
}
</script>

<template>
    <div class="flex gap-2 items-center">
        <input ref="inputRef" type="file" accept=".md,text/markdown" @change="handleUpload" class="hidden" />
        <button @click="inputRef?.click()" class="px-2 py-1 bg-slate-100 hover:bg-orange-400 ease-linear transition hover:text-white text-sm rounded-md border"
            aria-label="Upload markdown file">
            Upload .md
        </button>

        <button @click="handleDownload" class="px-2 py-1 bg-orange-600 hover:bg-orange-400 ease-linear transition text-sm text-white rounded-md"
            aria-label="Download markdown file">
            Download .md
        </button>
    </div>
</template>
