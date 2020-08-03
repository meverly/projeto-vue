<template>
  <div id="app">
    <Navbar></Navbar>
    <router-link to="teste">Teste</router-link>
    <router-view/>
    <carrossel></carrossel>
    <back2></back2>
    <back3></back3>
    <back4></back4>
    <back5></back5>

     </div>
</template>

<script>
import back5 from './components/back5/back5.vue'
import back4 from './components/back4/back4.vue'
import back3 from './components/back3/back3.vue'
import back2 from './components/back2/back2.vue'
import carrossel from './components/carrossel/carrossel.vue'
import Navbar from './components/Navbar/Navbar.vue'


export default {
  name: 'App',
  components: {
  
    carrossel,
    back2,
    back3,
    back4,
    back5,
    Navbar,
  }
}
</script>

<style>
#app {
  
}
</style>
