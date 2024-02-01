<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()
console.log(route.params.id)

watch(
  () => route.params.id,
  id => console.log('User', id)
)
</script>

<template>
  <h1>User</h1>
  <div>ID: {{ $route.params.id }}</div>
</template>
