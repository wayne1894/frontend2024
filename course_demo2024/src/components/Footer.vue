<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <RouterLink :to="{ name: 'home' }">
        <Logo class='footer_logo' />
      </RouterLink>
      <div>
        <i class="far fa-copyright"></i> {{year}} <strong>{{title}}</strong> Co., Ltd, all rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '../components/Logo.vue'
  
export default {
  props: ['year','title'],
  created(){},
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.footer {
   background: #DFE4E5;
   color: black;
   padding: 2rem 0;
  &.is_course{
    width: 75%
  }
 }
 .footer_logo{
    width: 190px;
    margin-bottom:10px;
 }

@media screen and (max-width: 1023px){
  .footer {
    &.is_course{
      width: 100%
    }
  }
}
</style>

