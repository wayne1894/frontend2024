<template>
  <p class="control has-icons-left">
    <input class="input is-rounded is-small" type="text" :placeholder="placeholder" @input="search">
    <span class="icon is-small is-left">
      <i class="fa fa-search"></i>
    </span>
  </p>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
        value: ''
    }
  },
  computed: {
    placeholder () {
        return 'Search...';
    }
  },
  methods: {
    search (e) {
      this.$router.push(this.$route.path);
    }
  }
}
</script>


