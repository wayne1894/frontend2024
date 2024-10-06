<template>
  <header class="bg-primary">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    {{demo}}
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/demo">Demo</RouterLink>
      </nav>
    </div>
  </header>
</template>
<script>
    export default{
        data(){
            return {
                demo : 1
            }
        },
    }
</script>