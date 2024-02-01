<script setup lang="ts">
import DeepChild from '@/components/DeepChild.vue'

const name = defineModel()

const obj = {
  get hello() {
    return 'world'
  }
}
console.log(obj.hello) // world
</script>

<template>
  <h3>This is Child!</h3>
  <input v-model="name" />
  <DeepChild />
</template>
