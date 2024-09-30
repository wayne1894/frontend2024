<template>
	<header>
    <img @click="demoEvent" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/sicbo">Sicbo</RouterLink>
      </nav>
      {{test2}}
      {{demo}}
    </div>
  </header>
</template>
<script>
export default {
	props : ["test1","test2","test3"],
	data(){
		return {
			demo : this.test2
		}
	},
	mounted(){
		this.demo = "11"
		console.log(this.demo,"this.test2")
	},
	methods:{
		demoEvent(){
			this.$emit('someEvent','data')
		}
	}
}
</script>
<style scoped="">
</style>