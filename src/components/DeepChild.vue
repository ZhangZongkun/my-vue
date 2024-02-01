<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const msg = inject('message')

const router = useRouter()

const toHome = () => router.push('/')
</script>

<template>
  <h2>This is deep child</h2>
  <div>Message from root: {{ msg }}</div>
  <button @click="toHome">To Home</button>
</template>
