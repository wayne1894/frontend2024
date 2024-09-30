<template>
	<!--  語法實驗區-->
  <div class="text-[--primary]">這是紅色{{demo}}</div>
  <RouterView />
</template>

<script>
import Header from './components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'
	export default{
		data(){
			return {
				demo:1
			}
		},
		components: {
			Header,
		}
	}
</script>

<style scoped>
</style>
