<script setup lang="ts"></script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-link class="link" to="/">To home</router-link>
  <router-link class="link" to="/parent">To Parent</router-link>
  <router-link class="link" to="/sample">To sample</router-link>
  <router-link class="link" to="/user/john">To John</router-link>
  <router-link class="link" to="/user/frank">To Frank</router-link>
  <router-link class="link" to="/todos">Todos</router-link>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.link {
  margin-right: 12px;
}
</style>
