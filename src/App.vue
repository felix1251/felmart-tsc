
<template>
  <div>
    <navbar/>
    <router-view></router-view> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './layouts/Navbar.vue'

export default defineComponent({
  name: 'home',
  components: {
    Navbar
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
