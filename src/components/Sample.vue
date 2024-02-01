<script setup lang="ts">
import { useCount } from '@/composables/count'
import { useMouse } from '@/composables/mouse'
import { computed, watchEffect, ref } from 'vue'
import { useCountStore } from '@/stores/count'
import { useTodosStore } from '@/stores/todos'
import Child from '@/components/Child.vue'

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

const todosStore = useTodosStore()
const todo = ref('')

const name = ref('James')
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
  <div>{{ name }}</div>
  <Child v-model="name" />

  <h3>Todos</h3>
  <div v-for="todo in todosStore.todos">
    {{ todo.text }}
  </div>
  <input type="text" v-model="todo" />
  <button @click="todosStore.addTodo(todo)">Add</button>
</template>

<style scoped>
.wrapper {
  font-size: 18px;
  color: red;
}
</style>
