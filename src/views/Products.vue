<template>
  <div>{{getMsg()}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Data } from '../types/views/Products.interface'

export default defineComponent({
  name: 'products',
  data(): Data {
    return {
      msg: "sample",
      count: 9,
    }
  },
  methods: {
    getMsg(): string{
      return this.msg
    }
  },
});
</script>

<style lang=""></style>
