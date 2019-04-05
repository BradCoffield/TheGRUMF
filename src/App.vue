<template>
  <div id="app">
     <nav class="navbar" id="nav">
        <div class="container">
        <div class="navbar-brand is-large">
          <a class="navbar-item" href="/">
          <img src="../src/assets/mascot-1.png" alt="" style="margin-right:5px;">   TheGRUMF 
          </a>
          <button @click="makeBurger" class="button navbar-burger" data-target="navMenu" v-bind:class="{ 'is-active': activator }">
              <span></span>
              <span></span>
              <span></span>
        </button>
        </div>
        <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
          <div class="navbar-end">
            <div class="navbar-item">
              <router-link to="/">Home</router-link> 
            </div>
            <div class="navbar-item ">
              <router-link to="/add-submission">Add Submission</router-link> 
            </div>
            <div class="navbar-item">
             <router-link to="/view-submissions">View Submissions</router-link>
            </div>
            <!-- <div class="navbar-item">
              <a class="">Logout</a>
            </div> -->
        </div>
      </div>
      </div>
    </nav>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add-submission">Add Submission</router-link> |
      <router-link to="/view-submissions">View Submissions</router-link>
    </div> -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
 @import "~bulma/sass/utilities/_all";
 

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
  background-color: $primary;
  margin-bottom: 1.5rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #333;
      background: lightgray;
      padding: 5px;
      border-radius: 3px;
    }
  }
}
.container {
  padding: 0 1rem;
}
h1,h2,h3,h4,h5,h6 {font-weight:bold!important}
h1 {font-size: 2rem!important}
h2 {font-size:1.8rem!important}
h3 {font-size:1.5rem!important}
</style>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: '',
      activator: false
    }
  },
  methods: {
    makeBurger () {
      this.activator = !this.activator
      return this.activator
    }
  }
}
</script>