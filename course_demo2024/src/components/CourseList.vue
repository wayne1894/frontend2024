<template>
  <div class="courseList">
    <div class="columns is-centered is-multiline">
      <div class="card column is-5-tablet is-3-desktop" v-for="item in courses" :key="courses.id">
        <div class="course_item">
          <div class="card-image">
            <figure class="image">
              <img :src="item.img" :alt="item.name">
            </figure>
          </div>
          <div class="course_title_parent">
            <div class="course_title is-clearfix">
              <h2 class="is-pulled-left">{{item.name}}</h2>
            </div>
          </div>
          <div class="description">
            {{item.description}}
          </div>
					<RouterLink class="details" :to="{
              name: 'course-id',
              params: {
                id: item.id
              }
            }">
					</RouterLink>
        </div>
      </div>
      <div v-if="courses.length == 0" class="section">
        <p>沒有發現課程!!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	props:["courses"],
  data () {
    return {};
  },
  mounted(){
		console.log(this.courses,"this.courses")
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.courseList{
  .columns{
    margin-bottom: 50px;
    margin-top: 10px;
    padding: 0 20px;
  }
  .card {
    margin: 10px;
  }
  .card.column{
    padding: 0;
    border-radius: 5px;
  }
  .card-image img{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .course_item{
    padding-bottom: 5px;
  }
  .description{
    padding: 0 16px;
    font-size: 15px;
    color: #4a4a4a;
    margin-bottom: 0;
    padding-bottom: 10px;
    padding-right: 8px;
  }
  .course_title_parent{
    padding: 0 13px;
    margin-top: 10px;
    margin-bottom: 10px!important;
  }
  .course_title{
    position: relative;
    h2{
      display: inline-block;
      font-size: 19px;
      position: relative;
      color: #DFE4E5;
      top: 2px;
    }
    button{
      position: absolute;
      right: 8px;
      top: 4px;
    }
  }
  .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 5px;
//     &:hover {
//       border: 1px solid currentColor;
//     }
   }
   .button,
   .select {
     z-index: 2;
   }
  }

</style>
