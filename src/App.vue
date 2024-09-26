<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
    
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'LoginPage' });
       
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  
}
</style>
