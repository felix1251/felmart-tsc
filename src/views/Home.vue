<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Data } from '../types/views/Home.interface'

export default defineComponent({
  name: 'home',
  data(): Data {
    return{
      msg: "hello"
    }
  },
  components: {
  },
});

</script>
<style lang=""></style>
