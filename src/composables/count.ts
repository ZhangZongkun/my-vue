import { ref } from 'vue'

export function useCount() {
  const count = ref(0)

  const add = () => {
    count.value++
  }

  return { count, add }
}
