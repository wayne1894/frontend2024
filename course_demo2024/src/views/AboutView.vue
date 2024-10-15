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
            courses:[]
        }
    },
    async created(){
        //載入這個網站的所有課程
        let data = await axios({
           method: API.getCourses.method,
           url: API.getCourses.url,
           headers:{
             'Content-Type':'application/json'
           },
           data:{}
        })
        this.courses = data.data;
        //console.log(data.data,"data.data")

        let jwtToken = this.store.id_token;

        let course = await axios({
           method: API.member.course.method,
           url: API.member.course.url,
           headers:{
             'Content-Type':'application/json'
           },
           data:{}
        })

    },
    components: {
	  CourseList
	}
};
</script>
<style lang="scss" scoped>

</style>
