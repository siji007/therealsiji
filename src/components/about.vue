<template>
    <div class="content-container m-4 px-4">
        <div class="flex justify-between">
            <div class="intro ">
                <h1 class=" text-green-dark " id="headerIntro" style="">Hi,I'm Oluwasijibomi Olaifa.</h1>
                <p id="introText" class="mt-3 text-white">
                    I'm a product designer with education background in computer science, I have two years of 
                    experience in building product that maximize user engagement through excellent design. I 
                    have experience in producing high quality graphic and content related output
                </p>
                </div>

                <div id="imageDiv" class="">
                <img src="../img/profileSiji.jpeg" id="introImage" class="lg:float-right xl:float-right">
                
            </div>
   
        </div>
        <!-- <div id="footer">
            <footer class="p-2">
                <h1 id="copyright" class="text-center text-white text-2xl">&copy;TRS, 2022.</h1>
            </footer>
        </div> -->
    </div>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Balsamiq+Sans);
@import url(https://fonts.googleapis.com/css?family=Lobster);
@import url(https://fonts.googleapis.com/css?family=Metal+Mania);
@import url(https://fonts.cdnfonts.com/css/clash-display);

body{
    background-color:  #040f20;
}
html{
    box-sizing:border-box;
}
#footer{
    margin-top: auto;
}
/* .intro{
  font-family: Lobster;
  font-size: 50px;
  color: white;
} */
#introText{
    font-family: 'Clash Display', sans-serif;
    font-size:20px;
    text-align: start;
    word-spacing: 2px;
    letter-spacing: 2px;
}
#headerIntro{
font-family: Lobster;
}
/* .introImage {
    max-width: 100%;
} */
#introImage{
    background-size: cover;
    /* max-width: 100%; */
    max-width: 400px;
    height: 400px;
    margin-right: auto;
    border-radius: 35px;
}
.intro h1 {
    font-family: Metal Mania;
    font-size: 48px;  
}

.intro p {
    /* font-family: Poppins; */
    font-size: 25px;
}
.introImg{
    height:700px;
}
#imageDiv{
    margin-bottom: 70px;
}
#copyright{
    font-family: 'Clash Display', sans-serif;
}
/* #image{
    display: block;
    z-index: 1;
    top:120px;
    left: 185px;
    position: absolute;
   
} */
/* #myImg{
    height:500px;
    background-position: center;
    border-radius: 30%;
} */
@media (max-width: 991px){
    #introImage {
    max-width: 100%;
    border-radius: 35px;
    margin-top: 50px;
    max-height:500px;
    display: none;
}
#introText{
    font-family: 'Clash Display', sans-serif;
    font-size:20px;
    text-align: start;
    letter-spacing: 2px;
}
#headerIntro{
font-family: Lobster;
font-size: 30px;
}
.introImage {
    max-width: 100%;
    background-size: cover;
}
.intro h1 {
    font-family: Metal Mania;
    font-size: 48px;  
}
.intro p {
    /* font-family: Poppins; */
    font-size: 25px;
}
}
</style>
<script>
// data() {
//     return {
        
//     }
// },
// import jquery from '../js/jquery.min.js'
</script>