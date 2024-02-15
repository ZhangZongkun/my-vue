<script setup lang="ts">
import { provide, ref } from 'vue'
import Child from '@/components/Child.vue'

const message = ref({ text: 'hello' })
provide('message', message)

const name = ref('James')

const location = ref('North Pole')

const updateLocation = () => {
  location.value = 'South Pole'
}

provide('location', { location, updateLocation })
</script>

<template>
  <div>Parent Provide: <input v-model="message.text" /></div>
  <div>{{ location }}</div>
  <div>{{ name }}</div>
  <Child v-model="name" />
</template>
