<script setup lang="ts">
import { provide, ref } from 'vue'
import Child from '@/components/Child.vue'

const name = ref('James')

const message = ref({ text: 'hello' })
provide('message', message)

const location = ref('North Pole')
const updateLocation = () => {
  location.value = 'South Pole'
}
provide('location', { location, updateLocation })
</script>

<template>
  <Child v-model="name" />
  <div>Parent Provide: <input v-model="message.text" /></div>
  <div>{{ location }}</div>
  <div>{{ name }}</div>
</template>
