<template>
    <div id="resume-div" class="d-flex justify-content-center">
        <!-- <h1 class="textResume">Resume</h1> -->
        <br>
        <button id="resume-btn" class="btn px-2 py-1 mt-8 btn-success ">
            Download Resume
           
            <a href="https://drive.google.com/file/d/1QyVNqv1Mv4cnfQAdFI1mLMG8xp94UgPp/view?usp=share_link">
             <span>
                <img src="../img/download32px.png" alt="">
            </span>
            </a>
        </button>
    </div>
</template>

<script>
export default {
}
</script>
<style scoped>
@import url(https://fonts.cdnfonts.com/css/clash-display);
#resume-btn{
    font-size: 16px;
    font-family: 'Clash Display', sans-serif;
    word-spacing: 2px;
    letter-spacing: 1px;
    color: white;
}
.textResume{
    font-size: 30px;
    font-family: 'Clash Display', sans-serif;
    word-spacing: 2px;
    letter-spacing: 1px;
    color: white;
}
#resume-div{
    margin: auto;
}
</style>