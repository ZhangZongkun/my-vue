<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

const todosStore = useTodosStore()
const todoAdd = ref('')
</script>

<template>
  <h3>Todos</h3>
  <div class="card">
    <div class="tabs">
      <input type="radio" id="all" value="all" v-model="todosStore.filter"/>
      <label for="all">全部</label>
      <input type="radio" id="finished" value="finished" v-model="todosStore.filter"/>
      <label for="finished">已完成</label>
      <input type="radio" id="unfinished" value="unfinished" v-model="todosStore.filter"/>
      <label for="unfinished">未完成</label>
    </div>
    <div v-for="todo in todosStore.filteredTodos" class="todo">
      <div class="check" @click="todo.isFinished = !todo.isFinished">
        {{ todo.isFinished ? '选中' : '取消' }}
      </div>
      <div :class="[todo.isFinished ? 'finished' : '', 'text']">
        {{ todo.text }}
      </div>
      <div class="delete">删除</div>
    </div>
    <input type="text" v-model="todoAdd" />
    <button @click="todosStore.addTodo(todoAdd)">Add</button>
  </div>
</template>

<style scoped>
.card {
  border: solid 1px #999;
  border-radius: 6px;

  .tabs {
    display: flex;
    justify-content: center;

    .tab {
      padding: 2px 8px;
      margin: 6px;
    }
  }

  .todo {
    display: flex;
    padding: 2px 6px;
    margin-bottom: 6px;

    .text {
      flex: 1;
      text-align: start;
      margin: 0 6px;
      background-color: blanchedalmond;

      &.finished {
        text-decoration: line-through;
      }
    }

    .delete {
      padding: 0 12px;
      border-radius: 8px;
      color: white;
      background-color: rgb(193, 68, 18);
    }
  }
}
</style>
