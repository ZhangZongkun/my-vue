import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([])
  const filter = ref<'all' | 'finished' | 'unfinished'>('all')
  const nextId = ref(0)

  const finishedTodos = computed(() =>
    todos.value.filter(todo => todo.isFinished)
  )
  const unfinishedTodos = computed(() =>
    todos.value.filter(todo => !todo.isFinished)
  )
  const filteredTodos = computed(() => {
    if (filter.value == 'finished') {
      return finishedTodos
    } else if (filter.value == 'unfinished') {
      return unfinishedTodos
    }
    return todos
  })

  const addTodo = (text: string) => {
    todos.value.push({ id: nextId.value++, text, isFinished: false })
  }

  return {
    todos,
    filter,
    finishedTodos,
    unfinishedTodos,
    filteredTodos,
    addTodo
  }
})

interface Todo {
  id: number
  text: string
  isFinished: boolean
}
