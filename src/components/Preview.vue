<script setup>
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps({
    markdown: String
})

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})

const renderedMarkdown = computed(() => md.render(props.markdown || ''))
</script>

<template>
    <div class="h-full p-4 bg-[#282c34] overflow-auto border rounded-md text-left">
        <div :class="$style.markdown" v-html="renderedMarkdown"></div>
    </div>
</template>

<style module>

.markdown {
    color: #abb2bf;
}
.markdown h1{
    font-size: 1.3rem;
}
.markdown h2{
    font-size: 1.1rem;
}
.markdown h1,
.markdown h2,
.markdown h3 {
    color: #e06c75;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}

.markdown img {
    max-width: 100%;
    display: block;
}
.markdown code{
    background-color: black;
    color: green;
    padding: 5px;
    margin: 3px;
    font-size: .8rem;
    border: 1px solid green;
    border-radius: 2px;
}
.markdown a{
    text-decoration: underline;
    color: blue;
}
</style>