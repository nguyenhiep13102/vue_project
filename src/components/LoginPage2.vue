<template>
  <div class="toancuc">
    <div :class="{ active: isActive }" class="container" id="container">
      <div class="form_container sign-up">
        <form>
          <h1>Create Account</h1>
          <div class="social-icons">
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a>
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'telegram']" /></a>
          </div>
          <span>Use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" @click="signUp">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div class="social-icons">
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a>
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="g" class="icon"><font-awesome-icon :icon="['fab', 'telegram']" /></a>
          </div>
          <span>Or use your email password</span>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" @click="signIn">Sign In</button>
        </form>
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>Welcome Back</h1>
            <p>Enter your personal details to use all site features</p>
            <button @click="toggleForm(false)">Sign In</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button @click="toggleForm(true)">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleForm(active) {
        this.isActive = active;
      },
      signUp() {
        alert('User signed up');
      },
      signIn() {
        alert('User signed in');
      },
    },
  };
  </script>
<style>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
 /* @import url(../assets/CSS/style.css); */
.toancuc{
  display: flex;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center;     /* Căn giữa theo chiều dọc */
  height: 100vh;   
}
</style>