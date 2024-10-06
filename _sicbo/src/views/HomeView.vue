<template>
  <main>
    <Header></Header>
    <div class="w-full max-w-[640px] md:max-w-[950px] mx-auto mt-5">
    	<RouterLink class="text-[#fff]" to="sicbo">sicbo 入口</RouterLink>
    </div>
  </main>
</template>
<script>
import Header from '../components/Header.vue'
import { useMainStore } from '../stores/index.js'
	export default{
		setup(){
			return {
				store : useMainStore()
			}
		},
		data(){
			return {
				demo:11
			}
		},
		mounted(){
			this.store.demo = 333
			console.log(this.store.demo,"this.store.demo")
		},
		methods:{
			
		},
		components: {
			Header,
		}
	}
</script>