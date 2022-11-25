<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Data } from '../types/views/Products.interface'

export default defineComponent({
  name: 'products',
  data(): Data {
    return {
      msg: "hello",
      count: 0,
    }
  },
  methods: {
  },
});
</script>

<style lang=""></style>
