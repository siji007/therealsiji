<template>
  <div id="app">
    <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    :css="false"
    
    
    > -->
    <appHeader> </appHeader>

    <!-- </transition> -->
    <div>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

import Header from './components/header'
import Velocity from 'velocity-animate'
// import Contact from './components/contact'
// import Project from './components/projects'
export default {
  name: 'App',
  components: {
    appHeader: Header,
    // appContact: Contact,
  },
  methods:{
    beforeEnter(el){
      el.style.opacity = 0
      el.style.width = '0em'
    },
    enter(el, done){
      Velocity(
        el,
        {opacity: 1, width: '12em'},
        {duration:2000, easing: 'easeOutCubic', complete: done}
      )
    },
    // leave(el,done){
    //   Velocity(
    //     el,
    //     {opacity:0, width:'0em'},
    //     {duration:2000, easing: 'easeInCubic', complete:done}
    //   )
    // }

  }
}
</script>
<style>
.fade-enter{
  opacity:0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 2s ease-out;
}
.fade-leave-to{
  opacity:0;
}
.headFade{
  opacity:0;
}
.headFade-enter-active,
.headFade-leave-active{
  transition: opacity 2s ease-out;
}

</style>



