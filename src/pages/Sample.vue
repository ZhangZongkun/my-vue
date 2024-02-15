<script setup lang="ts">
import { useCount } from '@/composables/count'
import { useMouse } from '@/composables/mouse'
import { computed, watchEffect } from 'vue'
import { useCountStore } from '@/stores/count'

const attrs = {
  class: 'wrapper',
  id: 'head'
}

const { count, add } = useCount()

const isEven = computed(() => {
  console.log('Is even')
  return count.value % 2 == 0
})

watchEffect(() => {
  console.log('Is even:', isEven.value)
})

const { x, y } = useMouse()

const store = useCountStore()
</script>

<template>
  <h2>Hello</h2>
  <p v-bind="attrs">{{ count }}, {{ isEven }}</p>
  <button @click="add">Change</button>
  <div>
    <span>鼠标：</span>
    {{ x }}, {{ y }}
  </div>
  <h3>Pinia</h3>
  <div>Count: {{ store.count }}</div>
  <div>Double: {{ store.doubleCount }}</div>
  <button @click="store.increment">Increment</button>
</template>

<style scoped>
.wrapper {
  font-size: 18px;
  color: red;
}
</style>
