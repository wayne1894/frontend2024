<template>
	課程內容頁 {{this.id}}
</template>
<script>
export default {
	props:["id"],
  data () {
    return {};
  },
  mounted(){
		console.log(this.id,"this.id")
  },
  computed: {
  },
  methods: {
  }
};
</script>