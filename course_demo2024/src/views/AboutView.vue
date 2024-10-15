<template>
  <CourseList :courses="coursesList"></CourseList>
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
            courses:[],
            list:[]
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

        try{
            let course = await axios({
            method: API.member.course.method,
            url: API.member.course.url,
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            data:{}
            })
			this.list = course.data;
            console.log(course.data,"course.data")
        }catch(err){
            //if(err.status == 401) alert(401)
            console.log(err,"err To Do")
        }


    },
    computed: {
		coursesList(){
			return this.courses.filter(i=> this.list.some(item => item.id === i.id));
		}
    },
    components: {
	  CourseList
	}
};
</script>
<style lang="scss" scoped>

</style>
