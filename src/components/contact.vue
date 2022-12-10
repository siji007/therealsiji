<template>
    <div class="container" style="">
        <div class="content p-2">
            <h1 class="text-center textContact text-white mt-8">Contact me</h1>
            <div class="display d-flex mr-auto ml-auto justify-center " style="margin-top:20px;">
                <div><a href="https://www.behance.net/therealsiji"><img  class="facebook" src="../img/behance-logo.png" alt=""></a></div>
            
                <div>
                    <a href="http://twitter.com/Siji_Ibukun">
                        <img  class="twitter ml-3" src="../img/twitter.png" alt="">
                        <!-- <lottie-animation
                        path = "https://assets10.lottiefiles.com/packages/lf20_ayl5c9tf.json"
                        :background="transparent"  
                        :speed="1"  
                        :width= "300" 
                        :height= "300" 
                        loop controls autoplay
                        /> -->
                        <!-- <lottie-player class="twitter ml-3" src="https://assets10.lottiefiles.com/packages/lf20_ayl5c9tf.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> -->
                    </a>
                </div>
                <!-- <div><a href="https://github.com/siji007"><img  class="github ml-3" src="../img/github.png" alt=""></a></div> -->
                <div><a href="https://linkedin.com/in/oluwasijibomi-olaifa"><img  class="linkedIn ml-3" src="../img/linkedin.png" alt=""></a></div>
            </div>

            
        </div>

        <!-- <div id="footer">
        <footer class="p-4" style="margin-top:250px", "position:fixed">
            <h1 class="text-center text-white text-3xl">&copy; 2020, TRS.</h1>
        </footer>
        </div>
         -->

    </div>
</template>
<style scoped>
@import url(https://fonts.cdnfonts.com/css/clash-display);
   @import url('../css/contact.css');
   .facebook{
       width: 50px;
   }
   .twitter{
       width: 50px;
   }
  
   .github{
       width:50px;
   }
   .linkedIn{
       width:50px;
   }
   .display, .textContact{
       /* position: absolute;
       top: 50%;
       left: 0%; */
       /* margin-top: -50%;
       margin-left: -50%; */
       /* width: 100%;
       height: 100%; */
      font-family: Lobster;
   }
   .textContact{
       font-size: 30px;
       font-family: 'Clash Display', sans-serif;
       word-spacing: 2px;
       letter-spacing: 1px;
       
   }
   /* .content{
    /* position: static; */
    /* top: 100%;
    left: 50%; */
    /* margin-top: -280px;
    margin-left: -200px;} */
   
   @media(max-width:991px){
       .facebook{
       width: 30px;
   }
   .twitter{
       width: 30px;
   }
  
   .github{
       width:50px;
   }
   .linkedIn{
       width:30px;
   }
   .textContact{
       font-size: 30px;
       font-family: 'Clash Display', sans-serif;
       word-spacing: 2px;
       letter-spacing: 1px;
   }
   }
</style>
