<script setup>
import "./global.css"
import Menu from "./components/Menu.vue"
</script>

<template>
  <div class="container">
    <Menu />
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: start;
}
</style>
