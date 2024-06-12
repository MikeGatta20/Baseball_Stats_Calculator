<template>
  <div id='app'> 
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/MyStatsView">My Stats</router-link>
    </nav>
    <router-view/> 
  </div>
</template>

<script> 


export default {


}

</script>

<style scoped>


h1 {
  text-align: center;
}

nav {
  text-align: center;
}

</style>
