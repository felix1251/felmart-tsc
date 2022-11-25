<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  data(){
    return{
      msg: "hello"
    }
  },
  components: {
  },
});
</script>

<style lang=""></style>
