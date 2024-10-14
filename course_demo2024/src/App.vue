<template>
 	<Header 
     @loginClick="loginClick" 
     @registeredClick="registeredClick" 
     :title =" title"
     ></Header>
  <RouterView />
  <Footer :title="title" :year="year"></Footer>
  <LoginModal
      v-if="openModal" 
      @loginModalSubmit="loginModalSubmit"
      @openModalSync = "openModalSync" 
      :modalTyple="modalTyple" 
      :openModal="openModal"
    ></LoginModal>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import LoginModal from './components/LoginModal.vue'
import { useMainStore } from './stores/index.js'
import axios from 'axios';
import API from '../api.js'
	
	export default {
		setup(){
			
			useMainStore().loadCookie();//提早設定 cookie
			
			return {
				store : useMainStore()
			}
		},
		data(){
			return {
				title:"網站名稱",
				year: "2024",
				openModal: false,
      	modalTyple: ""
			}
		},
		mounted(){
			//console.log(API,"API")
		},
		methods:{
			openModalSync(open){
				this.openModal = open
			},
			loginClick(){
				this.openModal = !this.openModal;
				this.modalTyple = "login"
			},
			registeredClick(){
				this.openModal = !this.openModal;
				this.modalTyple = "registered"
			},
			loginModalSubmit(data){
				if(data.modalTyple == "login"){
					axios({
						method: API.member.login.method,
						url: API.member.login.url,
						headers: {
							'Content-Type': 'application/json' 
						},
						data: {
							...data
						}
					}).then((response)=> {
						this.store.setUserLoggedIn(response.data);
						this.openModal =false
					}).catch(error => {
					 const code = parseInt(error.response &&error.response.status)  //取得status code
					 console.log(code)
					 console.log(error.response.data) //取得資料
					 console.log("TO DO error !")
					});
				}
				if(data.modalTyple == "registered"){
					axios({
						method: API.member.registered.method,
						url: API.member.registered.url,
						headers: {
							'Content-Type': 'application/json' 
						},
						data: {
							...data
						}
					}).then((response)=> {
						console.log(response.data);
						//註冊寫入會員資料
						alert("註冊成功，請直接登入")
						this.openModal =false
					}).catch(error => {
							console.log(error)
					});
				}

				}
		},
		components: {
			Header,
			Footer,
			LoginModal
		}
	}
</script>

<style scoped>

</style>
