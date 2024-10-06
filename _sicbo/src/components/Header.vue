<template>
  <header class="bg-primary">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/sicbo">Sicbo</RouterLink>
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