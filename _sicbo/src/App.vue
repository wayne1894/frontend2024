<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default {
  data(){
    return {
      demo : 1
    }
  },
}
</script>


<style scoped>
</style>
