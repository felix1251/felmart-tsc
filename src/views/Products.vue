<template>
  <div>{{sample}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'products',
  data(){
    return{
      sample: "hello"
    }
  },

  components: {
    async changeMsg(value : string): Promise<void>{
      
    }
  },
});
</script>

<style lang=""></style>
