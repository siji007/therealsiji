<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light   sticky-top" style="background-color: #040f20; border-bottom:1px solid rgba(7, 107, 7, 0.527); box-shadow: 1px 2px 0px black;">
 
    <img src="../img/TRS.jpg" class="w-24 " alt="" style="border-radius: 50%;"> -->
    <!-- <div class="brand navbar-brand circleBrand bg-danger"><h4 class="pt-2 pl-1">TRS</h4></div> -->
    <!-- <button class="navbar-toggler bg-green-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon navbar-light"></span>
    </button> -->

    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navItem navbar-nav ml-auto "> -->
        <!-- <li class="nav-item active">
          
        </li> -->
        <!-- <router-link to="/" tag="li"><a class=" nav-link text-white-50">HOME</a></router-link> -->
        <!-- <li class="nav-item"> -->
        <!-- <router-link to="/projects" tag="li"><a class="articles nav-link contact lg:ml-3 xl:ml-3 text-white-50" >PROJECTS</a></router-link> -->
        <!-- </li> -->
<!-- 
        <router-link to="/contact" tag="li"><a class="articles nav-link contact lg:ml-3 xl:ml-3 text-white-50" >CONTACT</a></router-link>
        
      </ul>
    </div>
    </nav> -->

    <div>
    <b-navbar toggleable="lg"  type="dark" variant="" style="background-color: #040f20; border-bottom:1px solid rgba(7, 107, 7, 0.527); box-shadow: 1px 2px 0px black;">
      <b-navbar-brand href="#">
        <img src="../img/TRS.jpg" class="w-24 " alt="" style="border-radius: 50%;">
      </b-navbar-brand>

      <b-navbar-toggle class="bg-green-dark" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
    

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto navItem">
          <!-- <b-nav-form> -->
            <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
            <b-nav-item class="" id="nav-item">
              <router-link to="/" tag="li"><a class=" nav-link text-white-50">HOME</a></router-link>
            </b-nav-item>

            <b-nav-item id="nav-item">
              <router-link to="/projects" tag="li"><a class="articles nav-link contact lg:ml-3 xl:ml-3 text-white-50" >PROJECTS</a></router-link>
            </b-nav-item>

            <b-nav-item id="nav-item">
              <router-link to="/contact" tag="li"><a class="articles nav-link contact lg:ml-3 xl:ml-3 text-white-50" >CONTACT</a></router-link>
            </b-nav-item>
        
          <!-- </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <!-- <b-nav-item-dropdown right>
             Using 'button-content' slot
             <template #button-content>
              <em>User</em>
            </template> 
            <b-dropdown-item>
               
            </b-dropdown-item>
           
            <b-dropdown-item>Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->

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
#nav-item:hover{
  /* border:1px solid white */
  color: #1f9d55;
}
@media(max-width:991px){
  #nav-item{
    margin-left: 8px;
  }
  
  
}
</style>