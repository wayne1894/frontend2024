<template>
	<CourseList :courses="courses"></CourseList>
</template>
<script>
	import { useMainStore } from '../stores/index.js'
	import CourseList from '../components/CourseList.vue'
	import axios from 'axios';
	import API from '../../api.js'
	export default {
		setup(){
			return {
				store : useMainStore(),
			}
		},
		data(){
			return {
				courses: []
			}
		},
		async created(){
			//載入 courses
			let data = await axios({
					method: API.getCourses.method,
					url: API.getCourses.url,
					headers: {
						'Content-Type': 'application/json' 
					},
					data: {}
			})
			this.courses = data.data;
		},
		async mounted(){

		},
		components: {
			CourseList
		}
	}
</script>


