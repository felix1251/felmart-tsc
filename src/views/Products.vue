<template>
  <div>{{getMsg()}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Data {
  msg: string,
  count: number,
}

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
      return this.sample
    }
  },
});
</script>

<style lang=""></style>
