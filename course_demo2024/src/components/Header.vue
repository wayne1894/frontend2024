<template>
  <div class="header">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <RouterLink :to="{ name: 'home' }">
            <Logo class="title_img"></Logo>
            <span class="title_span">{{title}}</span>
          </RouterLink>
          <a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <div class="navbar-item field">
              <Search></Search>
            </div>
          </div>
        </div>

        <!-- For mobile and tablet -->
        <div v-show="isMenuOpen" class="navbar-end is-hidden-tablet">
          <Menu
            @loginClick="$emit('loginClick')"
            @registeredClick="$emit('registeredClick')"
          ></Menu>
        </div>

        <!-- For desktop -->
        <div class="navbar-end is-hidden-mobile">
          <Menu
            @loginClick="$emit('loginClick')"
            @registeredClick="$emit('registeredClick')"
          ></Menu>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import Menu from './Menu.vue';
  import Search from './Search.vue';
  import Logo from './Logo.vue'

  export default {
    name: 'Header',
    props: ['title'],
    data () {
      return {
        isMenuOpen: false,
      }
    },
    created(){
    },
    components: {
      Search,
      Menu,
      Logo
    }
  };
</script>

<style lang="scss" scoped>
.header{
  border-bottom: 1px solid #e2e8ec;
  .navbar{
    padding: 0;
    min-height: 70px;
    font-family : "微軟正黑體","Microsoft JhengHei",san-serif 
  }
  .title_img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
    margin-left: 10px;
    margin-top: 7px;
    margin-bottom: 5px;
  }
  .title_span{
    vertical-align: middle;
    margin-left: 5px;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
  }
  .navbar-menu{
    padding: 0
  }
  @media screen and (min-width: 960px){
    .navbar{
      padding: 0 10px;
    }
    .navbar-brand{
      padding-top: 10px;
      margin-right: 40px;
    }
    .title_img{
      width: 50px;
      height: auto;
      margin-top: 0;
      margin-bottom: 0;
    }
    .title_span{
      font-size: 15px;
    }
  }
  a {
    color: #4A4F54;
  }
  p.has-icons-left{
    min-width: 250px;
  }
    
}
</style>

