<template>
  <main>
    <Header></Header>
    <RouterLink to="sicbo">sicbo</RouterLink>
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
			someEvent(a){
				console.log(a,"a")
				alert(1)
			}
		},
		components: {
			Header,
		}
	}
</script>