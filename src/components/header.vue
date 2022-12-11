<template>
  <div>
    <div class="">
    <b-navbar class="px-8" toggleable="lg"  type="dark" variant="" style="background-color: #040f20; border-bottom:1px solid rgba(7, 107, 7, 0.527); box-shadow: 1px 2px 0px black;">
      <b-navbar-brand href="#">
        <img src="../img/TRS.jpg" class="w-16 " alt="" style="border-radius: 50%;">
      </b-navbar-brand>
      <b-navbar-toggle class="bg-green-dark" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto navItem"> 
            <b-nav-item class="" id="nav-item">
              <router-link to="/" tag="li"><a  id="navigation-item" class=" nav-link text-white-50">ABOUT ME</a></router-link>
            </b-nav-item>
            <b-nav-item id="nav-item">
              <router-link to="/projects" tag="li"><a class="articles nav-link contact lg:ml-3 xl:ml-3 text-white-50" >PROJECTS</a></router-link>
            </b-nav-item>
            <b-nav-item id="nav-item">
              <router-link to="/contact" tag="li"><a class="articles nav-link contact lg:ml-3 xl:ml-3 text-white-50" >CONTACT</a></router-link>
            </b-nav-item>
            <b-nav-item id="nav-item">
              <router-link to="/resume" tag="li"><a class="articles nav-link contact lg:ml-3 xl:ml-3 text-white-50" >RESUME</a></router-link>
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.navItem {
  font-family: Lobster;
}
.circleBrand {
  border-radius: 50%;
  width: 52px;
  height: 50px;
  display: block;
}
.brand {
  font-family: Lobster;
}
#navigation-item:hover{
  color: #1f9d55;
}
@media(max-width:991px){
  #nav-item{
    margin-left: 8px;
  }
}
</style>