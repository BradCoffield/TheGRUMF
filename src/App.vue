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
       <div id="firebaseui-auth-container"></div>      <div id="sign-in-status"></div>    <a href @click="logOut">Log out</a>
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
import firebase from "./Firebase";
import router from "./router";
import * as firebaseui from "firebaseui";
export default {
  name: 'baseApp',
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
    },
    logOut() {
      firebase.auth().signOut();
    }
  },
  created(){
      var uiConfig = {
      signInSuccessUrl: "/view-submissions",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    };
     // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);

    let initApp = (function() {
      firebase.auth().onAuthStateChanged(
        function(user) {
          if (user) {
           
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
      
            console.log(email)
            user.getIdToken().then(function(accessToken) {
               
              document.getElementById("sign-in-status").textContent =
                `Signed in as ${email}`;
              // document.getElementById("sign-in").textContent = "Sign out";
              // document.getElementById(
              //   "account-details"
              // ).textContent = JSON.stringify(
              //   {
              //     displayName: displayName,
              //     email: email,
              //     emailVerified: emailVerified,
              //     phoneNumber: phoneNumber,
              //     photoURL: photoURL,
              //     uid: uid,
              //     accessToken: accessToken,
              //     providerData: providerData
              //   },
              //   null,
              //   "  "
              // );
            });
          } else {
        
            // User is signed out.
            document.getElementById("sign-in-status").textContent =
              "Signed out";
            document.getElementById("sign-in").textContent = "Sign in";
            document.getElementById("account-details").textContent = "null";
          }
        },
        function(error) {
          console.log(error);
        }
      );
    })();
  }
}
</script>