<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const msg = inject<{ text: string }>('message', { text: 'hello' })

const { location, updateLocation } = inject<any>('location')

const router = useRouter()
const toHome = () => router.push('/')
</script>

<template>
  <h2>This is deep child</h2>
  <div>Message from root: {{ msg.text }}</div>
  <button @click="updateLocation">{{ location }}</button>
  <button @click="toHome">To Home</button>
</template>
