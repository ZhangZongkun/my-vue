<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'

const fontSize = ref(1)
</script>

<template>
  <h1>Home</h1>
  <div :style="{ fontSize: fontSize + 'em' }">文本内容</div>
  <HelloWorld
    msg="good to see you"
    isPublished
    @enlarge="size => (fontSize += size)"
  />
</template>
