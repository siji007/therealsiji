<template>
  <div id="app">
   <appHeader> </appHeader>
   <div>
     <router-view></router-view>
   </div>
  </div>
</template>


<script>

import Header from './components/header'
// import Contact from './components/contact'
// import Project from './components/projects'
export default {
  name: 'App',
  components: {
    appHeader: Header,
    // appContact: Contact,


  
  }
}
</script>


<style>


</style>
