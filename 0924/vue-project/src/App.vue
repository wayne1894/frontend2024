<template>
  <header class="bg-primary">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    {{demo}}
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

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
