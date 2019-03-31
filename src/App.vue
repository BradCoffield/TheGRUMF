<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add-submission">Add Submission</router-link> |
      <router-link to="/view-submissions">View Submissions</router-link>
    </div>
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
      color: #fff;
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
