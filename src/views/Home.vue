<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
   <section>
     <img src="../assets/mascot-1.png" alt="" id="mascot">
    </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

 

 
<style>
#mascot {display: block;margin: 0 auto;}
</style>
