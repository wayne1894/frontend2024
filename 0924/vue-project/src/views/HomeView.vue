<template>
 	<Header @someEvent="someEvent" test2="33" :test1="demo"></Header>
  <main>
    demo
    <RouterLink to="sicbo">aaa</RouterLink>
  </main>
</template>
<script>
import Header from '../components/Header.vue'
	export default{
		data(){
			return {
				demo:11
			}
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